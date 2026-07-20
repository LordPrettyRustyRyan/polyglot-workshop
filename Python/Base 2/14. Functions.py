# ----------------------------------------------------------- //-- DICTIONARIES --//

# --------------------------- Find Greatest of 3 Numbers
def greatest(a, b, c):
    if (a>b and a>c):
        return a
    elif (b>a and b>c):
        return b
    else:
        return c
    
a = 4
b = 6
c = 2

print(greatest(a,b,c,))


# --------------------------- Function to convert Celsius to Fahrenheit
def FtoC(f):
    cel = 5*(f-32)/9
    return cel

f = int(input("Enter Fahrenheit: "))
print(f"{f} Fahrenheit is {FtoC(f)}° Celsius.")


def CtoF(cel):
    f = 9/5 * cel+32
    return f

cel = int(input("Enter Celsius: "))
print(f"{cel}° Celsius is {CtoF(cel)} Fahrenheit.")


# --------------------------- Recursive function to calculate the sum of first n natural numbers
def sum(n):
    if (n==1):
        return 1
    return sum(n-1) + n

n = int(input("Enter a number to get sum : "))

print(f"The sum of {n} numbers is : {sum(n)}")


# --------------------------- Function to print reverse star patterns shit
def pattern(n):
    if (n==0):
        return
    print("*" * n)
    pattern(n-1)

n = int(input("Enter number: "))
pattern(n)


# --------------------------- converts inches to cms & cms to inches
def inch_to_cms(inch):
    return inch * 2.54

def cms_to_inch(cms):
    return cms * 0.393701

n = int(input("Enter value in inches: "))
cms = int(input("Enter value in cm: "))

print(f"The corresponding value in cms is {inch_to_cms(n)}")
print(f"The corresponding value in inches is {cms_to_inch(cms)}")


# --------------------------- Remove a given word from a list ad strip it at the same time.
def rem(l, word):
    n = []
    for item in l:
        if (item != word):
            n.append(item.strip(word))
            # strip() removes characters from the beginning and end - check 'anaconda'
    return n

l = ["Harry", "Rohan", "Shubham", "an", "anaconda"]
print(rem(l, "an"))


# --------------------------- Function to print Multiplication Table
n = int(input("Enter a Number for Table: "))

def table(n):
    for i in range(1,11):
        print(f"{n} x {i} = {n*i}")

table(n)