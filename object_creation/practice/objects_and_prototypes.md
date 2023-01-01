# Learning Problems

# Problem 1

```javascript
let prot = {};

let foo = Object.create(prot);
```

# Problem 2

```javascript
let prot = {};

let foo = Object.create(prot);
console.log(Object.getPrototypeOf(foo) === prot);
```

# Problem 3

```javascript
let prot = {};

let foo = Object.create(prot);
console.log(prot.isPrototypeOf(foo));
```

# Problem 4

```javascript
let prot = {};

let foo = Object.create(prot);

prot.isPrototypeOf(foo);
Object.prototype.isPrototypeOf(foo);
```

The second to last line of code will return `true`.
The last line will also return `true`. `prot` is not explicitly given a prototype, so it is given the default `Object.prototype` prototype. Thus `Object.prototype` is up the prototype chain from `foo`.
