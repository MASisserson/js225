"use strict";

// Problem 1

// const makeMultipleLister = function makeMultipleLister(num) {
//   return function() {
//     for (let mult = num; mult < 100; mult += num) {
//       console.log(mult);
//     }
//   };
// };

// let lister = makeMultipleLister(13);
// lister();

// Problem 2

// const makeRunningTotal = function makeRunningTotal(start) {
//   let num = start;
//   return [
//     function add(int) {
//       num += int;
//       console.log(num);
//     },
//     function subtract(int) {
//       num -= int;
//       console.log(num);
//     },
//   ];
// };

// let [ add, subtract ] = makeRunningTotal(0);

// add(1);
// add(42);
// subtract(39);
// add(6);

// Problem 3

// There is no way to do this.
