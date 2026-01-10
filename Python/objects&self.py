class Employee:
    language = "Python"
    salary = 1200000

    demo = 4 # a class attribute which i'ma overwrite

    def __init__(self, name): # Dunder method which is automatically called
        self.name = name
        print("I am creating an object")

    def getInfo(self):
        print(f"The language is {self.language}. The salary is {self.salary}.")

    def greet(self):
        # We can use any name instead of 'self', it's doesn't change anything, 
        # but it's more standard to use 'self'
        print(f"Good Morning {self.name} Uce.")

    # a function to display content without self
    @staticmethod
    def comment():
        print("it's a wonderful day.")

harry = Employee("Vivaan")
# Here i don't make an instance attribute
# i pass name as attribute to init constructor

# harry.name = "Vivaan" # This is an instance attribute
harry.language = "JavaScript" # This instance overwrites Class attribute

harry.getInfo() # This basically do this: Emplyee.getInfo(harry)

harry.greet()
harry.comment()

harry.demo = 0
print(harry.demo)
# now, this doesn't change the class attribute, it just overwrites it