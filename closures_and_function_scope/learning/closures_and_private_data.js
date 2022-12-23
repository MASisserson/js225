"use strict";

// Problem 1

// const makeCounterLogger = function makeCounterLogger(start) {
//   return function(end) {
//     if (start <= end) {
//       for (let iter = start; iter <= end; iter++) {
//         console.log(iter);
//       }
//     } else {
//       for (let iter = start; iter >= end; iter--) {
//         console.log(iter);
//       }
//     }
//   };
// };

// let countLog = makeCounterLogger(5);
// countLog(8);
// countLog(2);

// Problem 2

const processItem = function processItem(list, item) {
  if (list.length === 0 && item === 'undefined') {
    console.log('This list is empty');
  } else if (item === 'undefined') {
    list.forEach(lstItem => console.log(lstItem));
  } else if (list.includes(item)) {
    list.splice(list.indexOf(item), 1);
    console.log(`${item} removed!`);
  } else {
    list.push(item);
    console.log(`${item} added!`);
  }
};

const makeList = function makeList() {
  let list = [];
  return function(arg) {
    let item;
    try {
      item = String(arg);
    } catch {
      console.log('Sorry, this function only takes strings.');
    }

    processItem(list, item);
  };
};

let list = makeList();
list();
list('make breakfast');
list('read book');
list();
list('make breakfast');
list();
