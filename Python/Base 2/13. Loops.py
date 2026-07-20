# ---------------------------------------------------------------- //-- LOOPS --//

# --------------------------- Common
x = 0
y = 0
l = ["Harry", "Shubh", "Vivaan", "Harry"]


# --------------------------- WHILE LOOP
while (x<5):
    print(x, "Imagine")
    x+=1

while (y<len((l))):
    print(l[y])
    y += 1


# --------------------------- FOR LOOP
for a in range(1, 11):
    print(a)

for b in l:
    print(b)
else:
    print("done") # not used practically


# ---------------------------Break and Continue and Pass
for i in range(41):
    if (i == 30):
        break # Exits the loop
    if (i == 19):
        continue # Skip the Iteration
    print(i)

for n in range(0):
    pass # it skips the loop, you can define the argument here later


# --------------------------- Multiplication table of a given number using both Loops
n = int(input("Enter a Number for Table: "))

print(f"Table of {n} using For Loop: ")
for i in range(1,11):
    print(f"{n} x {i} = {n*i}")

print(f"Table of {n} using While Loop: ")
d = 1
while(d<11):
    print(f"{n} x {d} = {n*d}")
    d+=1


# --------------------------- Greet all the person names stored in a list ‘l’ and which starts with S
for name in l:
    if (name.startswith("S")):
        print(f"Hello {name}")


# --------------------------- Find whether a given number is prime or not
num = int(input("Enter your number to check if its Prime: "))

for z in range (2,num):
    if (num%z) == 0:
        print("Number is not Prime")
        break
else:
    print("Number is Prime")


# --------------------------- Find the sum of first n natural numbers using while loop
new = int(input("Enter your Number for Sum: "))
sum = 0
m = 0

while (m<=new):
    sum += m
    m += 1
print(sum)


# --------------------------- Calculate the factorial of a given number using For loop
fac = int(input("Enter the Number for Factorial: "))
product = 1

for x in range (1, fac+1):
    product = product * x

print(f"The factorial of {fac} is {product}")


# --------------------------- Print the Star Pattern
star = int(input("Enter number of stars you want: "))

# with spacing
for s in range (1, star+1):
    print (" " * (star-s), end="")
    print ("*" * (2*s-1), end="")
    print("")

print("")
# without spacing
for baka in range (1, star+1):
    print ("*" * baka, end="")
    print("")

print("")
# weird shit
for k in range (1, star+1):
    if (k==1 or k==star):
        print("*" * star, end="")
    else:
        print("*", end="")
        print(" " * (star-2), end="")
        print("*", end="")
    print("")


# --------------------------- Print multiplication table of n using for loops in reversed order
rev = int(input("Enter a Number for Reverse Table: "))

for table in range(1,11):
    print(f"{rev} x {11-table} = {rev*(11-table)}")