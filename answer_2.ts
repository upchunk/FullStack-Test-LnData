
class Vehicle {
    wheel: number = 2;
    owner: string;

    constructor(owner: string) {
        this.owner = owner
    }
    get_wheel() {
        return this.wheel
    }

    get_owner() {
        return this.owner
    }
}
// Modify this block

class Car {
}


// Modify this block

var assert = require('assert')

var bike = new Vehicle('jenny')
assert(bike.get_wheel() == 2)
assert(bike.get_owner() == 'jenny')
console.log('PASSED 1')

var car = new Car('lucas', 'diesel')
assert(car.get_wheel() == 4)
assert(car.get_owner() == 'lucas')
assert(car.get_engine() == 'diesel')
console.log('PASSED 2')