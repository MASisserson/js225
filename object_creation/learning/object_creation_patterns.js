"use strict";

// The following patterns are able to create objects like this:
let pointA = {
  x: 30,
  y: 40,

  onXAxis() {
    return this.y === 0;
  },

  onYAxis() {
    return this.x === 0;
  },

  distanceToOrigin() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  },
};

// The Pseudo-classical Pattern
let Point = function(x = 0, y = 0) {
  this.x = x;
  this.y = y;
};

Point.prototype.onXAxis = function() {
  return this.y === 0;
};

Point.prototype.onYAxis = function() {
  return this.x === 0;
};

Point.prototype.distanceToOrigin = function() {
  return Math.sqrt((this.x * this.x) + (this.y * this.y));
};

let pointA = new Point(30, 40);   // use new to create objects
let pointB = new Point(20);

pointA instanceof Point;          // use instanceof to check type
pointB instanceof Point;

pointA.distanceToOrigin();        // 50
pointB.onXAxis();                 // true

// The Pseudo-classical Pattern can also be written using class syntax in ES6
class Point {
  // Definition of the constructor function. Not added to the prototype object.
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  // Methods are created on Point.prototype
  onXAxis() {
    return this.y === 0;
  }

  onYAxis() {
    return this.x === 0;
  }

  distanceToOrigin() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  }
}

// The OLOO (Object Linking to Other Objects) Pattern
let Point = {             // capitalized name for the prototype as a convention
  x: 0,                   // default values added in case `init` not called
  y: 0,

  onXAxis() {             // shared methods defined on the prototype
    return this.y === 0;
  },

  onYAxis() {
    return this.x === 0;
  },

  distanceToOrigin() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  },

  init(x, y) {            // optional init method to set states
    this.x = x;
    this.y = y;
    return this;
  },
};

let pointA = Object.create(Point).init(30, 40); // init is required
let pointB = Object.create(Point);

Point.isPrototypeOf(pointA);    // use isPrototypeOf to check type
Point.isPrototypeOf(pointB);

pointA.distanceToOrigin();      // 50
pointB.distanceToOrigin();      // 0
pointA.onXAxis();               // false
pointB.onXAxis();               // true
