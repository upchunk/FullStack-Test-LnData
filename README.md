# FullStack  technical test

Test overview:
- 30% Data structure & Algorithm understanding 
- 15% Object-oriented programming
- 15% SQL understanding
- 40% Web scraping basic project

---
### Prerequisites
- Node/Typescript: `npm` and do `npm install`
    - If you run in Node, please rename every `.ts` files to `.js`
- Python: `pip install -r requirements.txt`

### How to run 
#### TypeScript: 
`npm test -- answer_1.test.ts`
#### Node: 
`node answer_1.js`
#### Python: 
`python answer_1.py`

---
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

Provide your answer in `answer_1.ts`/`.py`


## Object-oriented programming (15%) time: 10 minutes
open `answer_2.ts` / `.py`

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


## MySQL Understanding (15%): 10 minutes


open `answer_3.ts` / `.py`


The data is looked like this:
table `customer`

| CustID | Name  | Age | Hobby       |
|----|-------|-----|-------------|
| 1  | John  | 21  | Manga       |
| 2  | Ricky | 27  | Photography |
| 3  | Jane  | 19  | Ski         |


and table `favColor`

| ID | CustID | Color  |
|----|--------|--------|
| 1  | 1      | Blue   |
| 2  | 1      | Black  |
| 3  | 1      | Yellow |
| 4  | 2      | Yellow |
| 5  | 2      | White  |
| 6  | 3      | Blue   |
| 7  | 3      | Grey   |
| 8  | 3      | Silver |

Query the data with the constraint:
```
number of favorite color is greater than 2
```