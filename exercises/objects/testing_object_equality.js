"use strict";

/*

In JavaScript, comparing two objects either with == or === checks for object identity. In other words, the comparison evaluates as true if it's the same object on either side of == or ===. This is a limitation, in a sense, because sometimes we need to check if two objects have the same key/value pairs. JavaScript doesn't give us a way to do that.

Write a function objectsEqual that accepts two object arguments and returns true or false depending on whether the objects have the same key/value pairs.

input:  2 objects
return: boolean

Rules:
1. The two objects must have the same keys.
2. The two objects must have the same value for each key.
3. Empty objects are equal to each other.
4. Do we have to handle instances where values are objects?

Algorithm:
1. Determine if the keys are the same.
    A. Pull the keys into an array.
    B. Compare the values of the array to determine if they are equal.
        a. Compare array sizes first.
            If equal, continue
            if unequal, break all and return false
        b. Sort arrays.
        c. Iterate through arrays, checking each value against each other.
            Return false if an unequal value is found.
    C. Return true at the end
2. Determine if the keys have the same values.
    A. Iterate through an array of the objects' keys.
    B. Compare each value.
        Return false if an unequal value is found.
    C. Return true at the end

*/

const arraysEqual = function arraysUnequal(arr1, arr2) {
  if (arr1.length !== arr2.length) return true;

  return arr1.every((key, idx) => key === arr2[idx]);
};

const valuesEqual = function objectsUnequal(obj1, obj2) {
  const keys = Object.keys(obj1).sort();

  return keys.every(key => obj1[key] === obj2[key]);
};

const objectsEqual = function objectsEqual(obj1, obj2) {
  const objOneKeys = Object.keys(obj1).sort();
  const objTwoKeys = Object.keys(obj2).sort();

  return (arraysEqual(objOneKeys, objTwoKeys) && valuesEqual(obj1, obj2));
};

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
