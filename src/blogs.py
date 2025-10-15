from utils import log_error,log_info,log_warn
##*
##* CONFIG
##*

# GLOBAL VAR
page_index = 0

BASE_URL = "https://pingh5.com/"
BLOGS_NEWS_URL = "https://pingh5.com/blog/news/{slug}"
BLOGS_URL = "https://pingh5.com/blogs/{id}?page={page}"

# SAVE
BLOGS_DATA_SAVING = "../data/blogs"
BLOGS_ERROR_SAVING = "../errors/blogs"

# DEFINE WORKERS
MAX_PAGE_WORKERS = 5

import os
BLOGS_DATA_SAVING_ABS = os.path.abspath(BLOGS_DATA_SAVING)
BLOGS_ERROR_SAVING_ABS = os.path.abspath(BLOGS_ERROR_SAVING)


## REQUEST SESSION
import requests
session = requests.Session()

##*
##* DATACLASS
##*
from dataclasses import dataclass, field
from typing import List, Dict, Any
@dataclass
class News:
    meta: Dict[str,Any] = field(default_factory=dict)
    content: str = ""
@dataclass
class Blog: ## https://pingh5.com/blog/news/top-5-dating-apps-of-2025
    tag: str = ""
    title: str = ""
    slug: str = ""
    createdDate: str = ""
    description: str = ""
    thumbnail: str = ""
    news: News = field(default_factory=News)
@dataclass
class Blogs: ## https://pingh5.com/blogs/29
    page: int = -1
    blog: List[Blog] = field(default_factory=list)
    meta: Dict[str,Any] = field(default_factory=dict)


##*
##* SAVING
##*
from dataclasses import asdict
from datetime import datetime
import os
import json
# save page to json
def save_page_to_json(data, filename, path=BLOGS_DATA_SAVING_ABS):
    try:
        if not os.path.exists(path):
            os.makedirs(path)
        file_path = os.path.join(path, filename)
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(asdict(data), f, ensure_ascii=False, indent=2)
        return True
    except Exception as e:
        error = {
            "func": "save_page_to_json",
            "filename": filename,
            "path": path,
            "msg": str(e),
            "time": datetime.now().isoformat()
        }
        log_error(f"⚠️ Error saving page {filename}: {e}")
        append_errors_md([error], page=data.index)
        return False
# merge pages
def merge_pages_to_json(filename,folder_path=BLOGS_DATA_SAVING_ABS):
    all_pages = []
    try:
        for fname in sorted(os.listdir(folder_path)):
            if fname.endswith(".json") and fname != filename:
                fpath = os.path.join(folder_path, fname)
                try:
                    with open(fpath, "r", encoding="utf-8") as f:
                        data = json.load(f)
                        if isinstance(data, dict):
                            all_pages.append(data)
                except json.JSONDecodeError as e:
                    errors = {
                        "func": "merge_pages_to_json",
                        "file": fpath,
                        "msg": str(e),
                        "time": datetime.now().isoformat()
                    }
                    log_error(f"⚠️ Invalid JSON file skipped: {fpath}")
                    append_errors_md([errors], page="merge")
        output_path = os.path.join(folder_path, filename)
        merged = {
            "merged_at": datetime.now().isoformat(),
            "pages": all_pages
        }

        with open(output_path, "w", encoding="utf-8") as f:
            json.dump(merged, f, ensure_ascii=False, indent=2)

        return True
    except Exception as e:
        error = {
            "func": "merge_pages_to_json",
            "folder": folder_path,
            "msg": str(e),
            "time": datetime.now().isoformat()
        }
        log_error(f"⚠️ Error merging pages: {e}")
        append_errors_md([error], page="merge")
        return False
## Save errors in md
def append_errors_md(errors, path=BLOGS_ERROR_SAVING_ABS, page=-1, filename="errors.md"):
    if not errors:
        return
    
    if not os.path.exists(path):
        os.makedirs(path)
    full_path = os.path.join(path, filename)

    with open(full_path, "a", encoding="utf-8") as f:
        f.write(f"\n## 🕒 {datetime.now().isoformat()} - Page {page}\n\n")
        for err in errors:
            f.write(f"- **Func:** {err.get('func','?')}  \n")
            f.write(f"  **Msg:** {err.get('msg','?')}  \n")
            if "url" in err:
                f.write(f"  **URL:** {err['url']}  \n")
            if "status_code" in err:
                f.write(f"  **Status:** {err['status_code']}  \n")
            f.write("\n")
    print(f"📝 Errors logged for page {page} -> {full_path}")

