# i = 0
# l = ["Harry", "Shubh", "Vivaan", "Harry", "Shubh", "Vivaan"]

# # while (i<11):
# #     print(i, "Imagine")
# #     i+=1

# # while (i<len((l))):
# #     print(l[i])
# #     i += 1

# for a in range(1, 11):
#     print(a)

# for b in l:
#     print(b)

# else:
#     print("done") # not used practically

# # Break and Continue and Pass
# for i in range(41):
#     if (i == 30):
#         break # Exits the loop
#     if (i == 19):
#         continue # Skip the Iteration
#     print(i)

# for n in range(0):
#     pass # it skips the loop, you can define the argument here later


# # multiplication table of a given number using for loop
# n = int(input("Enter a Number: "))

# for i in range(1,11):
#     print(f"{n} x {i} = {n*i}")

# d = 1
# while(d<11):
#     print(f"{n} x {d} = {n*d}")
#     d+=1


# # greet all the person names stored in a list ‘l’ and which starts with S
# for name in l:
#     if (name.startswith("S")):
#         print(f"Hello {name}")


# # find whether a given number is prime or not
# num = int(input("Enter your number: "))

# for z in range (2,num):
#     if (num%z) == 0:
#         print("Number is not Prime")
#         break
# else:
#     print("Number is Prime")


# # find the sum of first n natural numbers using while loop
# j = int(input("Enter your Number: "))
# sum = 0
# m = 0

# while (m<=j):
#     sum += m
#     m += 1

# print(sum)


# # calculate the factorial of a given number using for loop
# fac = int(input("Enter the Number: "))
# product = 1

# for x in range (1, fac+1):
#     product = product * x

# print(f"The factorial of {fac} is {product}")


# # print the star pattern
# star = int(input("Enter number of stars you want: "))

# # with spacing
# # for s in range (1,star+1):
# #     print (" " * (star-s), end="")
# #     print ("*" * (2*s-1), end="")
# #     print("")

# # without spacing
# for baka in range (1, star+1):
#     print ("*" * baka, end="")
#     # print ("*" * (2*baka-1), end="")
#     print("")


# # weird shit
# smth = int(input("Enter number of smths you want: "))

# for k in range (1, smth+1):
#     if (k==1 or k==smth):
#         print("*" * smth, end="")
#     else:
#         print("*", end="")
#         print(" " * (smth-2), end="")
#         print("*", end="")
#     print("")


# print multiplication table of n using for loops in reversed order
rev = int(input("Enter a Number: "))

for g in range(1,11):
    print(f"{rev} x {11-g} = {rev*(11-g)}")