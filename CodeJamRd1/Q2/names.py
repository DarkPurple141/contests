#!/usr/bin/env python3

t = int(input().strip())


for i in range(t):
    result = "TRUE"

    pattern = input().strip()
    match = input().strip()
    pattern_len = len(pattern)
    match_len = len(match)

    for i,c in enumerate(pattern):
        if c == '*':
            # special case
        else:
            if 






    print("Case #"+ str(i+1) + ": "+result)
