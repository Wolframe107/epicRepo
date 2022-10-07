from Student_klass import Student
from Program_klass import Program

class Programstudent(Student):
    def __init__(self, namn, program):
        super().__init__(namn)
        self.avklarade_poäng = 0
        self.program = program

    def klarat_kurs(self, kurspoäng):
        self.avklarade_poäng += kurspoäng

    def räkna_andel_avklarat(self):
        return str(round(100 * self.get_avklarade_poäng() / self.program.get_obl_poäng(), 1)) + "%"

if __name__ == "__main__":
    test = Programstudent("Mille")
    test_obl = Program(23)
    print(test.namn + " har klarat av " + str(round(100 * test.get_avklarade_poäng() / test_obl.get_poäng(), 1)) + "%")
    test.klarat_kurs(20)
    print("nu har han klarat " + str(round(100 * test.get_avklarade_poäng() / test_obl.get_poäng(), 1)) + "%")