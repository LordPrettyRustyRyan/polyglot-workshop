# Books Web Scraper
A Python tool that grabs **book titles, prices, and ratings** from the multi-page [Books to Scrape](http://books.toscrape.com/) website.
Save all that info straight into a **CSV** – no manual copying needed.
Perfect for data nerds or quick web scraping practice.

<img width="1047" height="623" alt="image" src="https://github.com/user-attachments/assets/1eccb083-02d8-4058-9e25-3cc5b3901c11" />
<img width="1148" height="592" alt="image" src="https://github.com/user-attachments/assets/d6a8b500-666f-445a-8340-4cf3d779119f" />

---

## Features:
- Scrapes **all books** from the website, including pagination.
- Captures title, price, and rating (converted to 1–5 scale).
- Exports data to CSV automatically.
- Lightweight, fast, and pure Python.

---

## Libraries Used
- `requests` – HTTP requests
- `BeautifulSoup` – parsing HTML
- `csv` – saving scraped data
- `os` – for file handling

## How To Run
    ```
    git clone https://github.com/Sidharath/Books-Web-Scraper.git
    cd Books-Web-Scraper
    pip install -r requirements.txt
    python books_scraper.py
