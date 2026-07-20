import requests
from bs4 import BeautifulSoup
import csv

books = []

rating_map = {
    "One": "1/5",
    "Two": "2/5",
    "Three": "3/5",
    "Four": "4/5",
    "Five": "5/5"
}

for page in range (1, 4): # First 3 Pages
    if page == 1:
        URL = "http://books.toscrape.com/"
    else:
        URL = f"http://books.toscrape.com/catalogue/page-{page}.html"

    response = requests.get(URL)
    soup = BeautifulSoup(response.text, "html.parser")

    book_cards = soup.find_all("article", class_="product_pod")

    for book in book_cards:
        title = book.h3.a["title"]
        price = book.find("p", class_="price_color").text

        rating_class = book.find("p", class_="star-rating")["class"]

        rating_word = rating_class[1]
        rating = rating_map.get(rating_word, "N/A")

        books.append({
        "Title": title,
        "Price": price,
        "Rating": rating
        })

for abook in books:
    print("-" * 40)
    for key, value in abook.items():
        print(f"{key} : {value}")
    print("-" * 40)

print("Total books scraped:", len(books))

def save_to_csv(books, filename="books.csv"):
    with open(filename, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)

        # Header row
        writer.writerow(["Title", "Price", "Rating"])

        # Data rows
        for book in books:
            writer.writerow([
                book["Title"],
                book["Price"],
                book["Rating"]
            ])

save_to_csv(books)
print("CSV file saved successfully!")