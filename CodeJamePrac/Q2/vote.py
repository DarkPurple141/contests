#!/usr/bin/env python3

from itertools import combinations as c

def find_prob(n,m):
    combos = n*'a' + m*'b'

    possibles = list(c(combos,m+n))
    print(possibles)
    total = prob = 0

    for i in possibles:

        prob += always_leading(i)
        total += 1

    return prob/total

def always_leading(perm):
    a = b = 0
    for c in perm:
        if c == 'a':
            a+=1
        else:
            b+=1

        if a <= b:
            return 0

    return 1

t = int(input().strip())

for i in range(t):
    n, m = map(int,(input().split()))
    prob = 1
    if m == 0:
        prob = 1
    else:
        prob = find_prob(n,m)

    print("Case #"+str(i+1)+":",prob)
