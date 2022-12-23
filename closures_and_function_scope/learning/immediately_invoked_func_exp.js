// One style of writing IIFEs:
(function() {
  console.log('hello');
})();

// Another style:
(function() {
  console.log('hello');
}());

// The outer parentheses can be omitted when the function definition is an
// expression that doesn't occur at the beginning of a line:
let foo = function() {
  return function() {
    return 10;
  }();
}();

console.log(foo); // => 10

// Creating a Private Scope with an IIFE

// hypothetical thousands of lines of messy JavaScript code!

var myPet = {
  type: 'Dog',
  name: 'Spot',
};

console.log(`I have pet ${myPet.type} named ${myPet.name}`);

// more mess hypothetical JavaScript code

// The problem with the code above (other than a `var` declaration not being
// at the tope of its scope) is that we don't know whether `myPet` is already
// in the global scope. If `myPet` already exists in the global scope, our
// definition will result in an error.

// hypothetical thousands of lines of messy JavaScript code!

function createAndLogPet() {
  var myPet = {
    type: 'Dog',
    name: 'Spot',
  };

  console.log(`I have pet ${myPet.type} named ${myPet.name}`);
}

// more mess hypothetical JavaScript code

// This is better in that it isolates the variable in function scope. But it
// creates its own problem in that we don't know if the program already contains
// a `createAndLogPet` function in the global scope.

// thousands of lines of messy JavaScript code!

(function() {
  var myPet = {
    type: 'Dog',
    name: 'Spot',
  };

  console.log(`I have pet ${myPet.type} named ${myPet.name}`);
})();

// more messy JavaScript code

// With an IIFE, we can hide the variable inside function scope without having
// to create a function variable.


// Using an IIFE to Return a Function with Access to Private Data

// Function for generating unique numbers:
// let studentId = 0;

// function generateStudentId() {
//   studentId += 1;
//   return studentId;
// }

// Using an IIFE so that generateStudentId is responsible for keeping track of
// student IDs generated without exposing the IDs to being unintentionally
// reassigned.
// let generateStudentId = (function() {
//   let studentId = 0;

//   return function() {
//     studentId += 1;
//     return studentId;
//   };
// })();


// Using an IIFE to Return an Object with Access to Private Data
let inventory = (function() {
  let stocks = [];
  function isValid(newStock) {
    return stocks.every(function(stock) {
      return newStock.name !== stock.name;
    });
  }

  return {
    stockCounts() {
      stocks.forEach(function(stock) {
        console.log(stock.name + ': ' + String(stock.count));
      });
    },
    addStock(newStock) {
      if (isValid(newStock)) { stocks.push(newStock) }
    },
  };
});
