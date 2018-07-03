#!/usr/bin/env python3.6

class Hobbies:
    @staticmethod
    def find_hobbyists(hobbies, hobby):
        filtered = []

        for person in hobbies:

            l = hobbies[person]
            num = list(filter(lambda x: x == hobby, l))
            if len(num):
                filtered.append(person)

        return filtered


def main():
    hobbies = {
        "John": ['Piano', 'Puzzles', 'Yoga'],
        "Adam": ['Drama', 'Fashion', 'Pets'],
        "Mary": ['Magic', 'Pets', 'Reading']
    }

    print(Hobbies.find_hobbyists(hobbies, 'Yoga'));

if __name__ == '__main__':
    main()
