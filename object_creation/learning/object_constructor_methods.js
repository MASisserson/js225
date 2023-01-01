"use strict";

// We can mimic classicla inheritance with `Object.create()` and
// `Object.getPrototypeOf()`:
Object.getPrototypeOf([]) === Array.prototype; // true

function NewArray() {}
NewArray.prototype = Object.create(Object.getPrototypeOf([]));

// Now, NewArray.prototype can delegate Array methods to Array.prototype
// On top of that, we can give it unique functionality:
NewArray.prototype.first = function() {
  return this[0];
};

let newArr = new NewArray();
let oldArr = new Array();

oldArr.push(5);
newArr.push(5);
oldArr.push(2);
newArr.push(2);
console.log(newArr.first());           // => 5
console.log(oldArr.first);             // => undefined

// Object.defineProperties
// Used to add properties and values to an object and set whether each property
// can be changed or not.
let obj = {
  name: 'obj',
};

Object.defineProperties(obj, {
  age: {
    value: 30,
    writable: false,
  },
});

console.log(obj.age); // 30
obj.age = 32;         // throws an error in strict mode
console.log(obj.age); // 30

// Object.freeze
// Prevents any properties or values on an object from being changed or deleted
let frozen = {
  integer: 4,
  string: 'String',
  array: [1, 2, 3],
  object: {
    foo: 'bar'
  },
  func() {
    console.log('I\'m frozen');
  },
};

Object.freeze(frozen);
frozen.integer = 8;
frozen.string = 'Number';
frozen.array.pop();
frozen.object.foo = 'baz';
frozen.func = function() {
  console.log('I\'m not really frozen');
};

// When the above changes are made, nothing is able to be changed except for the
// array and object. That is because the changes were mutations to the array and
// object, not reassignments of the property to a new value. Mutations are
// allowed in a frozen property, much like a constant variable.
console.log(frozen.integer);    // 4
console.log(frozen.string);     // String
console.log(frozen.array);      // [1, 2]
console.log(frozen.object.foo); // baz
frozen.func();                  // I'm frozen
