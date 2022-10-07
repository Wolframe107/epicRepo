class Kurs:
    def __init__(self, kurskod, kursnamn, poäng):
        self.kurskod = kurskod
        self.kursnamn = kursnamn
        self.poäng = poäng

    def get_poäng(self):
        return self.poäng

if __name__ == "__main__":
    test_kurs = Kurs("123", "test", 22)
    print(test_kurs.kurskod, test_kurs.kursnamn, test_kurs.get_poäng())