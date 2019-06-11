'use strict';

function Person(name, toenails, bananas, car) {
  this.name = name;
  this.nickname = toenails;
  this.age = bananas;
  this.car = car;
  Person.list.push(this);
}
Person.list = [];

Person.think = function() {
  console.log('thinkin');
};

Person.prototype.run = function() {
  console.log(`${this.name} is runnin`);
};

Person.prototype.walk = function() {
  console.log(`${this.name} is walkin`);
};


/*
  var john = {
    name: 'John',
    nickname: 'Baldy',
    age: 50,
    car: 'Mazda'
  }

  The calls to the constructor below do the same thing ...
  but they make instances of Person, not object literals.
 */

new Person('Cathy', 'Cat', NaN, 'GMC');
var john = new Person('John', 'Baldy', 50, 'Mazda');
new Person('Zach', 'Z', 20, 'Ford');
new Person('Allie', 'Gator', 13, 'none');

console.log(Person.list);

for( var i = 0; i<Person.list.length; i++) {
  Person.list[i].walk();
  Person.list[i].run();
}

Person.think();
