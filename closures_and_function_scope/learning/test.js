function makeArrayLogger(arr) {
  return function() {
    console.log(arr);
  };
}

let logger = makeArrayLogger([1, 2, 3]);
logger();
