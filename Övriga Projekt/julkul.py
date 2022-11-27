import random
import copy
dåligt = True
personer = ["Elsa", "William", "Oliver", "Julia", "Linda", "Ludde", "Mille", "Morris"]

test = True
while(test):
    list = []
    for i in range(8):
        temp = copy.deepcopy(personer)
        temp.remove(personer[i])
        combination = (personer[i], random.choice(temp))
        list.append(combination)

    counter = 0
    for i in list:
        for j in list:
            if(i[1] == j[1]):
                counter += 1
        
    if(counter == 8):
        test = False

    
# Kritiska är 
# Elsa till William
# William till Elsa
# Oliver till Julia
# Julia till Oliver

print(list)
