from tabulate import tabulate
import random
import math
#importerar bibloteket tabulate för att formatera utskriften. 
#förutsätter att tabulate är installerat på datorn (i kommandotolken, skriv: pip install tabulate)

def välkomsttext():

    print("Hej och välkommen till energisimulatorn. Ditt verktyg för att uppskatta solenergi och vindkraft")
    #introduktion
       
def valet():
        
    print("Vad vill du göra?")
    val = int(input("1. Simulera Solkraft \n2. Simulera Vindkraft \n3. Avsluta \n"))
    return val
    #ber om val i menyn och returnerar värdet

def huvudslinga(): #utfärdar användarens val

    val = valet()
    while val != 3: #återupprepande slinga

        if val == 1:
            try:
                area = float(input("Mata in area i enheten kvadratkilometer \n"))
            except ValueError:
                print("Mata in siffror. Arean ska bestå av ett tal")
            try:
                latitud = input("Mata in latituder du vill jämföra, skiljt med mellanrum \n").split()
                latitud = [float(n) for n in latitud]
            except ValueError:
                print("Mata in siffor. använd punkt istället för decimal")
            print("klar \n")
            skapa_fil_solkraft(area, latitud)
            #sparar användarens valda värden
            #returnerar error om kraven ej är uppfyllda
        elif val == 2:
            try:
                rotor = float(input("Mata in rotordiametern i meter \n"))
            except ValueError:
                print("Mata in siffror. Rotordiametern ska bestå av ett tal \n")
            print("klar \n")
            skapa_fil_vindkraft(rotor)
            #sparar användarens valda värde
            #returnerar error om kraven ej är uppfyllda
        elif val == 3:
            print("avslutar \n")
        else:
            print("Fel input")
        
        val = valet() #upprepar slingan om val=! 3

def medelvärde(lista_värden):
    summa = 0.0
    for n in lista_värden:
        summa += float(n)
    return round(100*summa/360)/100
    #beräknar dagsmedelvärden under ett år. Två decimalers noggranhet

def skapa_fil_vindkraft(rotor):
    dag = []; månad = []; lista_rotor = []; lista_vindtal = []; energi = []; vind_medel = []
    #skapar listor
    for tid in range(1,360):
        temp = Vindkraft(rotor,tid)
        lista_rotor.append(rotor)
        energi.append(temp.vindenergi())
        dag.append((tid - 1)%30 + 1) #delar upp årets dagar på ett 30 intervall
        månad.append(månadskoll(tid))
        lista_vindtal.append(temp.get_vindtal())

    for x in range(1,360):
        vind_medel.append(medelvärde(energi))
    #skapar 360 st element i vardera strängar

    tabell = tabulate({"Medelårsproduktion (kWh)": vind_medel, "vindtal": lista_vindtal, 
    "rotordiameter (m)": lista_rotor, "dag": dag, "månad": månad, "energi (kWh)": energi}, headers = "keys")
    fil = open("vindsim.txt", "a")
    fil.write(tabell)
    fil.close()
    #en sträng skapas med hjälp av tabulate där alla listor och värden finns
    #skapar/öppnar en fil och lägger till strängens innehåll

def skapa_fil_solkraft(area, latitud):
    dag = []; månad = []; lista_area = []; soltal = []; lista_latitud = []; solighetsfaktor = []; energi = []; sol_medel = []

    for n in latitud:
        for tid in range(1,360):

            temp = Solkraft(area,n,tid)
            energi.append(temp.solenergi())
            dag.append((tid - 1)%30 + 1) #delar upp årets dagar på ett 30 intervall
            månad.append(månadskoll(tid))
            lista_area.append(area)
            lista_latitud.append(n)
            solighetsfaktor.append("1,367")
            soltal.append(temp.get_soltal())
        for x in range(1,360):
            sol_medel.append(medelvärde(energi))
        #skapar 360 st element i vardera strängar

    tabell = tabulate({"Medelårsproduktion (kWh)": sol_medel, "solighetsfaktor": solighetsfaktor, "soltal": soltal, "latitud": lista_latitud,
    "area (m^2)": lista_area, "dag": dag, "månad": månad, "energi (kWh)": energi}, headers = "keys")
    fil = open("solsim.txt", "a")
    fil.write(tabell)
    fil.close()
    #en sträng skapas med hjälp av tabulate där alla listor och värden finns
    #skapar/öppnar en fil och lägger till strängens innehåll


def månadskoll(dag):
    månad = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "october", "november", "december"]
    dag = math.ceil(dag/30) -1
    return månad[dag]
    #returnerar månadaden som en dag (1-360) inträffar på

class Solkraft:
    
    def __init__(self, area, latitud, tid):
        self.__area = float(area)
        self.__latitud = float(latitud)
        self.__tid = int(tid)
        #tar in användarens input som parametrar
    
    def solenergi(self):
        self.__soltal = random.random()
        f = 0.0
        v = (23.5*math.sin(math.pi*(self.__tid-80)/180)+90 - self.__latitud)/90
        if 0<v<1:
            f = v*v 
        elif v >= 1:
            f = 1
        else:
            f = 0
        W = round(100*self.__area*1.367*self.__soltal*f)/100            
        return W

        #tar in elementen och får ut energin från ekvationen W(t) = area · soltal · solighetsfaktor · f(t, latitud)
        #solighetsfaktorn representeras av i, och soltalet är konstanten 1,367 kWh/m^2
        #returnerar W avrundat till två decimaler
    def get_soltal(self):
        return self.__soltal
        #hämtar soltalet

class Vindkraft:

    def __init__(self, rotordiameter, tid):
        self.__rotordiameter = float(rotordiameter)
        self.__tid = int(tid)
        #tar in användarens input som parametrar
    
    def vindenergi(self):
        self.__vindtal = 2*random.random()
        W = self.__vindtal*500*(self.__rotordiameter/37.5)*(math.sin(math.pi*self.__tid/180)**2 + 0.5)
        return W

        #returnerar energin av en ekvaion W(t) = medeleffekten · vindtal · f(t)
    
    def get_vindtal(self):
        return self.__vindtal
        #hämtar vindtalet



välkomsttext()

huvudslinga()

