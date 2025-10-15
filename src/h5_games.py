import requests
from dataclasses import dataclass, field, asdict
from typing import List, Dict, Any
import os
from utils import log_info, log_error, log_warn
from datetime import datetime
import json
##*
##* CONFIG
##*

# GLOBAL VAR
page_index = 0
# APPREVIEWS URL
BASE_URL = "https://pingh5.com/"
H5GAMES__URL = "https://pingh5.com/load-more-h5-games/{index}"
H5GAMES_BLOG_URL = "https://pingh5.com/blog/h5-game/{id}"
H5GAMES_PLAY_URL = "https://pingh5.com/blog/h5-game-play/{id}"

# SAVE
H5GAMES_DATA_SAVING = "../data/h5games"
H5GAMES_ERROR_SAVING = "../errors/h5games"

# DEFINE WORKERS
MAX_PAGE_WORKERS = 5

H5GAMES_DATA_SAVING_ABS = os.path.abspath(H5GAMES_DATA_SAVING)
H5GAMES_ERROR_SAVING_ABS = os.path.abspath(H5GAMES_ERROR_SAVING)

# DEFINE REQUEST
HEADERS = {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "referer": "https://pingh5.com/h5-game",
    "sec-ch-ua": '"Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36"
}

COOKIES = {
    "template": "fastpitchcentral.com",
    "_ga": "GA1.1.1107580726.1759029750",
    "_gcl_au": "1.1.465482488.1759029750",
    "__gads": "ID=d117d61d445b0b44:T=1759029751:RT=1759348604:S=ALNI_MZpQ8pH8dIbNbGSDcnRPUNziD-VTw",
    "__eoi": "ID=4a538df29f99ce02:T=1759029751:RT=1759348604:S=AA-AfjYk1Hx9eQFU-U8GobnZyLbo",
    "FCNEC": "%5B%5B%22AKsRol9lwTHHFz_s0PFhYAiTBtbQtkgBaLgNAGMZMJ4AdeYuBF-LB5VafuRWmyG39Rs8wNCcjOrOZ0SPy-cAzIN1ZvAYiU4MDi4rG11fPthXtgheKtAh58ZS-xBz921a4lsgjOIXqLge1obh9mIyZSskFx-nUacHpA%3D%3D%22%5D%5D"
}

## REQUEST SESSION
session = requests.Session()

##*
##*  DATACLASS
##*
@dataclass
class H5GameDetail: ## https://pingh5.com/blog/h5-game/34947
    rating: float = -1.0
    content: str = ""
    language: List[str] = field(default_factory=list)
    category: List[str] = field(default_factory=list)
    gender : List[str] = field(default_factory=list)
    tags: List[str] = field(default_factory=list)
    gameplay_url: str = "" ## https://pingh5.com/blog/h5-game-play/34947
    meta: Dict[str,Any] = field(default_factory=dict)
@dataclass
class H5GameBlog:
    id: int = -1
    thumbnail: str = ""
    title: str = ""
    h5game_detail: H5GameDetail = field(default_factory=H5GameDetail)
    
@dataclass
class H5Game:
    index: int = -1
    blogs: List[H5GameBlog] = field(default_factory=list)
    meta: Dict[str, Any] = field(default_factory=dict)


##*
##* SAVING
##*
# save page to json
def save_page_to_json(data, filename, path=H5GAMES_DATA_SAVING_ABS):
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
def merge_pages_to_json(filename,folder_path=H5GAMES_DATA_SAVING_ABS):
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
def append_errors_md(errors, path=H5GAMES_ERROR_SAVING_ABS, page=-1, filename="errors.md"):
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
        append_errors_md([errors],path=H5GAMES_ERROR_SAVING_ABS, page = page_index)
    return None


from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import threading
_driver_lock = threading.Lock()
_driver_instance = None

def get_driver(headless=True):
    global _driver_instance
    with _driver_lock:
        if _driver_instance is None:
            options = webdriver.ChromeOptions()
            if headless:
                options.add_argument("--headless=new")
            options.add_argument("--no-sandbox")
            options.add_argument("--disable-dev-shm-usage")
            options.add_argument("--disable-gpu")
            options.add_argument("--disable-blink-features=AutomationControlled")

            _driver_instance = webdriver.Chrome(
                service=Service(ChromeDriverManager().install()),
                options=options
            )
        return _driver_instance

