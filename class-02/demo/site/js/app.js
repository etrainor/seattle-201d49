'use strict';

var playGame = confirm('Do you want to play a game?');

if (playGame) {
  var howOld = prompt('How old are you?');
  var age = parseInt(howOld);
  console.log(age, typeof age);

  if (age >= 50) {
    console.log('you should retire');
  }

}

console.log(playGame);