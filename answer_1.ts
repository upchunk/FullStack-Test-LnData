const checker = require('./checker')

// Modify this block
const pairer = (input: string) => {

    return ['ab', 'ac', 'ba', 'bc', 'ca', 'cb']
}
// Modify this block

const input1 = "abc"
let output1: string[] = pairer(input1)
let answer1: string[] = ['ab', 'ac', 'ba', 'bc', 'ca', 'cb']
checker.checkAnswer1(output1, answer1)
console.log("PASSED 1")


const input2 = "bba"
let output2: string[] = pairer(input2)
let answer2: string[] = ['bb', 'ba', 'ab']
checker.checkAnswer1(output2, answer2)
console.log("PASSED 2")

const input3 = "bbbcd"
let output3: string[] = pairer(input3)
let answer3: string[] = ['bb', 'bc', 'bd', 'cb', 'cd', 'db', 'dc']
checker.checkAnswer1(output3, answer3)
console.log("PASSED 3")