def close_driver():
    global _driver_instance
    with _driver_lock:
        if _driver_instance:
            _driver_instance.quit()
            _driver_instance = None

def fetch_page(url: str, headless=True) -> str:
    driver = get_driver(headless)
    driver.get(url)
    driver.implicitly_wait(5)
    html = driver.page_source
    return html

##*
##* EXTRACT DATA
##*
from urllib.parse import urlparse
from bs4 import BeautifulSoup

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
##*
##* H5GAME_DETAIL
##*
def find_bg_texts(root):
            return [
                p.get_text(strip=True)
                for p in root.find_all("p", class_=lambda c: c and "bg-(--color_theme)" in c)
            ]
def extract_tags(element) -> Dict[str, Any]:
    tags = {
        "language": "",
        "category": [],
        "gender": [],
        "tags": []
    }
    for block in element.find_all("div", class_="flex"):
        label_el = block.find("p", class_="font-semibold")
        if not label_el:
            continue
        label_text = label_el.get_text(strip=True).lower()
        # LANGUAGE
        if label_text == "language":
            vals = find_bg_texts(block)
            if vals:
                tags["language"] = vals[0]
        # CATEGORY
        elif label_text == "category":
            vals = find_bg_texts(block)
            if vals:
                tags["category"].extend(vals)
        # GENDER
        elif label_text == "gender":
            vals = find_bg_texts(block)
            if vals:
                tags["gender"].extend(vals)
        # TAGS
        elif label_text == "tags":
            vals = find_bg_texts(block)
            if vals:
                tags["tags"].extend(vals)

    return tags
def extract_description_instruction(soup):
    des_heading = soup.find("p", string="Description")
    des_ins_element = des_heading.find_parent("div")
    if des_ins_element:
        tags_element = des_ins_element.select_one("div.flex.divide-gray-300")
        if tags_element:
            tags = extract_tags(tags_element)
            tags_element.decompose()
            return str(des_ins_element), tags
    return None
def extract_h5gameplay_url(id) -> str:
    try:
        url = H5GAMES_PLAY_URL.format(id=id)
        res = safe_request(session,url)
        if res:
            if res.status_code != 200:
                log_warn(f"⚠️ HTTP {res.status_code} at {url}")
                return None
            soup = BeautifulSoup(res.text,"html.parser")
            iframe = soup.find("iframe", {"name": "h5game-iframe"})
            if iframe and iframe.get("src"):
                return iframe["src"]
        return None
    except Exception as e:
        errors = {
            "func": "extract_h5gameplay_url",
            "url": url,
            "time": datetime.now().isoformat(),
            "msg": str(e)
        }
        log_error(f"❌ Exception in extract_h5gameplay_url: {e}")
        append_errors_md([errors])
        return None
import re
def extract_rating(soup) -> float:
    rating_element = soup.find("span",class_="rating-info")
    rating = -1.0
    if rating_element:
        classes = rating_element.get("class",[])
        rating_class = next((c for c in classes if re.match(r"r\d+", c)), None)
        if rating_class:
            rating = int(re.search(r"\d+", rating_class).group())
            rating = float(rating/10)
    return rating
