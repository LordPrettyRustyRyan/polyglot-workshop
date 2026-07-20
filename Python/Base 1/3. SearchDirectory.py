import os

# Mention the Directory you want to file/folder list of - Only forward slash (/) works
directory_path = '/' # This means Root drive (C)
# directory_path = 'C:/To Use/Random Stuff/Edits & Vids'

# List all files and directories in the specified path
contents = os.listdir(directory_path)

# Could just use print but it provides clustered output
print(contents)

# Print each file and directory name
for item in contents:
    print(item)