# What is This

I feel like `this` doesn't do anything outside of a function. So I feel this will throw a SyntaxError or something. The alternative is that it works and `Rick Sanchez` is printed to the console.

I was wrong. The answer is `NaN`. Anywhere outside a function, the `this` keyword is bound to the global object.

# The Franchise

```javascript
const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map(function(number) {
      return `${this.name} ${number}`;
    });
  },
};
```

The problem with the code above is that `map`'s callback function is nested within allMovies. Nested functions don't retain the execution context of their outer function. Instead, they default to using the global object for the value of `this`. 

This problem can be solved via lexical scoping by declaring a variable called `self` that is initialized to `this` outside of the callback function and inside `allMovies`. Then, `self` can be used in place of `this` within the callback function.

You can also define the callback function as an arrow function. Arrow functions don't create their own `this` binding and so the value of `this` within an arrow function is determined lexically.

# The Franchise - Solution 2

```javascript
const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map(function(number) {
      return `${this.name} ${number}`;
    }.bind(this));
  }
}
```

# Our very own bind()

```javascript
function myBind(func, obj) {
  return function(...args) {
    return func.apply(obj, args);
  };
}
```

# myBind() Improved

```javascript
function myBind(func, obj, ...partialArgs) {
  return function(...args) {
    const fullArgs = partialArgs.concat(args);

    return func.apply(obj, fullArgs);
  };
}
```

# myFilter()

```javascript
function myFilter(array, func, thisArg = null) {
  const result = [];

  array.forEach(value => {
    if (func.call(thisArg, value)) {
      result.push(value);
    }
  });

  return result;
}

const filter = {
  allowedValues: [5, 6, 9],
};

const result = myFilter([2, 1, 3, 4, 5, 6, 12], function(val) {
  return this.allowedValues.includes(val);
}, filter); // returns [5, 6]

console.log(result);
```

# Garbage Collection

```javascript
function makeArrays() {
  let array = [];

  return () => {
    array.push('');
    return array;
  };
}

const pushIt = makeArrays();
pushIt();
// more code
```

The garbage collection mechanism cannot collect something until there are no references to the object remaining in the program. `pushIt` references a function that contains the variable `array` in its closure. Thus, `array`'s array cannot be collected right after `pushIt()`.

# Make a Stack

```javascript
function newStack() {
  let stack = [];

  return {
    push(val) {
      stack.push(val);
    },

    pop() {
      return stack.pop();
    },

    printStack() {
      stack.forEach(val => console.log(val));
    },
  };
}
```

# Don't Pollute My Window

```javascript
const name = 'Naveed';
const greeting = 'Hello';

const greeter = {
  message: `${greeting} ${name}!`,
  sayGreetings() {
    console.log(this.message);
  }
};
```

In order to have only one global variable while keeping the functionality of the above code, we can move the declaration of `name` and `greeting` into an immediately invoked function expression that returns an interpolated string to be the value of `greeter.message`.

```javascript
const greeter = {
  message: (() => {
    const name = 'Naveed';
    const greeting = 'Hello';

    return `${greeting} ${name}!`;
  })(),

  sayGreetings() {
    console.log(this.message);
  },
};
```
