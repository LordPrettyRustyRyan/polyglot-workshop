import hashlib

text = "One Direction"
hash_object = hashlib.sha256(text.encode())
hash_value = hash_object.hexdigest()

print(f"this is the hash value of text: {hash_value}")

nums = [1, 2, 3, 6]
squares = [n for n in nums]
print(squares)