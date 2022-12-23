"use strict";

const makeProduct = function makeProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,

    describe() {
      console.log(`=> Name: ${this.name}\n=> ID: ${this.id}`);
      console.log(`=> Price: ${this.price}\n=> Stock: ${this.stock}`);
    },

    setPrice(price) {
      if (price >= 0) {
        this.price = price;
      } else {
        console.log('Invalid price!');
      }
    },
  };
};

let scissors = makeProduct(0, 'Scissors', 8, 10);
let drill = makeProduct(1, 'Cordless Drill', 15, 45);

scissors.describe();
drill.describe();
