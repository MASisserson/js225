# How to Make an Object with Private Data via a Power Constructor

1. Make an object.
  - Object literal
  - The `new` keyword
  - `Object.create()`
  - Call another power constructor
2. Define some variables and functions.
  - These become private members
3. Augment the object with privileged methods.
  - These have unique access to the stuff defined in step 2
4. Return the object.

In practice:
  ```javascript
  function myPowerConstructor(x) {
    var that = otherMaker(x);   // Step 1
    var secret = f(x);          // Step 2
    that.priv = function () {   // Step 3
      // ... secret x that...
    };
    return that;                // Step 4
  }
  ```

*My Own Thoughts*
Power constructors are essentially object factories.