##*
##* NETWORKING
##*
import time
import threading
lock = threading.Lock()

def safe_request(session, url, headers=None, cookies=None, timeout=15, retries=3, backoff=2, _errors = []):
    global page_index
    for attempt in range(1, retries + 1):
        try:
            res = session.get(url, headers=headers, cookies=cookies, timeout=timeout)

            if res.status_code == 200:
                return res
            elif res.status_code in [500, 502, 503, 504]:
                log_warn(f"⚠️ Server error {res.status_code}, retry {attempt}/{retries} ... {url}")
            else:
                return res
        except (requests.exceptions.Timeout, requests.exceptions.ConnectionError) as e:
            log_warn(f"⏳ Network error at {url}, retry {attempt}/{retries}: {e}")
        except Exception as e:
            log_error(f"❌ Unknown error at {url}, retry {attempt}/{retries}: {e}")

        time.sleep(backoff * attempt)

    with lock:
        errors = ({
            "func": "safe_request",
            "url": url,
            "time": datetime.now().isoformat(),
            "msg": f"Failed after {retries} retries"
        })
        append_errors_md([errors],path=BLOGS_ERROR_SAVING_ABS, page = page_index)
    return None

##-------------- EXTRACT DATA ----------------
from urllib.parse import urlparse
from bs4 import BeautifulSoup
import json
import re
## Extract meta
def extract_meta(soup) -> Dict[str, Any]:
    meta = {}
    for tag in soup.find_all("meta"):
        key = tag.get("property") or tag.get("name") or tag.get("itemprop")
        if not key:
            continue
        value = tag.get("content", "").strip()
        if key in meta:
            if isinstance(meta[key], list):
                meta[key].append(value)
            else:
                meta[key] = [meta[key], value]
        else:
            meta[key] = value
    return meta

## Extract slug from url
def extract_slug(url) -> str:
    parsed = urlparse(url)
    path = parsed.path
    parts = [p for p in path.split("/") if p]
    slug = parts[-1] if parts else ""
    return slug
def extract_score(element) -> int:
    rating = element.select_one("span.rating-info")
    value = -1
    if rating: 
        classes = rating.get("class", [])
        for c in classes:
            match = re.search(r"r(\d+)", c)
            if match:
                value = int(match.group(1))
    return value
##*
##* NEWS
##*
def extract_news(slug) -> News:
    url = BLOGS_NEWS_URL.format(slug=slug)
    try:
        res = safe_request(session=session,url=url)
        soup = BeautifulSoup(res.text,"html.parser")
        meta = extract_meta(soup)
        if res.status_code != 200:
            log_error(f"⚠️ Error {res.status_code}: {url}",page=slug)
            errors = {
                "func": "request_news",
                "time": datetime.now().isoformat(),
                "msg": f"⚠️ Error {res.status_code}: {url}"
            }
            append_errors_md([errors])
            return None
        content = soup.find('div',class_='post-content')
        news = News(meta=meta if meta else None,
                    content=str(content) if content else None,)
        return news
    except Exception as e:
        errors = {
            "func": "extract_news",
            "time": datetime.now().isoformat(),
            "url": slug,
            "msg": str(e)
        }
        log_error(f"❌ Exception in extract_news: {e}",slug)
        append_errors_md(errors=[errors],page=slug)
        return None
    
##*
##* BLOG
##*
def extract_blog(element) -> Blog:
    ## Title
    title_element = element.select_one("p.font-semibold")
    title = title_element.get_text(strip=True) if title_element else None
    ## Description
    description_element = element.select_one("p.text-gray-700")
    description = description_element.get_text(strip=True) if description_element else None
    ## Created date
    created_date_element = element.select_one("p.text-gray-400")
    created_date = created_date_element.get_text(strip=True) if created_date_element else None
    ## Thumbnail
    thumbnail_element = element.find("img")
    thumbnail = thumbnail_element.get("src")
    ## Tag
    tag_element = element.select_one("p.backdrop-blur-sm")
    tag = tag_element.get_text(strip=True)

    ## Slug
    slug_url = element.get("href")
    slug = extract_slug(slug_url)

    ## News
    news = extract_news(slug=slug)
    blog = Blog(
        title=title if title else None,
        description=description if description else None,
        createdDate=created_date if created_date else None,
        thumbnail=thumbnail if thumbnail else None,
        tag=tag if tag else None,
        slug=slug if slug else None,
        news=news,
    )
    return blog
