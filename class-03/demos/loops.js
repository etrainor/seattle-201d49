let count = 0;
console.log(count++);
console.log(count);

console.log('-----------');

// Guess my son's name?
// var guess = prompt('What is my sons name?');

var gotItRight = false;
var guess = 'fred';

guess = guess.toUpperCase();
console.log(guess);

var family = ['John','Cathy','Zach','Allie'];

// "for" Loop
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

// Go through the array and see if our guess is correct
// Why family.length?
// Why start at 0?
for( var i = 0; i < family.length; i++ ) {
  if( guess === family[i].toUpperCase() ) {
    gotItRight = true;
  }
}

console.log('Right?', gotItRight);

// While Loop
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

var numGuessesRemaining = 5;

while( numGuessesRemaining > 0 ) {
  // Do your prompt...
  for( var i = 0; i < family.length; i++ ) {
    if( guess === family[i].toUpperCase() ) {
      break;
    }
  }
  numGuessesRemaining--;
}


// Do ... While Loop
// Same as a while, but the "do" part happens at least one time
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while

var correct = false;
do {
  // Do your prompt...
  // var guess = prompt('name?').toUpperCase();
  for( var i = 0; i < family.length; i++ ) {
    if( guess === family[i].toUpperCase() ) {
      correct = true;
    }
  }
}
while( correct === false );
