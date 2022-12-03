---
title: 'Day 1 (Advent of Code 2022)'
metaTitle: 'Day 1'
metaDesc: 'Day 1: Calorie Counting'
date: '2022-12-01'
tags: 
    - Coding
---

Last year I tried [Advent of Code 2021](https://adventofcode.com/2021), 
but abandoned it due to lack of time. This year I am hoping to complete all the 
coding challenges. My programming language of choice this year is python.

## Input
Down below is an example input of the problem.
```
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
```

Each group of numbers are separated by an empty line and represents the 
number of calories in the foods that an elf is carrying.

In the above input the first elf is carrying three food items: 

- The first is 1000 calories
- The second is 2000 calories
- The third is 3000 calories

## Part 1
For the first part we are asked: "How many calories is the elf who carries
the most calories carrying?"

My solution: 

```python
# Reading each of the lines in the text file into the list
lines = []
with open('input') as f:
    lines = f.readlines()

highest = 0
sum = 0

for number in lines:
    # Newline means end of the group
    if number == '\n':
        if highest < sum:
            highest = sum
        sum = 0
    else:
        sum += int(number)

print(highest)
```

## Part 2
For part 2 we are asked to sum the total calories of the top three elf's 
that carries the most calories.

My solution:
```python
# Reading each of the lines in the text file into the list
lines = []
with open('input') as f:
    lines = f.readlines()

highest = 0
second = 0
third = 0
sum = 0

for number in lines:
    # Newline means end of the group
    if number == '\n':
        # If sum of group higher than previous highest sum
        # Update highest, second and third.
        if highest < sum:
            third = second
            second = highest
            highest = sum
        # Same idea as above
        elif second < sum:
            third = second
            second = sum
        elif third < sum:
            third = sum

        sum = 0
    else:
        sum += int(number)

print(highest + second + third)
```

[The source code for all the solutions will be available on Github](https://github.com/R-Jin/Advent-of-Code)
