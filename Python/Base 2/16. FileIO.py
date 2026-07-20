# ------------------------------------------------------------- //-- FILE I/O --//

# --------------------------- Create a file and Write something in it
st = "Hello There"

f = open("File_1.txt", "w")
f.write(st)
f.close()


# --------------------------- Append Something in the file you Created
st = "\nThis is a quote of Obi-wan Kenobi"

f = open("File_1.txt", "a")
f.write(st)
f.close()


# --------------------------- Read the content of the file
f = open ("File_1.txt") # reading mode by Deafult - no need to mention "r"

line = f.read()
print(f"{line}\n")
f.close()


# --------------------------- 'with' statement
with open("File_1.txt") as f:
    print(f"{f.read()}\n")

# You dont have to explicitly close the file when using 'with' statement


# --------------------------- Using multiple reading methods
with open("File_2.txt") as f:
    print(f"{f.readlines()}\n") # This gives a list of all lines in the file
    f.seek(0)
    print(f"{f.read()}\n")
    f.seek(0)
    print(f.readline(), end="")
    print(f.readline(), end="")
    print(f.readline(), end="")
    print(f"{f.readline()}\n")
    # But isn't using readlines a drag - let's put it in a loop


# --------------------------- readline with Loop
with open("File_2.txt") as f:

    line = f.readline() # reads first line - example 'yo'

    while (line != ""): # yo != "" - loop runs
        print(line, end="")

        line = f.readline() # move to next line to continue loop
        # otherwise you be stuck running first line over & over again
        