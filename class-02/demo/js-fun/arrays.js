var family = ["John", "Cathy", "Zach", "Allie"];



var preLength = family.unshift('Jeff');
console.log(family);

var newLength = family.push('Jodi');
console.log(family);

var deletedPerson = family.shift();
console.log(deletedPerson);
console.log(family);

var lastPerson = family.pop();
console.log(lastPerson);
console.log(family);


// console.log( family );
console.log( family[2] )
console.log( family.length );

var married = family.splice(0,5,'Greg');
console.log(married);
console.log(family);

// alert('foobar');       - function
// console.log('foobar'); - method
