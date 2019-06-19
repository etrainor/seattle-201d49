var Database = function() {
  this.data = {};
}
Database.prototype.setItem = function(key,val) {
  if( typeof val !== "string") { return; }
  this.data[key] = val;
}
Database.prototype.getItem = function(key) {
  return this.data[key];
}

var db = new Database();
db.setItem('name','John');
db.setItem('age',50);

var kids = ['Zach','Allie'];

var stringyKids = JSON.stringify(kids);
db.setItem('kids', stringyKids);

console.log(db);

var kidsFromDB = db.getItem('kids'); // currently a string
kidsFromDB = JSON.parse(kidsFromDB); // Now it's an object

console.log( kidsFromDB[0] );

var john = {
  name: "John",
  age: 50,
  kids: ['Zach', 'Allie']
}

/*
XML:
<person>
  <name>John</name>
  <age>50</age>
  <kids>
    <node>Zach</node>
    <node>Allie</node>
  </kids>
</person>
*/

/*
YML

person
  name
    John
  kids
    - Zach
    - Allie
*/

var jsonJohn = '{"name": "John","age": 50,"kids": ["Zach", "Allie"]}';
var monkeys = 'We eat Bannannas';