##*
##* BLOGS
##*
def extract_blogs(id,page) -> Blogs:
    url = BLOGS_URL.format(id=id,page=page)
    blogs = Blogs()
    blogs.page = page
    try:
            res = safe_request(session=session,url=url)
            soup = BeautifulSoup(res.text,"html.parser")
            meta = extract_meta(soup)
            if res.status_code != 200:
                log_error(f"⚠️ Error {res.status_code}: {url}",page=page)
                errors = {
                    "func": "request",
                    "time": datetime.now().isoformat(),
                    "msg": f"⚠️ Error {res.status_code}: {url}"
                }
                append_errors_md([errors])
                return None
            blogs_elements = soup.select('a[href*="/blog/news/"]')
            blog_list: list[Blog] = []
            for element in blogs_elements:
                blog_list.append(extract_blog(element=element))
            blogs.meta = meta if meta else None
            blogs.blog = blog_list
            return blogs
    except Exception as e:
        errors = {
            "func": "extract_blogs",
            "time": datetime.now().isoformat(),
            "url": url,
            "msg": str(e)
        }
        log_error(f"❌ Exception in extract_h5game: {e}",page)
        append_errors_md(errors=[errors],page=page)
        return None
##*
##* MAIN
##*
from concurrent.futures import ThreadPoolExecutor, as_completed
def main(news_folder, id = 28,data_path=BLOGS_DATA_SAVING_ABS, errors_path = BLOGS_ERROR_SAVING_ABS):
    # Create folder timestamp
    crawl_path = os.path.join(data_path,news_folder)
    if not os.path.exists(data_path):
        os.makedirs(data_path)
    if not os.path.exists(errors_path):
        os.makedirs(errors_path)
    log_info("🚀 Starting multi-threaded extraction...")
    index = 1
    stop_flag = False
    while not stop_flag:
        log_info(f"🔍 Crawling ID={id} ...")
        # Define page batch range
        pages = range(index, index + MAX_PAGE_WORKERS)
        valid_count = 0  
        with ThreadPoolExecutor(max_workers=MAX_PAGE_WORKERS) as executor:
            futures = {
                executor.submit(extract_blogs, id, i): i for i in pages
            }
            for future in as_completed(futures):
                i = futures[future]
                try:
                    # Get extracted page result
                    data = future.result()
                    if data and getattr(data, "blog", []):
                        # Save JSON
                        saved = save_page_to_json(data=data,filename= f"id_{id}_page_{i}.json",path=crawl_path)
                        if saved:
                            log_info(f"💾 Saved page {i}")
                            valid_count += 1
                        else:
                            errors={"func": "save_page_to_json","page": i,"msg": f"Failed to save page {i}"}
                            append_errors_md([errors], page=i, path=errors_path)
                except Exception as e:
                    # Log any extraction errors
                    log_error(f"❌ Error extracting page {i}: {e}")
                    errors={"func": "extract_page","page": i,"msg": str(e)}
                    append_errors_md([errors], page=i, path=errors_path) 
            if valid_count == 0:
                log_info("No data can crawl !")
                stop_flag = True
            else:
                index += MAX_PAGE_WORKERS
    log_info("✅ Extraction completed.")

if __name__ == "__main__":
    news_folder = datetime.now().strftime("%Y-%m-%dT%H-%M-%S")
    for id in range(28,32):
        main(news_folder=news_folder, id=id)
        ## Merge data
    try:
        merged = merge_pages_to_json(filename="blogs.json",folder_path=os.path.join(BLOGS_DATA_SAVING_ABS,news_folder))
        if merged:
            log_info("💾 Saved merged pages successfully!")
        else:
            errors = {"func": "merge_pages_to_json","msg": "Merge failed !"}
            append_errors_md([errors], page=-1, path=BLOGS_ERROR_SAVING_ABS)
    except Exception as e:
        errors = {"func": "merge_pages_to_json","msg": str(e)}
        append_errors_md([errors], page=-1, path=BLOGS_ERROR_SAVING_ABS)