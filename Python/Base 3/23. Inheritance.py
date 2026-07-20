# ------------------------------------------------------------ //-- INHERITANCE --//

class Class_1:
    def __init__(self):
        print("Constructor of Class_1")
    a = 1

class Class_1B (Class_1): # Single Inheritance : 
    a2 = 1.5

class Class_2: # Cannot inherit Class_1 here cause doing Class_1, Class_2 in Class_3
    # & Heirarchy cannot go like 3>1,2 when 2>1
    def __init__(self):
        super().__init__()
        print("Constructor of Class_2")
    b = 5

class Class_3 (Class_2, Class_1): # Multiple Inheritance : 3>1,2
    def __init__(self):
        super().__init__()
        print("Constructor of Class_3")
    b = 2
    c = 3
        
class Class_4 (Class_3): # Multi Level Inheritance : 4>3>2>1
    def __init__(cls):
        super().__init__()
        print("Constructor of Class_4")

        # Hierarchy of super() method - 
        # Class_4 runs Class_3 __init__ first
        # Class_3 runs Class_2 __init__ first
        # Class_2 runs Class_1 __init__ first
        # Comment out Class_3 super __init__ & Class_2 won't run & ultimately we won't get Class_1 either

    @classmethod # uses class attribute instead of instance
    def show(cls):
        print(f"The value of d is {cls.d}")
    d = 4

    @property
    def name (self):
        return f"{self.fname} {self.lname}"
    
    @name.setter
    def name (self, value):
        self.fname = value.split(" ")[0]
        self.lname = value.split(" ")[1]

o = Class_4()
o.d = 5 # i set an instance attribute yea, but i still want class one - so i use @classmethod
print(o.a, o.b, o.c, o.d)

o.show() # value of d running with class attribute

o.name = input("Enter the name: ")
print(f"You entered - first name : {o.fname} & last name : {o.lname}")