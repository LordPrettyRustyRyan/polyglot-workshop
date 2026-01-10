import random

def game():
    print("you're playing a game")
    score = random.randint(1, 62)

    with open("gamefile.txt") as f:
        hiscore = f.read()
        if (hiscore!=""):
            hiscore = int(hiscore)
        else:
            hiscore = 0
    
    print(f"Your Score: {score}")

    if (score>hiscore):
        with open ("gamefile.txt", "w") as f:
            f.write(str(score))

    return score

game()