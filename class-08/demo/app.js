'use strict';

var screamer = document.getElementById('screamer');
var whisperer = document.getElementById('whisperer');
var talker = document.getElementById('talker');
var list = document.getElementById('list');
var tasks = document.getElementById('tasks');

var form = document.getElementById('theform');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  list.classList.add('hidden');

  var task = document.createElement('div');

  // event is "submit"
  // event.target is "the form"
  // event.target.monkeys is "the input with an id of monkeys"
  // event.target.monkeys.value is what the person typed into that field

  task.textContent = event.target.monkeys.value;
  tasks.appendChild(task);
  event.target.reset();
});

screamer.addEventListener('click', function () {
  console.log('YOOO!');
});


whisperer.addEventListener('click', logger);
talker.addEventListener('click', logger);

function logger(event) {
  console.log(`something happened to ${event.target.id}`);
}