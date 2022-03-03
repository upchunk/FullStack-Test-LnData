# FullStack  technical test

Test overview:
- 30% Data structure & Algorithm understanding 
- 15% Object-oriented programming
- 15% SQL understanding
- 40% Web scraping basic project


## Data structure & Algorithm understanding (30%) time: 20 minutes



Generate all possible 2 pair of letters from inputted string, dropping any duplicates
result is in array, the order is up to you
Example:
``` js
input: "abc"
output: ['ab', 'ac', 'ba', 'bc', 'ca', 'cb']
```

Example 2:
``` js
input: "bba"
output: ['bb', 'ba', 'ab']
```
Example 3:
``` js
input: "bbbcd"
output: ['bb', 'bc', 'bd', 'cb', 'cd', 'db', 'dc']
```
Constraint:
input length > 1

Provide your answer in `answer_1.ts` (change to `.js` if neccessary)
if you run in TypeScript, install dependencies and run `npx ts-node answer_1.ts`


## Object-oriented programming (15%) time: 10 minutes
open `answer_2.ts`

extend class `Car` to have `Vehicle`'s `get_wheel` method but returns 4
also `Car` now has additional input `engine` and additonal method `get_engine`

Example:
``` python
vehicle = Vehicle('jenny')
vehicle.get_wheel()
>>> 2
vehicle.get_owner()
>>> 'jenny'

car = Car('lucas', 'diesel')
car.get_wheel()
>>> 4
car.get_owner()
>>> 'lucas'
car.get_engine()
>>> 'diesel'
```

you may not override `get_wheel` in `Car` class