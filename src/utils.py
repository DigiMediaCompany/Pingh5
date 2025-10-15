##*
##* LOGGING
##*
import logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] [%(threadName)s] %(message)s",
    datefmt="%H:%M:%S"
)
def log_info(msg, page=None):
    prefix = f"[Page {page}] " if page is not None else ""
    logging.info(prefix + msg)

def log_warn(msg, page=None):
    prefix = f"[Page {page}] " if page is not None else ""
    logging.warning(prefix + msg)

def log_error(msg, page=None):
    prefix = f"[Page {page}] " if page is not None else ""
    logging.error(prefix + msg)


