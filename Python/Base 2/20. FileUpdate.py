# A file contains a word “Donkey” multiple times.
# You need to write a program which replace the word with ####.

import re

st = "Donkey Kong, Baby, Donkey Kong\nBest friend of my Life, My Sweet donkey Kong"
words = ['Donkey', 'Kong', 'friend']

with open("File_5.txt", "w+") as f:
    f.write(st)
    f.seek(0)
    content = f.read()
    print(f"Old Content is :\n'{content}'\n")
    newContent = content

    for word in words:
        # newContent = re.sub(word, "#" * len(word), newContent, flags=re.IGNORECASE) # Best Way
        newContent = newContent.replace(word, "#" * len(word)) # Redacts the List
    newContent = newContent.replace("donkey", "#" * len("donkey")) # Redacts a single word

    f.seek(0)
    f.write(newContent)
    print(f"New Content is :\n'{newContent}'")