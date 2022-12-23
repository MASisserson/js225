// General form of partial function application:
// The generator creates the applicator to call the primary.
function primaryFunction(arg1, arg2) {
  console.log(arg1);
  console.log(arg2);
}

function generatorFunction(arg1) {
  return function(arg2) { // applicator
    return primaryFunction(arg1, arg2);
  };
}

let applicatorFunction = generatorFunction('Hello');
applicatorFunction(37.2); // Performs primaryFunction('Hello', 37.2);
// => Hello
// => 37.2

// Partial function application example:
function add(first, second) {
  return first + second;
}

function makeAddN(addend) {       // generator
  // Saves addend via closures; uses addend when function invoked.
  return function(number) {       // applicator
    return add(addend, number);   // call primary
  };
}

let add1 = makeAddN(1);
add1(1);  // 2
add1(41); // 42

let add9 = makeAddN(9);
add9(1);  // 10
add9(9);  // 18

// General purpose generator function that partially applies a single argument
// to any two-argument primary:
function add(first, second) {
  return first + second;
}

function repeat(count, string) {
  let result = '';
  let idx;
  for (idx = 0; idx < count; idx += 1) {
    result += string;
  }

  return result;
}

function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

let add1 = partial(add, 1);
add1(2);              // 3
add1(6);              // 7

let threeTimes = partial(repeat, 3);
threeTimes('Hello');  // 'HelloHelloHello'
threeTimes('!');      // '!!!'

// Using Function.prototype.bind for Partial Function Application:
let add1 = add.bind(null, 1);
add1(2);              // 3
add1(6);              // 7

let threeTimes = repeat.bind(null, 3);
threeTimes('Hello');  // 'HelloHelloHello'
threeTimes('!');      // '!!!'
