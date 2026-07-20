# --------------------------------------------------------------- //-- TUPLES --//

a = (42,56,52,57,88,56)
print(type(a))

print(a.count(56))

tuple1 = ("at", 19)
tuple2 = ("A", "R", "N")
join = tuple1 + tuple2
print(join)

tuple3 = (1, 8)
a, b = tuple3
print (f"First element of tuple unpacked {a} \nSecond element of tuple unpacked {b}") #Output: 1, 8

tuple4 = (1, 8, 7, 2, 21, 15)
sliced_tuple = tuple4[1:5]
print(sliced_tuple) #Output: (8, 7, 2, 21)