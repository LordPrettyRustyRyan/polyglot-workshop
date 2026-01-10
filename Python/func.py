# # find greatest of three numbers
# def greatest(a, b, c):
#     if (a>b and a>c):
#         return a
#     elif (b>a and b>c):
#         return b
#     else:
#         return c
    
# a = 4
# b = 6
# c = 2

# print(greatest(a,b,c,))

# # function to convert Celsius to Fahrenheit
# f = int(input("Enter Fahrenheit: "))

# def FtoC(f):
#     # cel = 5*(f-32)/9
#     print(f"{f} Fahrenheit is {5 * ((f-32)/9)}° Celsius.")

# FtoC(f)

# cel = int(input("Enter Celsius: "))

# def CtoF(cel):
#     print(f"{cel} Celsius is {9/5 * cel+32} Fahrenheit.")

# CtoF(cel)


# # recursive function to calculate the sum of first n natural numbers
# def sum(n):
#     if (n==1):
#         return 1
#     return sum(n-1) + n

# num = int(input("Enter number: "))

# print(sum(num))


# function to print first n lines
def pattern(n):
    if (n==0):
        return
    print("*" * n)
    pattern(n-1)

n = int(input("Enter number: "))
pattern(n)