def extract_h5game_detail(h5game_blog: H5GameBlog) -> H5GameDetail:
    h5game_detail = H5GameDetail()
    url = H5GAMES_BLOG_URL.format(id=h5game_blog.id)
    try:
        res = safe_request(session=session,url=url)
        if (not res) or (res.status_code != 200):
            errors = {
                "func": "extract_h5game_blog",
                "url": url,
                "status_code": res.status_code if res else None,
                "time": datetime.now().isoformat(),
                "msg": res.text[:200]
            }
            log_warn(f"⚠️ HTTP {res.status_code}: {url}")
            append_errors_md([errors])
            return None
        soup = BeautifulSoup(res.text,"html.parser")
        content,tags = extract_description_instruction(soup)
        meta = extract_meta(soup)
        gameplay_url = extract_h5gameplay_url(id=h5game_blog.id)
        rating = extract_rating(soup)
        h5game_detail.content = content
        h5game_detail.language = tags["language"]
        h5game_detail.category = tags["category"]
        h5game_detail.gender = tags["gender"]
        h5game_detail.tags = tags["tags"]
        h5game_detail.gameplay_url = gameplay_url if gameplay_url else None
        h5game_detail.rating = rating
        h5game_detail.meta = meta if meta else None
        return h5game_detail
    except Exception as e:
        errors = {
            "func": "extract_h5game_detail",
            "time": datetime.now().isoformat(),
            "url": url,
            "msg": str(e)
        }
        log_error(f"❌ Exception in extract_h5game_detail: {e}")
        append_errors_md([errors])
        return None
##*
##* H5GAME
##*
def extract_h5game(index) -> H5Game:
    url = H5GAMES__URL.format(index=index)
    h5game = H5Game()
    h5game.index = index
    try:
        res = safe_request(session=session,url=url,headers=HEADERS,cookies=COOKIES)
        soup = BeautifulSoup(res.text,"html.parser")
        meta = extract_meta(soup)
        json = res.json()
        h5game_blogs: list[H5GameBlog] = []
        blogs = json['rows']
        for blog in blogs:
            ## set H5GameBlog
            h5game_blog = H5GameBlog(thumbnail=blog["thumb"],
                                     title=blog["title"],
                                     id=blog["id"])
            ## get H5GameDetail
            h5game_detail = extract_h5game_detail(h5game_blog=h5game_blog)
            h5game_blog.h5game_detail = h5game_detail
            h5game_blogs.append(h5game_blog)
        h5game.blogs = h5game_blogs
        h5game.meta = meta if meta else None
        return h5game
    except Exception as e:
        errors = {
            "func": "extract_h5game",
            "time": datetime.now().isoformat(),
            "url": url,
            "msg": str(e)
        }
        log_error(f"❌ Exception in extract_h5game: {e}",index)
        append_errors_md(errors=[errors],page=index)
        return None

##*
##* MAIN
##*
from concurrent.futures import ThreadPoolExecutor, as_completed
def main(data_path=H5GAMES_DATA_SAVING_ABS, errors_path = H5GAMES_ERROR_SAVING_ABS):
    global page_index
    # Create folder timestamp
    news_folder = datetime.now().strftime("%Y-%m-%dT%H-%M-%S")
    crawl_path = os.path.join(data_path,news_folder)
    if not os.path.exists(data_path):
        os.makedirs(data_path)
    if not os.path.exists(errors_path):
        os.makedirs(errors_path)
    log_info("🚀 Starting multi-threaded extraction...")
    index = 1
    stop_flag = False
    while not stop_flag:
        # Define page batch range
        pages = range(index, index + MAX_PAGE_WORKERS)
        valid_count = 0  
        with ThreadPoolExecutor(max_workers=MAX_PAGE_WORKERS) as executor:
            futures = {
                executor.submit(extract_h5game, i): i for i in pages
            }
            for future in as_completed(futures):
                i = futures[future]
                try:
                    # Get extracted page result
                    data = future.result()
                    if data and getattr(data, "blogs", []):
                        # Save JSON
                        saved = save_page_to_json(data=data,filename= f"page_{i}.json",path=crawl_path)
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
            index += MAX_PAGE_WORKERS
            if valid_count == 0:
                log_info("No data can crawl !")
                stop_flag = True

    ## Merge data
    try:
        merged = merge_pages_to_json(filename="h5_games.json",folder_path=crawl_path)
        if merged:
            log_info("💾 Saved merged pages successfully!")
        else:
            errors = {"func": "merge_pages_to_json","msg": "Merge failed !"}
            append_errors_md([errors], page=page_index, path=errors_path)
    except Exception as e:
        errors = {"func": "merge_pages_to_json","msg": str(e)}
        append_errors_md([errors], page=page_index, path=errors_path)
    log_info("✅ Extraction completed.")

if __name__ == "__main__":
    main()