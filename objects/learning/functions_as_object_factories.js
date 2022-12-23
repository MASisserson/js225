"use strict";

// let sedan = {
//   speed: 0,
//   rate: 8,

//   accelerate() {
//     this.speed += this.rate;
//   },
// };

// console.log(sedan);
// sedan.accelerate();
// console.log(sedan);

const makeCar = function makeCar(accelRate, brakeRate) {
  return {
    speed: 0,
    accelRate,
    brakeRate,

    accelerate() {
      this.speed += this.accelRate;
    },

    brake() {
      this.speed -= this.brakeRate;

      if (this.speed < 0) {
        this.speed = 0;
      }
    },
  };
};

let sedan = makeCar(8);
sedan.accelerate();
console.log(sedan.speed);

let coupe = makeCar(12);
coupe.accelerate();
console.log(coupe.speed);

let hatchback = makeCar(9);
hatchback.accelerate();
console.log(hatchback.speed);
