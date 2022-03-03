import Car, { Vehicle } from "./answer_2"

describe("Test case", () => {
    it("Vechicle", () => {
        var bike = new Vehicle('jenny')
        expect(bike.get_wheel()).toBe(2)
        expect(bike.get_owner()).toBe('jenny')
    });
    it("Car", () => {
        var car = new Car('lucas', 'diesel')
        expect(car.get_wheel()).toBe(4)
        expect(car.get_owner()).toBe('lucas')
        expect(car.get_engine()).toBe('diesel')
    })

});