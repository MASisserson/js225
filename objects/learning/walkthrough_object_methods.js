"use strict";

let me = {};
me.id = '1';
me.firstName = 'Matthew';
me.lastName = 'Sisserson';

// fullName(me);

let friend = {
  id: '2',
  firstName: 'John',
  lastName: 'Smith',
};

// fullName(friend);

let mother = {
  id: '3',
  firstName: 'Amber',
  lastName: 'Doe',
};

let father = {
  id: '4',
  firstName: 'Shane',
  lastName: 'Doe',
};

// fullName(mother);
// fullName(father);

let people = {
  collection: [me, friend, mother, father],
  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  rollCall: function() {
    this.collection.forEach(this.fullName);
  },

  add: function(person) {
    if (this.isInvalidPerson(person)) return;

    this.collection.push(person);
  },

  get(person) {
    if (this.isInvalidPerson(person)) return;

    return this.collection[this.getIndex(person)];
  },

  update(person) {
    if (this.isInvalidPerson(person)) return;

    let existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },

  isInvalidPerson(person) {
    return typeof person.id !== 'string' ||
      typeof person.firstName !== 'string' ||
      typeof person.lastName !== 'string';
  },

  getIndex(person) {
    let index = -1;
    this.collection.forEach(function(comparator, i) {
      if (comparator.firstName === person.firstName &&
          comparator.lastName === person.lastName) {
        index = i;
      }
    });

    return index;
  },

  remove(person) {
    if (this.isInvalidPerson(person)) return;

    let index = this.getIndex(person);
    if (index === -1) return;

    this.collection.splice(index, 1);
  },
};

people.rollCall();

console.log(people.getIndex(friend));
people.remove(friend);
console.log(people.getIndex(friend));
