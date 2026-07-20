# ----------------------------------------------------------- //-- DICTIONARIES --//

marks = {
    "Harry" : 99,
    "imagine" : 98,
    "vivaan" : 98
}

print(marks["imagine"], type(marks))

# Some Dictionary Functions

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