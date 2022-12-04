---
title: 'Day 3 (Advent of Code 2022)'
metaTitle: 'Day 3'
metaDesc: 'Day 3: Rucksack Reorganization'
date: '2022-12-03'
tags: 
    - Coding
    - Python
---

## Input
Down below is an example input of the problem.
```
vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
```

Each row in the input represents a rucksack an elf is carrying. An rucksack contains two compartments
and each item is represented by a letter. Each compartment are of equal size so for the first rucksack
the items are `vJrwpWtwJgWrhcsFMMfFFhFp`, which means that the first compartment contains the items
`vJrwpWtwJgWr` and the second `hcsFMMfFFhFp`. Each letter has a priority score:
- The letters `a` through `z` have priority 1 through 26
- The letters `A` through `Z` have priority 27 through 52

## Part 1
Our task in part 1 is to calculate the sum of the priorities of items that appear in both the compartments.

My solution: 

``` python
# --------------------- Part 1 ---------------------
# Reading each of the lines in the text file into the list
lines = []
with open('test_input') as f:
    lines = f.readlines()

priority = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

sum = 0

def get_common_item_type(str1, str2):
    """Returns the char first char that occurs in both str1 and str2"""
    for c in str1:
        if c in str2:
            return c

for rucksack in lines:
    n_items = len(rucksack)
    mid = n_items // 2
    compartment1 = rucksack[:mid]
    compartment2 = rucksack[mid:]

    common_item = get_common_item_type(compartment1, compartment2)

    # Add 1 to sum due to zero indexing
    sum += priority.index(common_item) + 1

print(sum)
```

## Part 2
In part 2 we need to see each set of three lines as a group. The task is 
to get the sum of the priority of the item that appears in all the items 
in the group. So for the above input the first group is:
```
vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
```
And the only letter that appears in all the rows in this group is `r` which 
has priority 18.

My solution:
```python
# --------------------- Part 2 ---------------------
# Reading each of the lines in the text file into the list
lines = []
with open('input') as f:
    lines = f.readlines()

priority = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

sum = 0

def get_common_item_type(str1, str2, str3):
    """Get first common char in str1, str2 and str3"""
    for c in str1:
        if c in str2 and c in str3:
            return c

for i in range(0, len(lines), 3):
    badge = get_common_item_type(lines[i], lines[i + 1], lines[i + 2])
    # Add 1 to sum due to zero indexing
    sum += priority.index(badge) + 1

print(sum)
```

[The source code for all the solutions will be available on Github](https://github.com/R-Jin/Advent-of-Code)

