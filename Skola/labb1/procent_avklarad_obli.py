class Kurs:
    def __init__(self, kurskod, kursnamn, poäng):
        self.kurskod = kurskod
        self.kursnamn = kursnamn
        self.poäng = poäng

class Student:
    def __init__(self, namn):
        self.namn = namn
        self.avklarade_poäng = 0
    
    def avklarad_kurs(kurspoäng):
        Student.avklarade_poäng += kurspoäng

class Mediastudent(Student):
    def __init__(self, obligatoriska_poäng):
        self.obligatoriska_poäng = obligatoriska_poäng
    
import csv
studieresultat = open("labb1\Studieresultat.csv")
print(type(studieresultat))