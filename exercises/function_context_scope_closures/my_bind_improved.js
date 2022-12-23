"use strict";

function myBind(func, obj, ...partialArgs) {
  return function(...args) {
    const fullArgs = partialArgs.concat(args);

    return func.apply(obj, fullArgs);
  };
}

function add(num1, num2) {
  return num1 + num2;
}

let obj = {
  a: 1,
  b: 2,
};

myBind(add, obj);
