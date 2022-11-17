A=[]
B=[]
C=[]
A_star = []
B_star = []
C_star = []

for i in range(100):
    if((i+1) % 3 == 0):
        A.append(i+1)
    else: A_star.append(i+1)

    if((i+1) % 5 == 0):
        B.append(i+1)
    else: B_star.append(i+1)

    if((i+1) % 7 == 0):
        C.append(i+1)
    else: C_star.append(i+1)

result = []
for i in A:
    if i in B and i in C_star:
        result.append(i)

print(result)
print("Kardinalitet av mängden: ", len(result))