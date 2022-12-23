/*

// Buggy Code 1

The `greet()` method does not call `this.morning` and so on. It instead calls
`morning`. There is no such local variable, and so an error is thrown.

*/


// #############################################################################

// Buggy Code 2

// const item = {
//   name: 'Foo',
//   description: 'Fusce consequat dui est, semper.',
//   price: 50,
//   quantity: 100,

//   discount(percent) {
//     const discount = this.price * percent / 100;
//     this.price -= discount;

//     return this.price;
//   },
// };

// console.log(item.discount(20)); // 40
// console.log(item.discount(50)); // 25
// console.log(item.discount(25)); // 37.5


/*

The problem with the code above is that item.price is getting modified with each
call to `item.discount()`. A new value should be returned instead.

*/

const item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,

  discount(percent) {
    const discount = this.price * percent / 100;
    const discountedPrice = this.price - discount;

    return discountedPrice;
  },
};

console.log(item.discount(20)); // 40
console.log(item.discount(50)); // 25
console.log(item.discount(25)); // 37.5
