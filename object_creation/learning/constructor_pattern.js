"use strict";

// constructor function
// function Person(firstName, lastName = '') {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.fullName = function() {
//     return (this.firstName + ' ' + this.lastName).trim();
//   };
// }

// let john = new Person('John', 'Doe');
// let jane = new Person('Jane');

// john.fullName();        // => "John Doe"
// jane.fullName();        // => "Jane"

// john.constructor;       // => function Person(...)
// jane.constructor;       // => function Person(...)

// john instanceof Person; // => true
// jane instanceof Person; // => true


// `this` is returned unless the constructor explicitly returns another object
// function Person(firstName, lastName = '') {
//   if (!lastName) {
//     return 'Please provide a last name';
//   }

//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.fullName = function() {
//     return (this.firstName + ' ' + this.lastName).trim();
//   };
// }

// let noLastName = new Person('John');
// console.log(noLastName);      // logs an instance of a Person object
// console.log(noLastName instanceof Person); // => true


function Person(firstName, lastName = '') {
  if (!lastName) {
    return { invalidInput: 'Please provide a last name' };
  }

  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function() {
    return (this.firstName + ' ' + this.lastName).trim();
  };
}

let noLastName = new Person('John');
console.log(noLastName);      // { invalidInput: 'Please provide a last name' }
console.log(noLastName instanceof Person); // false
