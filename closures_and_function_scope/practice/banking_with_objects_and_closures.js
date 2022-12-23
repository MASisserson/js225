"use strict";

const makeAccount = function makeAccount(number) {
  let balance = 0;
  let transactions = [];

  return {
    balance() {
      return balance;
    },

    transactions() {
      return transactions;
    },

    number() {
      return number;
    },

    deposit(value) {
      balance += value;
      transactions.push({ type: 'deposit', amount: value });
      return value;
    },

    withdraw(value) {
      if (balance >= value) {
        balance -= value;
        transactions.push({ type: 'withdraw', amount: value });
        return value;
      } else {
        let actualVal = balance;
        balance = 0;
        transactions.push({ type: 'withdraw', amount: value });
        return actualVal;
      }
    },
  };
};

const makeBank = function makeBank() {
  let accounts = [];

  return {
    openAccount() {
      const number = accounts.length + 101;
      const account = makeAccount(number);

      accounts.push(account);
      return account;
    },

    transfer(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    },
  };
};

let bank = makeBank();
console.log(bank.accounts);
// undefined
