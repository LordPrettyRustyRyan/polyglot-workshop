# //-- LIST --//

list1 = ["uce", 32, 464.75, True, "waddup"]

print(list1[0:5])
print(type(list1))

list1.append("bruv")
print(list1)

list2 = [31,44,24,22,42,67,46]
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

list3 = []

# print(list(input("Enter: ")))
l1 = int(input("Enter: "))
list3.append(l1)
l2 = int(input("Enter: "))
list3.append(l2)
l3 = int(input("Enter: "))
list3.append(l3)
l4 = int(input("Enter: "))
list3.append(l4)

list3.sort()
print(list3)

print(sum(list3))

# //-- TUPLES --//

a = (42,56,52,57,88,56)
print(type(a))

print(a.count(56))