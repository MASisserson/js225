# Ancestors

input: n/a
return: array

rules:
1. Return a new array.
2. Don't include null after Object.prototype.
3. Include everything between the object and Object.prototype, not including the object.

Algorithm:
0. Set up an empty result array.
1. Set up a loop. In the loop:
  1. Call up the prototype of the current object and reassign currObject to that object.
  2. Check if currObject is falsy. If so, break out of the loop.
  3. Push that new currObj onto the result array.
2. Return the result array.


# Delegate

input: object, object's method as a string, args in a separated list.
return: A function that calls the method passed in.

Rules:
1. arguments are passed in in a list (not an array or any data type)
2. Any method arg is allowed.
3. First function arg has to be an object.
4. Second function arg has to be a string that is a property of the object passed in in arg 1.

Algorithm:
1. Return a function that takes no arguments and does:
  1. Calls the object's method with the given arguments.
    => Use apply or call to keep the object as the execution context


# Classical Object Creation


