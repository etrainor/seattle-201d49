'use strict';

var img = document.getElementById('image-thing');
img.addEventListener('click', getRandoImage);

var images = [
  'assets/baldy1.bmp',
  'assets/baldy2.bmp',
  'assets/baldy3.png',
  'assets/baldy4.bmp',
  'assets/baldy5.png',
  'assets/baldy6.bmp',
  'assets/baldy7.bmp',
];

function getRandoImage() {
  var randomImageIndex = Math.floor(Math.random() * images.length)
  var imageSrc = images[randomImageIndex];
  img.src = imageSrc;
}

getRandoImage();
