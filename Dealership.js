const {Car} = require('./Car.js')

const Dealership = function(name, maxNoCars, stock){
    this.name = name;
    this.maxNoCars = maxNoCars;
    this.stock = stock;
}

 Dealership.prototype.countStock = function () {
    return this.stock.length
}

Dealership.prototype.addStock = function () {
    return this.stock.push(car)
}

 Dealership.prototype.getManufactruers = () => {
    let array = this.stock;
    let arrayManufacturer = [];

    for (let i = 0; i < array.length; i++){
        arrayManufacturer.push(array[i].manufacturer)
    }

   return arrayManufacturer;

};

Dealership.prototype.givenManufacturer = function (){
    return this.stock.filter(manufacturer => car.manufacturer === manufacturer);
}

 //Dealership.prototype.totalValue = function () {
    //return this.price.reduce(accumulator, price) => {

    // }
 //}



const dealership = new Dealership("Alpha", "6", ["car1", "car2", "car3", "car4", "car5", "car6"]);


const car1 = new Car("Ford","25000","Petrol");
const car2 = new Car("BMW","25000","Petrol");
const car3 = new Car("Ford","25000","Petrol");
const car4 = new Car("Ford","25000","Petrol");
const car5 = new Car("Kia","25000","Petrol");
const car6 = new Car("Audi","25000","Petrol");



//const count =  Dealership.filter(dealership1 => dealership1.stock === '0').length;

//console.log(countStock);



module.exports = {Dealership}