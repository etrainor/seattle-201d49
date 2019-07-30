function Person(name, toenails, bananas, car) {
  this.name = name;
  this.nickname = toenails;
  this.age = bananas;
  this.car = car;
  Person.list.push(this);
}
Person.list = [];

Person.prototype.render = function () {
  console.log(`rendering ... ${this.name}`);
  var tableBody = document.getElementById('familyBody');
  var tableRow = document.createElement('tr');
  var cell = document.createElement('td');
  cell.textContent = this.name;
  tableRow.appendChild(cell);
  cell = document.createElement('td');
  cell.textContent = this.nickname;
  tableRow.appendChild(cell);
  cell = document.createElement('td');
  cell.textContent = this.age;
  tableRow.appendChild(cell);
  cell = document.createElement('td');
  cell.textContent = this.car;
  tableRow.appendChild(cell);
  tableBody.appendChild(tableRow);
}


new Person('Cathy', 'Cat', NaN, 'GMC');
new Person('John', 'Baldy', 50, 'Mazda');
new Person('Zach', 'Z', 20, 'Ford');
new Person('Allie', 'Gator', 13, 'none');

for (var i = 0; i < Person.list.length; i++) {
  Person.list[i].render();
}

console.log(Person.list);
