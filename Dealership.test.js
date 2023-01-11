const {Dealership} = require('./dealership');
const {Car} = require('./car');

beforeEach(() =>{
    dealership = new Dealership();
    
    })

 describe('stock', () => {
     test('can count number in stock', () => {
        expected = 6;
         actual = Dealership.countStock();
         expect(actual).toBe(expected);
     })
       test('can add car to stock', () => {
          expected = 7;
           actual = Dealership.addStock();
           expect(actual).toBe(expected);

      })

      });

      describe('manufactruer info', () => {
        test ('can find all cars from given manufacturer', () => {
            expected = "Ford";
            let array  = Dealership.getManufactruers();
            actual = array[0];
            expect(actual).toBe(expected);
        })

         test ('can find containg each car Manufactruers ', () => {
            expected = 3;
            let array = Dealership.givenManufactruer
            actual = stock.filter();
            expect(actual).toBe(expected)
         })
   })



