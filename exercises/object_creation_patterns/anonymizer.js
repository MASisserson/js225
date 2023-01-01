"use strict";

const getAlphabet = function generateAlphabetArray() {
  let alphabet = [];
  for (let idx = 10; idx < 36; idx++) {
    alphabet.push(idx.toString(36));
  }

  return alphabet;
};

const getDigits = function generateDigitsArray() {
  let digits = [];
  for (let idx = 0; idx < 10; idx++) {
    digits.push(idx);
  }

  return digits;
};

const CHARACTERS = getAlphabet().concat(getDigits());

const Account = (function createAccount() {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;
  let displayName;

  const genRndChar = function generateRandomCharacter() {
    return CHARACTERS[Math.floor(Math.random() * 36)];
  };

  const genName = function generateDisplayName() {
    let displayName = '';
    for (let idx = 1; idx <= 16; idx++) {
      displayName += genRndChar();
    }

    return displayName;
  };

  const isWrongPwd = function isWrongPasswordCheck(givenPwd) {
    return givenPwd !== userPassword;
  };

  return {
    displayName,

    init(email, password, firstName, lastName) {
      let
      return this;
    },

    reanonymize(pwd) {
      if (isWrongPwd(pwd)) return 'Invalid Password';

      this.displayName = genName();
      return true;
    },

    resetPassword(oldPwd, newPwd) {
      if (isWrongPwd(oldPwd)) return 'Invalid Password';

      userPassword = newPwd;
      return true;
    },

    firstName(pwd) {
      if (isWrongPwd(pwd)) return 'Invalid Password';

      return userFirstName;
    },

    lastName(pwd) {
      if (isWrongPwd(pwd)) return 'Invalid Password';

      return userLastName;
    },

    email(pwd) {
      if (isWrongPwd(pwd)) return 'Invalid Password';

      return userEmail;
    },
  };
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let matthewSisserson = Object.create(Account).init('m@s.com', '1234', 'Mat', 'Sisserson');
console.log(fooBar.firstName('1234'));
console.log(matthewSisserson.firstName('1234'));
