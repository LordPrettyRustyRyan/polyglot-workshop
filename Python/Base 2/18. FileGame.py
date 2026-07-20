# The game() function in a program lets a user play a game and returns the score as an integer.
# You need to read a file ‘File_4.txt’ which is either blank or contains the previous Hi-score. 
# You need to write a program to update the Hi score whenever the game() function breaks the Hi-score.

import random

def game():
    print("Your are playing the Game :")
    score = random.randint(1, 70)

    try:
        with open ("File_4.txt") as f:
            hiscore = f.read()
            if (hiscore != ""):
                hiscore = int(hiscore)
            else:
                hiscore = 0
    
    except FileNotFoundError: # Handles the error if high score file is not there
        hiscore = 0

    print(f"Your Score is {score}")

    if (score > hiscore):
        with open ("File_4.txt", "w") as f:
            f.write(str(score))
        hiscore = score
        
    print(f"Your High Score is {hiscore}") # displays the high score after game

    return score

game()