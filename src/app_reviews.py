from utils import log_error,log_info,log_warn
##*
##* CONFIG
##*

# GLOBAL VAR
page_index = 0
# APPREVIEWS URL
BASE_URL = "https://pingh5.com/"
APPREVIEWS_URL = "https://pingh5.com/appreviews?page={index}"
GAMES_URL = "https://pingh5.com/blog/games/{slug}"
GAMES_DETAIL_URL = "https://pingh5.com/game-detail/{slug}"

# SAVE
GAMES_DATA_SAVING = "../data/games"
GAMES_ERROR_SAVING = "../errors/games"

# DEFINE WORKERS
MAX_PAGE_WORKERS = 3

import os
GAMES_DATA_SAVING_ABS = os.path.abspath(GAMES_DATA_SAVING)
GAMES_ERROR_SAVING_ABS = os.path.abspath(GAMES_ERROR_SAVING)

##*
##* DATACLASS
##*
from dataclasses import dataclass, field
from typing import List, Dict, Any
@dataclass
class Rating:
    graphic_and_sound: int = 0
    controls: int = 0
    gameplay: int = 0
    lasting_appeal: int = 0
@dataclass
class AppReviewsDetail: ## https://pingh5.com/game-detail/super-bear-adventure
    screenshots: List[str] = field(default_factory=list)   #? array -> json
    summary: str = "" #? element
    pros: List[str] = field(default_factory=list) #? array -> json
    cons: List[str] = field(default_factory=list) #? array -> json
    circle_progress: int = 0 ## value/50
    game_link: str = ""
    rating: Rating = field(default_factory=Rating)
    meta: Dict[str, Any] = field(default_factory=dict)
@dataclass
class AppReviewsIntroduction: ## https://pingh5.com/blog/games/super-bear-adventure
    slug: str = ""
    content: str = "" #? element
    detail: AppReviewsDetail = field(default_factory=AppReviewsDetail)
    meta: Dict[str, Any] = field(default_factory=dict)
@dataclass
class AppReviewsBlog: 
    title: str = ""
    thumbnail: str = ""
    description: str = "" #? element
    score: int = -1 ## 40/50
    game: AppReviewsIntroduction = field(default_factory=AppReviewsIntroduction)
@dataclass
class AppReviews: ## https://pingh5.com/appreviews?page=2
    index: int = -1
    blogs: List[AppReviewsBlog] = field(default_factory=list)
    meta: Dict[str, Any] = field(default_factory=dict)

##*
##* SAVING
##*
from dataclasses import asdict
from datetime import datetime
import os
import json
# save page to json
def save_page_to_json(data, filename, path=GAMES_DATA_SAVING_ABS):
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
def merge_pages_to_json(filename,folder_path=GAMES_DATA_SAVING_ABS):
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
def append_errors_md(errors, path=GAMES_ERROR_SAVING_ABS, page=-1, filename="errors.md"):
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
import requests
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
        append_errors_md([errors],path=GAMES_ERROR_SAVING_ABS, page = page_index)
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

## ----------------- EXTRACT --------------------
from urllib.parse import urlparse
from bs4 import BeautifulSoup
import json

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
## *
## * GAME DETAILS
## *
def extract_summary_and_circle_progress(soup):
    progress_div = soup.select_one("div.progress")
    if not progress_div:
        return None, None
    progress_value = int(progress_div.get("aria-valuenow", -1))
    description_div = progress_div.find_next_sibling("div")
    content_div = description_div.find("div", class_="mt-4") if description_div else None
    summary = str(content_div) if content_div else None
    return summary, progress_value

def extract_screenshots(soup) -> str:
    screenshots = []
    # Find the swiper-wrapper div
    wrapper = soup.find("div", class_="swiper-wrapper")
    if not wrapper:
        return None
    # Find all img tags inside swiper-slide
    for img in wrapper.find_all("img"):
        src = img.get("src")
        if src:
            screenshots.append(src)
    return screenshots

