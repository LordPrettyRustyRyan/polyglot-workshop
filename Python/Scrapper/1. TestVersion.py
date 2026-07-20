import requests
from bs4 import BeautifulSoup
import csv

# URL = "http://books.toscrape.com/"

# response = requests.get(URL)
# soup = BeautifulSoup(response.text, "html.parser")

# book_cards = soup.find_all("article", class_="product_pod")

books = []

rating_map = {
    "One": "1/5",
    "Two": "2/5",
    "Three": "3/5",
    "Four": "4/5",
    "Five": "5/5"
    }

for page in range(1, 6):
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
        # rating = rating_class[1]  # One, Two, Three...
        
        # ------- Creating a Rating Map
        rating_word = rating_class[1]
        rating = rating_map.get(rating_word, "N/A")

        # print(type(rating_class))
        # print(rating_class)

        # print("Title:", title)
        # print("Price:", price)
        # print("Rating:", rating)
        # print("-" * 40)

        book_data = {
        "Title": title,
        "Price": price,
        "Rating": rating
        }

        books.append(book_data)

        # print(f"{books[:3]}\n")
        # print("-" * 40)

# for abook in books:
#     print("-" * 40)
#     print(f"Title  : {abook['title']}")
#     print(f"Price  : {abook['price']}")
#     print(f"Rating : {abook['rating']}")
#     print("-" * 40)

for abook in books:
    print("-" * 40)
    for key, value in abook.items():
        print(f"{key} : {value}")
    print("-" * 40)

print("Total books scraped:", len(books))

# ------- saving data to csv file
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