# Books Web Scraper
A Python tool that grabs **book titles, prices, and ratings** from the multi-page [Books to Scrape](http://books.toscrape.com/) website.
Save all that info straight into a **CSV** – no manual copying needed.
Perfect for data nerds or quick web scraping practice.

<table>
  <tr>
    <td style="border:1px solid #30363d; border-radius:6px; padding:6px;">
      <img width="1047" height="524" alt="Scrapper in CLI" src="https://github.com/user-attachments/assets/3a1f4405-d3db-4f89-8bc9-8daa3fec154f" />
    </td>
    <td style="border:1px solid #30363d; border-radius:6px; padding:6px;">
      <img width="1148" height="574" alt="Scrapper CSV file" src="https://github.com/user-attachments/assets/e1fc83ee-0240-4027-bec3-aa1804687bdb" />
    </td>
  </tr>
</table>

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