def extract_pros_cons(soup):
    pros, cons = [], []
    # Find the wrapper div
    wrapper = soup.select_one("div.flex.gap-12.mt-8.flex-col.md\\:flex-row")
    if not wrapper:
        return None, None

    # Find all inner "w-full" divs (first = pros, second = cons)
    sections = wrapper.find_all("div", class_="w-full")
    for section in sections:
        title = section.find("p", class_="font-semibold")
        items = section.select("div.game-detail-pros li")
        texts = [li.decode_contents() for li in items]

        if title and "PROS" in title.get_text().upper():
            pros.extend(texts)
        elif title and "CONS" in title.get_text().upper():
            cons.extend(texts)
    return pros, cons

def extract_rating(soup) -> Rating:
    rating = Rating()
    rows = soup.select("div.flex.gap-4.flex-col > div.flex.items-center")
    if not rows:
        return None
    for row in rows:
        # Get category name
        category_tag = row.find("div", class_="w-48")
        category = category_tag.get_text(strip=True) if category_tag else None

        # Get value
        value_tag = row.find("p", class_="w-10")
        value = float(value_tag.get_text(strip=True)) if value_tag else 0

        # Map to dataclass
        if category == "Graphics and Sound":
            rating.graphic_and_sound = value
        elif category == "Controls":
            rating.controls = value
        elif category == "Gameplay":
            rating.gameplay = value
        elif category == "Lasting Appeal":
            rating.lasting_appeal = value

    return rating

def extract_game_link(soup) -> str:
    element = soup.find("div",class_="bg-(--color_theme)/10 p-4 rounded-xl w-full mt-4")
    if not element:
        return None
    link_element = element.find("a")
    link = link_element.get("href") if link_element else None
    return link

def extract_game_detail(url) -> AppReviewsDetail:
    detail = AppReviewsDetail()
    global page_index
    try:
        res = fetch_page(url)
        soup = BeautifulSoup(res,"html.parser")
        summary, circle_progress = extract_summary_and_circle_progress(soup)
        screenshots = extract_screenshots(soup)
        meta = extract_meta(soup)
        pros, cons = extract_pros_cons(soup)
        rating = extract_rating(soup)
        game_link = extract_game_link(soup)
        detail.circle_progress = circle_progress
        detail.summary = summary
        detail.pros = pros
        detail.cons = cons
        detail.meta = meta
        detail.screenshots = screenshots
        detail.rating = rating
        detail.game_link = game_link
    except Exception as e:
        log_error(f"Unexpected error in extract_detail: {e}")
        errors = {"func": "extract_game_detail", "url": url, "msg": str(e)}
        append_errors_md([errors], path=GAMES_ERROR_SAVING_ABS,page=page_index)
    return detail

##*
##* GAMES
##*
def extract_game(url,slug) -> AppReviewsIntroduction:
    global page_index
    game = AppReviewsIntroduction()
    session = requests.Session()
    try:
        res = safe_request(session,url)
        soup = BeautifulSoup(res.text,"html.parser")
        content = soup.select_one("div.post-content")
        slug = slug
        meta = extract_meta(soup)

        game.content = str(content)
        game.slug = slug
        game.meta = meta
        game.detail = extract_game_detail(GAMES_DETAIL_URL.format(slug=slug))
    except Exception as e:
        log_error(f"Unexpected error in extract_introduction: {e}")
        errors = {"func": "extract_game", "url": url, "msg": str(e)}
        append_errors_md([errors],path=GAMES_ERROR_SAVING_ABS,page=page_index)
    return game

##*
##* BLOGS
##*
import re
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
def extract_blog(element) -> AppReviewsBlog:
    global page_index
    blog = AppReviewsBlog()
    try:
        # soup = BeautifulSoup(element,"html.parser")
        if element:
            title = element.find("p", class_="font-semibold").get_text(strip=True)
            description = element.find("p", class_="mt-2 line-clamp-3 text-justify").get_text(strip=True)
            thumbnail = element.find("img")["src"]
            url = element.find("a")["href"]
            slug = extract_slug(url)
            game = extract_game(url=GAMES_URL.format(slug=slug),slug=slug)
            blog.title = title if title else None
            blog.description = description if description else None
            blog.thumbnail = thumbnail if thumbnail else None
            blog.game = game if game else None
            blog.score = extract_score(element)
    except Exception as e:
        log_error(f"Unexpected error in extract_thumbnail: {e}")
        errors = {"func": "extract_blog", "msg": str(e)}
        append_errors_md([errors],path=GAMES_ERROR_SAVING_ABS,page=page_index)
    return blog
