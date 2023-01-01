# Practice Problems Set 1

## Problem 1

```javascript
let a = 1;
let foo;
let obj;

function Foo() {
  this.a = 2;
  this.bar = function() {
    console.log(this.a);
  };
  this.bar();
}

foo = new Foo();

foo.bar();
Foo();

obj = {};
Foo.call(obj);
obj.bar();

console.log(this.a);
```

The above code logs:
```bash
2
2
2
2
2
2
```

Whenever `Foo()` is called, `this.bar` runs. On lines 18 and 20, `this` refers to the newly
created object referenced by `foo`. On line 21, `this` refers to the global object. Thus, `a` is
set as a property of the global object. Foo us run with the `obj` object as the context on line
24, thus `obj` is given an `a` property with a value of `2`. Thus `2` is printed from lines 24 and 25. On line 27, `2` is printed because `a` is a property of the
global object.

## Problem 2

```javascript
let RECTANGLE = {
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.perimeter = RECTANGLE.perimeter();
}

let rect1 = new Rectangle(2, 3);
console.log(rect1.area);
console.log(rect1.perimeter);
```

The code logs:

```bash
NaN
NaN
```

The problem with the above code is that `this` in `RECTANGLE.area()` and `RECTANGLE.perimeter()`
refer to the `RECTANGLE` object, not the `rect1` object. This problem can be fixed by invoking
the two methods indirectly with `Function.prototype.call()`.

```javascript
let RECTANGLE = {
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(this);
}

let rect1 = new Rectangle(2, 3);
console.log(rect1.area);
console.log(rect1.perimeter);
```

## Problem 3

```javascript
const Circle = function CircleObject(radius) {
  this.radius = radius;
};

Circle.prototype.area = function() {
  return (Math.PI * Math.pow(this.radius, 2));
};

let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27
```

## Problem 4

```javascript
let ninja;
function Ninja() {
  this.swung = true;
}

ninja = new Ninja();

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword());
```

The above code will print:

```bash
true
```

## Problem 5

```javascript
let ninja;
function Ninja() {
  this.swung = true;
}

ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

console.log(ninja.swingSword());
```

The above code will print:

```bash
Uncaught TypeError: ninja.swingSword is not a function
```

Here, we reassigned Ninja.prototype to a new object rather than mutating the original object.
Nonetheless, `ninja` still inherits from the old object, in which there is no `swingSword` method.

## Problem 6

```javascript
let ninjaA;
let ninjaB;
function Ninja() {
  this.swung = false;
}

ninjaA = new Ninja();
ninjaB = new Ninja();

// Add a swing method to the Ninja prototype which
// returns the calling object and modifies swung
Ninja.prototype.swing = function() {
  this.swung = true;
  return this;
};

console.log(ninjaA.swing().swung);      // must log true
console.log(ninjaB.swing().swung);      // must log true
```

## Problem 7

```javascript
let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

let ninjaB = Object.create(Object.getPrototypeOf(ninjaA));

console.log(ninjaB.constructor === ninjaA.constructor);    // true
```


# Practice Problems Set 2

## Problem 1

```javascript
let shape = {
  getType() {
    return this.type;
  }
};

function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.type = 'triangle';
}

Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
};

Triangle.prototype.constructor = Triangle;

let t = new Triangle(3, 4, 5);
console.log(t.constructor);                 // Triangle(a, b, c)
console.log(shape.isPrototypeOf(t));        // true
console.log(t.getPerimeter());              // 12
console.log(t.getType());                   // "triangle"
```

## Problem 2

```javascript
function User(first, last) {
  if (!(this instanceof User)) {
    return new User(first, last);
  }

  this.name = first + ' ' + last;
}

let name = 'Jane Doe';
console.log(name);         // => Jane Doe
let user1 = new User('John', 'Doe');
console.log(user1.name);   // => John Doe
let user2 = User('John', 'Doe');
console.log(user2.name);   // => John Doe
```

## Problem 3

```javascript
function createObject(obj) {
  let newObj = {};
  Object.setPrototypeOf(newObj, obj);

  return newObj;
}

let foo = {
  a: 1
};

let bar = createObject(foo);
console.log(foo.isPrototypeOf(bar));         // true
```

An alternative solution:

```javascript
function createObject(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}
```


## Problem 4

```javascript
Object.prototype.begetObject = function() {
  return Object.create(this);
};

let foo = {
  a: 1,
};

let bar = foo.begetObject();
console.log(foo.isPrototypeOf(bar));         // true
```

## Problem 5

```javascript
function neww(constructor, args) {
  let obj = Object.create(constructor.prototype);
  // obj.creator = constructor;
  // obj.creator(...args);
  // delete obj.creator;

  // return obj;

  let result = constructor.apply(obj, args);
  console.log(result);
  return typeof result === 'object' ? result : obj;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

let john = neww(Person, ['John', 'Doe']);
console.log(john);
john.greeting();          // => Hello, John Doe
console.log(john.constructor);         // Person(firstName, lastName) {...}
```
