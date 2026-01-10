import os

# only forward slash works
directory_path = 'C:/To Use/Random Stuff/Edits & Vids'

contents = os.listdir(directory_path)

# could just use print but it provides clustered output
# print(contents)

for item in contents:
    print(item)