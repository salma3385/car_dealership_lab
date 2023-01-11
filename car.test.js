const {Car} = require('./car');

let car;

beforeEach(() => {
    car = new Car();
})

describe('cobstructor test', () => {
    it ('can output car information', () => {
        const car1 = new Car("Ford","25000","Petrol");
        expect(car1.manufacturer).toBe("Ford");
        expect(car1.price).toBe("25000");
        expect(car1.engine).toBe("Petrol");
    })
})