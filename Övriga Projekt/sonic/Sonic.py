import time
import keyboard

fr = open("sonic\sonic.txt", "r")
text = fr.read()
fr.close()
sonic_words = text.split()

show = ""
while len(sonic_words) > 0:
    keyboard.read_key()
    print("\033c")
    show += (sonic_words[0] + " ")
    sonic_words.pop(0)
    print(show)
    time.sleep(0.09)
