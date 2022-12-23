"use strict";

function myBind(func, obj) {
  return function(...args) {
    return func.apply(obj, args);
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
