from Program_klass import Program

class Student:
    def __init__(self, namn):
        self.namn = namn

    def get_avklarade_poäng(self):
        return self.avklarade_poäng

if __name__ == "__main__":
    test = Student("Mille")
    test_obl = Program(23)
    print(test.namn + " har klarat av " + str(round(100 * test.get_avklarade_poäng() / test_obl.get_poäng(), 1)) + "%")