"use strict";

// Factory Object Creation Pattern

// function createPerson(firstName, lastName) {
//   let person = {};
//   person.firstName = firstName;
//   person.lastName = lastName || '';
//   person.fullName = function() {
//     return (this.firstName + ' ' + this.lastName).trim();
//   };

//   return person;
// }

// let john = createPerson('John', 'Doe');
// let jane = createPerson('Jane');

// john.fullName();    // "John Doe"
// jane.fullName();    // "Jane"

// Alternative syntax for the same thing:

function createPerson(firstName, lastName = '') {
  return {
    firstName,
    lastName,
    fullName() {
      return (this.firstName + ' ' + this.lastName).trim();
    },
  };
}

let john = createPerson('John', 'Doe');
let jane = createPerson('Jane');

john.fullName();    // "John Doe"
jane.fullName();    // "Jane"
