"use strict";

// Prototype Inheritance:
let parent = {
  val: 42,
  get() {
    return this.val;
  },
};

let child = Object.create(parent);
child.val = 3.14159;

let grandchild = Object.create(child);

console.log(parent.get());     // => 42
console.log(child.get());      // => 3.14159
console.log(grandchild.get()); // => 3.14159

// The Prototypal Model: Organizing Objects - separating methods and data
const AnswerPrototype = {
  constructor(value) {
    this._val = value;
  },
  get() {
    return this._val;
  },
};

const lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.constructor(42);
lifeAnswer.get();     // => 42

const dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.constructor(3.14159);
dessertAnswer.get();  // => 3.14159

// Prototypal Subclass
const FirmAnswerPrototype = Object.create(AnswerPrototype);
FirmAnswerPrototype.get = function get2() {
  return AnswerPrototype.get.call(this) + '!!';
};

const luckyAnswer = Object.create(FirmAnswerPrototype);
luckyAnswer.constructor(7);
luckyAnswer.get();    // => "7!!"

const magicAnswer = Object.create(FirmAnswerPrototype);
magicAnswer.constructor(3);
magicAnswer.get();    // => "3!!"

// The Classic Model
function Answer(value) {
  this._val = value;
}

Answer.prototype.get = function get() {
  return this._val;
};

const lifeAnswer = new Answer(42);
lifeAnswer.get();     // => 42

const dessertAnswer = new Answer(3.14159);
dessertAnswer.get();  // => 3.14159

// Classic Model Subclass
function FirmAnswer(value) {
  Answer.call(this, value);
}
// Set the FirmAnswer default prototype to inherit from Answer.prototype
FirmAnswer.prototype = Object.create(Answer.prototype);
FirmAnswer.prototype.constructor = FirmAnswer;          // Unnecessary?

FirmAnswer.prototype.get = function get() {
  return Answer.prototype.get.call(this) + '!!';
};

const luckyAnswer = new FirmAnswer(7);
luckyAnswer.get();    // => "7!!"

const magicAnswer = new FirmAnswer(3);
magicAnswer.get();    // => "3!!"S

// Class Syntax
class Answer {
  constructor(value) {
    this._val = value;
  }

  get() {
    return this._val;
  }
}

const lifeAnswer = new Answer(42);
lifeAnswer.get();     // => 42

const dessertAnswer = new Answer(3.14159);
dessertAnswer.get();  // => 3.14159

// Class Syntax Subclass
class FirmAnswer extends Answer {
  constructor(value) {
    super(value);
  }

  get() {
    return super() + '!!';
  }
}

const luckyAnswer = new FirmAnswer(7);
luckyAnswer.get();    // => "7!!"

const magicAnswer = new FirmAnswer(3);
magicAnswer.get();    // => "3!!"S
