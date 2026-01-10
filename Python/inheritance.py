class Employee:
    def __init__(self):
        print("Constructor of Employee")
    a = 1

class Programmer (Employee):
    def __init__(self):
        super().__init__()
        print("Constructor of Programmer")
    b = 2
        
class Manager (Programmer):
    def __init__(cls):
        super().__init__()
        print("Constructor of Manager")

    @classmethod # uses class attribute instead of instance
    def show(cls):
        print(f"The value of c is {cls.c}")
    c = 3

    @property
    def name (self):
        return f"{self.fname} {self.lname}"
    
    @name.setter
    def name (self, value):
        self.fname = value.split(" ")[0]
        self.lname = value.split(" ")[1]

o = Manager()
o.c = 4
print(o.a, o.b, o.c)

o.show()

o.name = input("Enter the name: ")
print(f"You entered - first name : {o.fname} & last name : {o.lname}")