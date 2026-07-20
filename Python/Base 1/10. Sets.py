# -------------------------------------------------------------- //-- SETS --//

d = {} # empty dictionary
s = set() # empty set

s = {24,55,11,53.55, "BOOGIE"}

s.add("WOOGIE")
print(s, type(s))

print(len(s))
s.remove(53.55)

ss = {44,11,52,"BRAVO", 55}
print(s, type(s))

print(s.union(ss))
print(s.intersection(ss))

print(s.intersection_update(ss)) # this update first set accordingly to intersection
print(s, type(s))