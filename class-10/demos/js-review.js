// Created a variable, named "name" and assigned it the value "John"
var name = "John";

// Print out the data type of the variable name (which is "string")
console.log( typeof name );

// Create a variable called "nums" as an empty array, using the Array Constructor
// var nums = new Array(10).fill('');

// Create a variable called "nums" and assign it a value which is
// an array that contains the elements with the values 1,2,3,4,5
// Those elemnts have the index values of: 0,1,2,3,4
// var nums = [1,2,3,4,5];

// Create a variable called "nums" as an empty array
var nums = [];

// Print out the data type for the variable called "nums" ("object")
console.log( typeof nums );

// Print out true or false depending on whether or not "nums" is an instance of Array.
console.log( Array.isArray(nums) )


// Repeat the statements while is between 1 and 100 (inclusive)
// For the variable 'i', starting at 1, incrementing by 1, until it reaches 100 ... do the stuff inside.
// for( var i=1; i<=100; i++ ) {
//   // Add the value of i to the end of the "nums" array
//   nums.push(i);
// }

// Print out the length of the array represented by the variable "nums"
console.log(nums.length);


// Print out the value found at index #3 of the array represented
// by the variable "nums"
console.log( nums[3] );

console.log('----------- OBJECTS -------------- ');

// Create a variable called "john" which is an object, has the properties: first, last, age ... with the values assiged to them as "John", "Cokos", 50
var john = {
  first: "John",
  last: "Cokos",
  lastName: "Cookoo",
  age: 50
}

// Print out the first name in variable john
// Print out the value of the "first" property in the object represented by the variable "john"

console.log(john.first);

var keyword = "last";
// Print out the value of the "keyword" property in the object represented by the variable "john" /// FAIL!
console.log(john.keyword);

// Print out the value of the [keyword] property (which is actually "last" in the object represented by the variable "john" /// FAIL!
console.log(john[keyword]);

// Create a varialbe called props, which is an array, and add the elements "first", "last", "hairType", "age"
var props = ['first', 'last', 'hairType', 'age'];

// Loop over the props array, and for each element ...
for( var i = 0; i<props.length; i++) {
  // Print out the value in the array at position 1
  // and the value associated to that property in the object
  // represented by the variable "john"
  console.log( props[i],  john[props[i]]  );
}

console.log("--------------- FUNCTIONS ------------ ");



// Declare a function named 'sayHi' that takes a parameter called 'name'
// that prints out the string 'Hi' and the value of 'name'
function sayHi(name) {
  console.log('Hi', name);
}


// Declare a variable named 'screamHello' and assign it an
// anonymous function (also called a "function expression")
// which takes a parameter called 'name'
// that prints out the string 'HELLO' and result of running the
// toUpperCase method on the argument called name
//
// Hopefully, this was declared BEFORE we try and use it.
var screamHello = function(name) {
  console.log( 'HELLO', name.toUpperCase() );
}

// Invoke (call) the function 'sayHi' with the argument "Lyndsey"
sayHi('Lyndsey');

// Invoke (call) the function 'screamHello' with the argument 'Jon';
screamHello('Jon');

