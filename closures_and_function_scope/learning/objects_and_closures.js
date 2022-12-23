"use strict";

const makeList = function makeList() {
  let items = [];

  return {
    list() {
      if (items.length === 0) {
        console.log('This list is empty.');
      } else {
        items.forEach(item => console.log(item));
      }
    },

    add(item) {
      if (!items.includes(item)) {
        items.push(item);
        console.log(`${item} added!`);
      } else {
        console.log(`${item} is already on the list.`);
      }
    },

    remove(item) {
      if (items.includes(item)) {
        items.splice(items.indexOf(item), 1);
        console.log(`${item} removed!`);
      } else {
        console.log(`${item} is not on the list.`);
      }
    },
  };
};

let list = makeList();

list.list();
list.add('peas');
list.list();
list.add('corn');
list.list();
list.add('corn');
list.remove('apples');
list.remove('peas');
list.list();
