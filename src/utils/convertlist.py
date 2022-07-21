with open("./words.txt") as file:
    lines = file.readlines()
    for line in lines:
        line = line.strip()
        if len(line) == 5:
            print(line)