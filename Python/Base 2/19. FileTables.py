# Write a program to generate multiplication tables from 2 to 20
# Write it into the different files.

def Tables(n):
    table = ""
    for i in range (1, 11):
        table += f"{n} x {i} = {n*i}\n"
    
    with open(f"tables/Table_{n}.txt", "w") as f:
        f.write(table)

# This one does the 2 to 20 Tables thing
for i in range (2, 21):
    Tables(i)

#  This one just if you want table of ANY number (as a file too)
n = int(input(f"Enter the Table you want: "))
Tables(n)

with open (f"tables/Table_{n}.txt") as f:
    print(f.read())