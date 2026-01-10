# Create a file and write something in it

st = "Hello There"

f = open("myfile.txt", "w")
f.write(st)
f.close()


# Append Something in the file you you created

st = "\nThis is a quote of Obi-wan Kenobi"

f = open("myfile.txt", "a")
f.write(st)
f.close()


# reading the content of the file in the terminal with program

f = open ("myfile.txt")

line = f.readlines()

print(line)

# while (line != ""):
#     print(line)
#     line = f.readline()

f.close()


# with statement
with open("file.txt") as f:
    print(f.read())

# You dont have to explicitly close the file