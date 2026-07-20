# ---------------------------------------------------------------- //-- IF ELSE --//

# --------------------------- Class, Attributes, & Methods
class Employee:
    language = "eminem"
    salary = 12000000

    def __init__(self, name, color): # __init__ : Dunder method which is automatically called
        self.name = name
        self.color = color
        print("I am creating an object")

    def getInfo(self):
        # We can use any name instead of 'self', it's doesn't change anything, 
        # but it's more standard to use 'self'
        print(f"My name is {self.name}, and i am {self.color}, and i speak {self.language}, and i earn {self.salary}.")

    # a function to display content without self
    @staticmethod
    def comment():
        print("it's a wonderful day.\n")

harry = Employee("Slim Shady", "white") # Here i don't make an instance attribute
# i pass name as attribute to init constructor

harry.getInfo() # Equivalent to writing: Emplyee.getInfo(harry)

harry.comment()


# --------------------------- Write a class “Calculator” for finding square, cube and square root of a number. 
class Calculator:
    def __init__(self, n):
        self.n = n

    def sqaure(self):
        print(f"Sqaure of {self.n} is : {self.n**2}")

    def cube(self):
        print(f"Cube of {self.n} is : {self.n**3}")
    
    def squareRoot(self):
        print(f"Sqaure Root of {self.n} is : {self.n**1/2}")

a = int(input("Enter a number for Square, Cube, & Square Root : "))

sum = Calculator(a)
sum.sqaure()
sum.cube()
sum.squareRoot()