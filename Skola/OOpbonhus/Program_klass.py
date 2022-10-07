class Program:
    def __init__(self, obl_kurser):
        self.obl_kurser = obl_kurser
        obl_poäng = self.räkna_obl_poäng()
        self.obl_poäng = obl_poäng

    def räkna_obl_poäng(self):

        obl_poäng = 0
        for kurs in self.obl_kurser.values():
            obl_poäng += float(kurs.get_poäng())

        return obl_poäng

    def get_obl_poäng(self):
        return self.obl_poäng

if __name__ == "__main__":
    test_obl = Program(23)
    print(str(test_obl.get_poäng()) + " är ett nummer")
