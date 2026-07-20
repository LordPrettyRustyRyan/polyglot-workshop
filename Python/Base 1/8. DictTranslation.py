# Write a program to create a dictionary of Hindi words with values as their English translation.
# Provide user with an option to look it up! 

meaning = {
    "Newspaper" : "Akhbaar",
    "Bed" : "Manja",
    "Bedding" : "Bistre",
    "Star" : "Taare"
}

word = input("Which word you wanna know the meaning of: ")

print(meaning[word])