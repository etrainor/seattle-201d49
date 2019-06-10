'use strict';

// do you want to play?

function doYouWantToPlay () {
  return confirm('Do you want to play?');
}

function question1() {
  // This will call the askQuestion function and send it the question
  // and the answer. In this case, answer is a number
  return askQuestion('How many kids do I have', 2);
}

function question2() {
  // This will call the askQuestion function and send it the question
  // and the answer. In this case, answer is a string
  return askQuestion('Does John like pizza? (y/n)', 'y');
}

// How will you change the askQuesion function to handle this array logic???
function question3() {
  var family = ['john', 'cathy', 'zach', 'allie'];
  var familyGuess = prompt('Name one person in my family.');
  for (var i =0; i < family.length; i++){
    if (familyGuess.toUpperCase() === family[i].toUpperCase()){
      return true;
    }
  }
  return false;
}

function askQuestion(question, correctAnswer){
  var guess = prompt(question);
  if(typeof correctAnswer === 'string'){
    return guess === correctAnswer;
  } else if(typeof correctAnswer === 'number'){
    return parseInt(guess) === correctAnswer;
  }
}

var numRight = 0;


// if() statements can look at:
// booleans directly - if(true),
// variables - if(someValue),
// expressions - if(this===that),
// and also the return values of functions - if( somethingTastesGood() )
// In our game engine, we use that knowledge to control the flow!
if (doYouWantToPlay()){
  console.log('let\'s play');

  if(question1()){
    numRight++;
  }

  if(question2()){
    numRight++;

    if(question3()){
      numRight++;
    }
  }
}

console.log('You\'ve got ' + numRight + ' right.');
