---
title: 'Day 2 (Advent of Code 2022)'
metaTitle: 'Day 2'
metaDesc: 'Day 2: Rock Paper Scissors'
date: '2022-12-02'
tags: 
    - Coding
    - Python
---

## Input
Down below is an example input of the problem.
```
A Y
B X
C Z
```

The input is a strategy guide for a rock paper scissors tournament.
Each row represents one round of rock paper scissors where the first column 
is the move of the opponent: `A` for Rock, `B` for Paper and `C` for scissors.
and the second column is our move: `X` for Rock, `Y` for Paper and `Z` for scissors. 

The score of a round is the score for the shape we selected (1 for Rock, 2 for Paper, and 3 for Scissors) plus the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

## Part 1
Our task in part 1 is to calculate the total score of each round according to the given strategy guide.

My solution: 

``` python
# --------------------- Part 1 ---------------------
# Reading each of the lines in the text file into the list
lines = []
with open('input') as f:
    lines = f.readlines()

score = 0

for round in lines:
    elf = round[0]
    # -2 since the last char is '\n'
    me = round[-2]

    # If it is a tie
    if (elf == 'A' and me == 'X') or (elf == 'B' and me == 'Y') or (elf == 'C' and me == 'Z'):
        score += 3
    # If we win the round
    elif (elf == 'A' and me == 'Y'):
        score += 6
    elif (elf == 'B' and me == 'Z'):
        score += 6
    elif (elf == 'C' and me == 'X'):
        score += 6
    # If we lose don't add anything

    # Add the score of the chosen shape
    if (me == 'X'):
        score += 1
    elif (me == 'Y'):
        score += 2
    elif (me == 'Z'):
        score += 3

print(score)
```

## Part 2
In part 2 we get new information about the input. Now the second column represents how the round should end (`X` means you need to lose, `Y` means you need to end the round in a draw, and `Z` means you need to win.) 

Using this information we should again calculate the total score.

My solution:
```python
# --------------------- Part 2 ---------------------
# Reading each of the lines in the text file into the list
lines = []
with open('input') as f:
    lines = f.readlines()

score = 0

for round in lines:
    elf = round[0]
    outcome = round[-2]

    # The case where we need to lose
    if (outcome == 'X'):
        if (elf == 'A'):
            score += 3
        elif (elf == 'B'):
            score += 1
        elif (elf == 'C'):
            score += 2

    # The case where we need to end the round in draw
    elif (outcome == 'Y'):
        score += 3
        if (elf == 'A'):
            score += 1
        elif (elf == 'B'):
            score += 2
        elif (elf == 'C'):
            score += 3

    # The case where we need to win
    elif (outcome == 'Z'):
        score += 6
        if (elf == 'A'):
            score += 2
        elif (elf == 'B'):
            score += 3
        elif (elf == 'C'):
            score += 1


print(score)
```

[The source code for all the solutions will be available on Github](https://github.com/R-Jin/Advent-of-Code)
