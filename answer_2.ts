
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

export default class Car {
}


// Modify this block