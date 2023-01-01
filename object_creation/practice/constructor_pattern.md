# Learning Problems

# Problem 1

Constructor functions use PascalCase. Other functions use camelCase.
Meaning that constructor functions are capitalized.

# Problem 2

```javascript
function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = Lizard();
lizzy.scamper(); // ?
```

The code above will throw a `TypeError`. The `new` keyword was omitted in the constructor function call. Thus the function `lizard()`, with no explicit return value, returned `undefined`. There are no methods or properties in `undefined`.

# Problem 3

```javascript
function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
lizzy.scamper();  // I'm scampering!
```
