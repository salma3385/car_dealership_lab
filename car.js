

const Car = function(manufacturer, price,engine){
    this.manufacturer = manufacturer;
    this.price = price;
    this.engine = engine;
}

 const car1 = new Car("Ford","25000","Petrol");
  const car2 = new Car("BMW","25000","Petrol");
  const car3 = new Car("Ford","25000","Petrol");
  const car4 = new Car("Ford","25000","Petrol");
  const car5 = new Car("Kia","25000","Petrol");
  const car6 = new Car("Audi","25000","Petrol");

  let array  = [car1, car2, car3, car4, car5, car6]

module.exports = {Car}

