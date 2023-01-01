# Learning Problems

## Problem 1

```javascript
let foo = {};
let bar = Object.create(foo);

foo.a = 1;

console.log(bar.a);
```

The code above is going to log `1` to the console. `bar` can access any of the properties of `foo`
that it doesn't already have an unique copy of. `bar` doesn't have a defined `a` property so it
will access `a` from `foo` via the prototype chain.

## Problem 2

```javascript
let foo = {};
let bar = Object.create(foo);

foo.a = 1;
bar.a = 2;
console.log(bar.a);
```

The code above is going to log `2`. In this case, `bar` has a unique property `a` that points to
`2`. It will not look up the prototype chain to find another `a` property.

## Problem 3

```javascript
let boo = {};
boo.myProp = 1;

let far = Object.create(boo);

// lots of code

far.myProp;       // 1
```

We don't implicitly know, from the code above, that `far.myProp` is referencing a property owned
by `boo`. We can make certain by checking whether or not `far` owns a property called `myProp` by
calling `far.hasOwnProperty('myProp');`.


# Practice Problems

## Problem 1

input: object, property key string
return: object

**Rules**
1. If a property doesn't exist on any parent in the prototype chain, return `null`

**Algorithm**
1. Iterate until:
    A. An object is found that has the property.
    B. The current object is `Object.prototype`
2. At each iteration, check whether the current object has the desired property.

```javascript
"use strict";

function getDefiningObject(object, propKey) {
  let currObj = object;
  while (true) {
    if (currObj.hasOwnProperty(propKey)) {
      return currObj;
    } else if (currObj === Object.prototype) {
      return null;
    }

    currObj = Object.getPrototypeOf(currObj);
  }
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // => true
console.log(getDefiningObject(qux, 'e'));             // => null
```

## Problem 2

input: object
return: shallow copy of object

```javascript
"use strict";

function shallowCopy(object) {
  return Object.assign(Object.create(Object.getPrototypeOf(object)), object);
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log('c is ' + this.c);
};

let baz = shallowCopy(bar);
console.log(baz.a);       // => 1
baz.say();                // => c is 3
console.log(baz.hasOwnProperty('a'));  // false
console.log(baz.hasOwnProperty('b'));  // false
```

## Problem 3

```javascript
"use strict";

function extend(destination, ...objects) {
  return Object.assign(destination, ...objects);
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe
```
