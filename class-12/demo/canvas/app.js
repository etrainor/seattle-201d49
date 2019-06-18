'use strict';

var canvas = document.getElementById('placemat');
var context = canvas.getContext('2d');

var pos = { x: 0, y: 0 };

document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

function setPosition(event) {
  pos.x = event.clientX;
  pos.y = event.clientY;
}

function draw(event) {
  if (event.buttons !== 1) { console.log('nope'); return; }

  context.beginPath();

  context.lineWidth = 5;
  context.lineCap = "round";
  context.strokeStyle = "#000";
  context.moveTo(pos.x, pos.y);
  setPosition(event);
  context.lineTo(pos.x, pos.y);

  context.stroke();
}

function drawSquare() {
  context.fillRect(5, 5, 200, 200);
  context.clearRect(7, 7, 196, 196)
}

function drawTriangle(height, width, top, left) {
  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(100, 300);
  context.lineTo(300, 300);
  context.closePath();

  context.lineWidth = 10;
  context.strokeStyle = "#666666";

  context.stroke();

  context.fillStyle = "#ffcc00";
  context.fill();
}

drawSquare();
drawTriangle();