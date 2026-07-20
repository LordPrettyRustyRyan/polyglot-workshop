# ----------------------------------------------------------------- //-- LIST --//

list1 = ["uce", 32, 464.75, True, "waddup"]

print(list1[0:5])
print(type(list1))

# Some List Functions
list2 = [31,44,24,22,42,67,46]
print(list2)

list2.append(89)
print(list2)

list2.sort()
print(list2)

list2.reverse()
print(list2)

list2.insert(2,88)
print(list2)

list2.pop(2)
print(list2)

list2.remove(67)
print(list2)

# Ways To Add 4 Elements in a List
list3 = []

# Basic Way to add elements
l1 = int(input("Enter: "))
list3.append(l1)
l2 = int(input("Enter: "))
list3.append(l2)
l3 = int(input("Enter: "))
list3.append(l3)
l4 = int(input("Enter: "))
list3.append(l4)

# Better Way
list3.append(int(input("Enter: ")))
list3.append(int(input("Enter: ")))
list3.append(int(input("Enter: ")))
list3.append(int(input("Enter: ")))

# with Loop
i = 1
for i in range (1, 5):
    list3.append(int(input("Enter: ")))

print(list3, type(list3))

list3.sort()
print(list3)

print(sum(list3)) # Sums the elements of list3