"use strict";

// Method Delegation to Prototypes
// There is only one method, and it's in the prototype object.
/*
const DogPrototype = {
  bark() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  }
};

function Dog(name, breed, weight) {
  Object.setPrototypeOf(this, DogPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  // this.bark method removed.
}

let maxi = new Dog('Maxi', 'German Shepherd', 32);

maxi.bark(); // 'Woof!'

console.log(maxi.hasOwnProperty('bark'));
console.log(Object.getPrototypeOf(maxi).bark === DogPrototype.bark);
*/

// We can set the prototype object as a property of the Dog function
// This makes the relationship between the constructor and the prototype
// object more clear.
/*
function Dog(name, breed, weight) {
  Object.setPrototypeOf(this, Dog.myPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.myPrototype = {
  bark() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  }
};

let maxi = new Dog('Maxi', 'German Shepherd', 32);
maxi.bark();
*/

// JavaScript provides a native system of constructor-prototype pairing.
// In this system, only one copy of the prototype's methods exists.
function Dog(name, breed, weight) {
  // deleted Object.setPrototypeOf(this, Dog.myPrototype);
  this.name = name;     // Properties written like this belong to the individual objects
  this.breed = breed;   // because when `new` is used, `this` is set to the newly created
  this.weight = weight; // object.
}

Dog.prototype.bark = function() { // This method is explicitly given to the function prototype
  console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
};

let maxi = new Dog('Maxi', 'German Shepherd', 32);
maxi.bark(); // 'Woof!'

let biggie = new Dog('Biggie', 'Whippet', 9);
biggie.bark(); // 'Yip!'
