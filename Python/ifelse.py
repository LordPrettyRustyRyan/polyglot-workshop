# Age verfication program
# ---------------------------
age = int(input("Enter your Age : "))

if (age%2 == 0):
    print("Number is even")

if (age >= 18):
    print("Whatever")

elif (age <= 0):
    print("Uce, what? how?")

else:
    print("Yea Whatever, don't care")


#Check for total percentage
# ---------------------------
marks1= int(input("Enter Marks 1: "))
marks2 = int(input("Enter Marks 2: "))
marks3 = int(input("Enter Marks 3: "))

total_percentage = (100*(marks1 + marks2 + marks3))/300

if (total_percentage>=40 and marks1>=33 and marks2>=33 and marks3>=33):
    print("You are passed:", total_percentage)

else:
    print("You failed, your percentage:", total_percentage)


# whether a given username contains less than 10 characters or not
# ---------------------------
username = input("Enter Username: ")

if (len(username)>10):
    print("yes")

else:
    print("nope")


# whether a given name is present in a list or not
# ---------------------------
l = ["Harry", "Shubh", "Vivaan"]

name = input("Enter you name to check: ")

if (name in l):
    print("yes")
    
else:
    print("nope")


# calculate the grade of a student from his marks
# ---------------------------
marks = int(input("Enter your Marks: "))

if (marks<=100 and marks>90):
    print("You got Ex Grade")

elif (marks<=90 and marks>80):
    print("You got A Grade")

elif (marks<=80 and marks>70):
    print("You got B Grade")

elif (marks<=70 and marks>60):
    print("You got C Grade")

elif (marks<=60 and marks>50):
    print("You got D Grade")

else:
    print("You Failed")