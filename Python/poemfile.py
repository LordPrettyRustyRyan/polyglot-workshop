st = "Twinkle Twinkle Uce"

with open("poem.txt", "w") as f:
    f.write(st)

with open("poem.txt") as f:
    content = f.read()
    print(f"The file contains '{content}'")
    if ("Twinkle" in content):
        print(f"The word 'Twinkle' is present in the file.")
    else:
        print(f"The word 'Twinkle' is not present in the file.")