// Lesson Problems

// 1
// function greet(greeting, name) {
//   const capitalizedGreeting = greeting[0].toUpperCase() + greeting.slice(1);
//   console.log(`${capitalizedGreeting}, ${name}!`);
// }

// greet('howdy', 'Joe');        // Howdy, Joe!
// greet('good morning', 'Sue'); // Good morning, Sue!

// 2
// function partial(primary, arg1) {
//   return function(arg2) {
//     return primary(arg1, arg2);
//   };
// }

// function greet(greeting, name) {
//   const capitalizedGreeting = greeting[0].toUpperCase() + greeting.slice(1);
//   console.log(`${capitalizedGreeting}, ${name}!`);
// }

// const sayHello = partial(greet, 'hello');
// sayHello('Brandon');  // Hello, Brandon!

// const sayHi = partial(greet, 'hi');
// sayHi('Sarah');       // Hi, Sarah!


// Practice Problems

// 1
// function subtract(a, b) {
//   return a - b;
// }

// function sub5(a) {
//   return subtract(a, 5);
// }

// console.log(sub5(10)); // 5
// console.log(sub5(20)); // 15

// 2
// function subtract(a, b) {
//   return a - b;
// }

// function makeSubN(b) {
//   return function(a) {
//     return subtract(a, b);
//   };
// }

// let sub5 = makeSubN(5);
// console.log(sub5(10));

// 3
// function makePartialFunc(func, b) {
//   return function(a) {
//     return func(a, b);
//   };
// }

// function multiply(a, b) {
//   return a * b;
// }

// let multiplyBy5 = makePartialFunc(multiply, 5);

// console.log(multiplyBy5(100)); // 500

// 4
// The anonymous function returned by `makePartialFunc()` has `func` and `b` in
// its lexical scope. Thus, it can make a closure containing those two.

// 5
let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function(students) {
    return rollCall('Math', students);
  };
}

let mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan
