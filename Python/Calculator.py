class Calculator:
    def __init__(self, n):
        self.n = n
    
    def square (self):
        print(f"The Square of {self.n} is {self.n*self.n}")
    
    def cube (self):
        print(f"The Cube of {self.n} is {self.n*self.n*self.n}")
    
    def SqRoot (self):
        print(f"The Square root of {self.n} is {self.n**1/2}")

num = int(input("Enter your Number:"))

a = Calculator(num)

a.square()
a.cube()
a.SqRoot()