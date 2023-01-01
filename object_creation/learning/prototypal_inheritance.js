"use strict";

// Demonstration of prototype chain lookup
// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// let baz = Object.create(bar);

// console.log(bar.a);  // 1
// console.log(baz.a);  // 1
// console.log(baz.c);  // undefined

// Behavior and data can be stored anywhere up the prototype chain.
let dog = {
  say() {
    console.log(this.name + ' says Woof!');
  },

  run() {
    console.log(this.name + ' runs away.');
  },
};

let fido = Object.create(dog);
fido.name = 'Fido';
fido.say();   // Fido says Woof!
fido.run();   // Fido runs away.

let spot = Object.create(dog);
spot.name = 'Spot';
spot.say();   // => Spot says Woof!
spot.run();   // => Spot runs away.
