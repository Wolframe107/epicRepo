"""
Författare: Mille Kåge
Datum: 6/10 2022
"""

from Programstudent_klass import Programstudent
from Kurs_klass import Kurs
from Program_klass import Program
import csv

# ----------------------- Initialiserar kurserna

media_fil = open("ObligatoriskaMediaKurser.csv")
media_obl_kurser = csv.reader(media_fil)

open_fil = open("ObligatoriskaOpenKurser.csv")
open_obl_kurser = csv.reader(open_fil)

# Lägger in kurserna i två dictionaries där key'n är kurskod och innehållet är kurs-objektet
media_kurser = {}
for kurs in media_obl_kurser:
    kurs_data = kurs[0].split(";")
    media_kurser[kurs_data[0]] = Kurs(kurs_data[0], kurs_data[1], kurs_data[2])

open_kurser = {}
for kurs in open_obl_kurser:
    kurs_data = kurs[0].split(";")
    open_kurser[kurs_data[0]] = Kurs(kurs_data[0], kurs_data[1], kurs_data[2])

# ----------------------- Initialisera studenter

# Räknar ut antal obligatoriska poäng för Media och Open

media_program = Program(media_kurser)
open_program = Program(open_kurser)

# Lägger in studenterna i två dictionaries samt räknar hur många avklarade poäng de har
student_fil = open("Studieresultat.csv")
studieresultat = csv.reader(student_fil)

media_studenter = {}
open_studenter = {}
for rad in studieresultat:
    rad_data = rad[0].split(";")
    namn = rad_data[0]
    rad_data.pop(0)

    # Tänker i det här fallet att de studenter som är med i datan är både media och open-studenter
    media_studenter[namn] = Programstudent(namn, media_program)
    open_studenter[namn] = Programstudent(namn, open_program)

    for avklarad_kurs in rad_data:
        if avklarad_kurs in media_kurser:
            media_studenter[namn].klarat_kurs(float(media_kurser[avklarad_kurs].get_poäng()))

        if avklarad_kurs in open_kurser:
            open_studenter[namn].klarat_kurs(float(open_kurser[avklarad_kurs].get_poäng()))

# ----------------------- Utskrift

print("Mediestudenter:")
for student in media_studenter.values():
    print(student.namn + " andel avklarade: " + student.räkna_andel_avklarat())

print("\nOpenstudenter:")
for student in open_studenter.values():
    print(student.namn + " andel avklarade: " + student.räkna_andel_avklarat())
