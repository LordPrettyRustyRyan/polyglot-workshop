# //-- DICTIONARIES --//

marks = {
    "Harry" : 99,
    "imagine" : 98,
    "vivaan" : 98
}

print(marks["imagine"], type(marks))

print(marks.items())
print(marks.keys())
print(marks.values())

marks.update({
    "Hermione" : 100,
    "Ron" : 40
})
print(marks)

print(len(marks))

print(marks.get("vivaan"))

print(marks.get("Voldemort")) # Prints 'None'
# print(marks["Voldemort"]) # Returns an error

marks.pop("Ron")
# marks.popitem()
# marks.popitem()
# marks.popitem()
print(marks)

# //-- SETS --//
d = {} # empty dictionary
s = set() # empty set

s = {24,55,11,53.55, "BOOGIE"}

s.add("WOOGIE")
print(s, type(s))

print(len(s))
s.remove(53.55)

ss = {44,11,52,"BRAVO", 55}
print(s, type(s))

print(s.union(ss))
print(s.intersection(ss))

print(s.intersection_update(ss)) # this update first set accordingly to intersection
print(s, type(s))