##*
##* PAGE
##*
def extract_appreviews(index: int) -> AppReviews:
    global page_index
    page_index = index
    url = APPREVIEWS_URL.format(index = index)
    appreviews = AppReviews()
    session = requests.Session()
    try:
        res = safe_request(session,url)
        if res.status_code != 200:
            log_error(f"Request returned status_code {res.status_code} for {url}")
        soup = BeautifulSoup(res.text, "html.parser")
        container = soup.find("div", class_="flex flex-wrap mt-16")
        blog_elements = container.find_all("div", class_="w-full md:w-1/2 px-2 py-6") if container else []
        blogs = []
        if not blog_elements:
            log_warn(f"No game divs found on page {index}", page=index)
            return None
        for element in blog_elements:
            blog = extract_blog(element)
            blogs.append(blog)
        meta = extract_meta(soup)
        appreviews.index = index
        appreviews.meta = meta if meta else None
        appreviews.blogs = blogs
    except Exception as e:
        log_error(f"Failed to extract page {index}: {e}", page=index)
        errors = {"func": "extract_appreviews", "url": url, "msg": str(e)}
        append_errors_md([errors], path=GAMES_ERROR_SAVING_ABS, page=index)
    return appreviews 


##*
##* MAIN 
##*
from concurrent.futures import ThreadPoolExecutor, as_completed
def main():
    global page_index
    # Create folder timestamp
    news_folder = datetime.now().strftime("%Y-%m-%dT%H-%M-%S")
    crawl_path = os.path.join(GAMES_DATA_SAVING_ABS,news_folder)
    if not os.path.exists(GAMES_ERROR_SAVING_ABS):
        os.makedirs(GAMES_ERROR_SAVING_ABS)
    if not os.path.exists(GAMES_DATA_SAVING_ABS):
        os.makedirs(GAMES_DATA_SAVING_ABS)
    log_info("🚀 Starting multi-threaded extraction...")

        
    index = 1
    stop_flag = False
    while not stop_flag:
        # Define page batch range
        pages = range(index, index + MAX_PAGE_WORKERS)
        valid_count = 0  
        with ThreadPoolExecutor(max_workers=MAX_PAGE_WORKERS) as executor:
            futures = {
                executor.submit(extract_appreviews, i): i for i in pages
            }
            for future in as_completed(futures):
                i = futures[future]
                try:
                    # Get extracted page result
                    appreviews = future.result()
                    if appreviews and getattr(appreviews, "blogs", []):
                        # Save JSON
                        saved = save_page_to_json(data=appreviews,filename= f"page_{i}.json",path=crawl_path)
                        if saved:
                            log_info(f"💾 Saved page {i}")
                            valid_count += 1
                        else:
                            errors={"func": "save_page_to_json","page": i,"msg": f"Failed to save page {i}"}
                            append_errors_md([errors], page=i, path=GAMES_ERROR_SAVING_ABS)
                except Exception as e:
                    # Log any extraction errors
                    log_error(f"❌ Error extracting page {i}: {e}")
                    errors={"func": "extract_page","page": i,"msg": str(e)}
                    append_errors_md([errors], page=i, path=GAMES_ERROR_SAVING_ABS)
            index += MAX_PAGE_WORKERS
            if valid_count == 0:
                log_info("No data can crawl !")
                stop_flag = True

    ## Merge data
    try:
        merged = merge_pages_to_json(filename="appreviews.json",folder_path=crawl_path)
        if merged:
            log_info("💾 Saved merged pages successfully!")
        else:
            errors = {"func": "merge_pages_to_json","msg": "Merge failed !"}
            append_errors_md([errors], page=page_index, path=GAMES_ERROR_SAVING_ABS)
    except Exception as e:
        errors = {"func": "merge_pages_to_json","msg": str(e)}
        append_errors_md([errors], page=page_index, path=GAMES_ERROR_SAVING_ABS)
    log_info("✅ Extraction completed.")

if __name__ == "__main__":
    main()