#!/usr/bin/env python3

def word_score(word):
    s = set()
    count = 0
    for c in word:
        if c not in s and c != ' ':
            s.add(c)
            count += 1

    return count

t = int(input().strip())

for i in range(t):
    n = int(input().strip())

    leader = ""
    leader_score = 0

    for _ in range(n):
        word = input()
        if len(word) < leader_score:
            continue
        else:
            temp = word_score(word)
            if temp > leader_score:
                leader_score = temp
                leader = word
            elif temp == leader_score:
                if word < leader:
                    leader = word
                    leader_score = temp

    print("Case #"+ str(i+1) + ": "+leader)
