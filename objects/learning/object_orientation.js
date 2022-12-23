"use strict";

// let smallCar = {
//   fuel: 7.9,
//   mpg: 37,
//   range() {
//     return this.fuel * this.mpg;
//   },
// };

// console.log(smallCar.range());

function makeVehicle(fuel, mpg) {
  return {
    fuel,
    mpg,
    range() {
      return this.fuel * this.mpg;
    },
  };
}

let smallCar = makeVehicle(7.9, 37);
console.log(smallCar.range());

let largeCar = makeVehicle(9.4, 29);
console.log(largeCar.range());

let truck = makeVehicle(14.4, 23);
console.log(truck.range());
