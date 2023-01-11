

const Car = function(manufacturer, price,engine){
    this.manufacturer = manufacturer;
    this.price = price;
    this.engine = engine;
}

const car1 = new Car("Ford","25000","Petrol");

module.exports = {Car}

