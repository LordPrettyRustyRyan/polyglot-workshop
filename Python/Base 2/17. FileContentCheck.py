# Read the text from a ‘File_3.txt’ and find out whether it contains the word ‘twinkle’

st = "Twinkle Twinkle Uce\nDinkle Dinkle Uce\nJiggle Jiggle Uce\nZiggle Ziggle Uce"

with open("File_3.txt", "w") as f:
    f.write(st)

with open("File_3.txt") as f:
    content = f.read()

    print(f"The file contains \n'{content}'\n")
    if ("Twinkle" in content):
        print(f"The word 'Twinkle' is present in the file.")
    else:
        print(f"The word 'Twinkle' is not present in the file.")

    # find out the line number where Jiggle is present
    f.seek(0)
    lines = f.readlines()

    lineno = 1
    for line in lines:
        if ("Jiggle" in line):
            print(f"the word 'Jiggle' appears at line no {lineno}")
            break
        lineno += 1
    else:
        print(f"the word 'Jiggle' does not appears")
