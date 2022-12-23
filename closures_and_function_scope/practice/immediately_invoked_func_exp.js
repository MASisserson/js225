// IIFE Practice Problems:

// 1
// function() {
//   console.log("Sometimes, syntax isn't intuitive!");
// }();

// The code above will not execute because JS will take line 5 as an attempted
// function statement. But function statements require a function name. No
// function name is provided, so a SyntaxError will be thrown.

// 2
// (function() {
//   console.log("Sometimes, syntax isn't intuitive!");
// })();

// 3
// var sum = 0;
// var numbers;

// sum += 10;
// sum += 31;

// numbers = [1, 7, -3, 3];

// function sum(arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// }

// sum += sum(numbers);  // ?

// The problem with the above code is that it uses the variable `sum` to both
// store a number and to store a function. Variables can each only store one
// thing. The problem can be fixed by changing the code to:

// var sum = 0;
// var numbers;

// sum += 10;
// sum += 31;

// numbers = [1, 7, -3, 3];

// sum += (function(arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers);

// console.log(sum);

// 4
// function countdown(count) {
//   (function(n) {
//     for (let idx = n; idx >= 0; idx--) {
//       console.log(idx);
//     }

//     console.log('Done!');
//   })(count);
// }

// countdown(7);

// 5
// (function foo() {
//   console.log('Bar');
// })();

// foo() // ?

// No, foo() is not accessible in the global scope. The names of functions
// declared as a function expression are only visible inside the function.

// 6
function countdown(count) {
  (function logDecrement(n) {
    if (n >= 0) {
      console.log(n);
      n -= 1;
      logDecrement(n);
      return;
    }

    console.log('Done!');
  })(count);
}

countdown(7);
