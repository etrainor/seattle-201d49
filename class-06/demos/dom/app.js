'use strict';

var garage = {

  items: ['car', 'bat', 'balls', 'tv'],

  render: function () {

    // Find the ul
    var stuffElement = document.getElementById('stuff');

    for (let i = 0; i < this.items.length; i++) {
      // Add a new element
      var newItem = document.createElement('li');

      // Give that new element text
      newItem.textContent = this.items[i];

      // Add the new element to the ul
      stuffElement.appendChild(newItem);
    }
  }
}



var house = {

  items: ['dishes', 'couch', 'roomba'],

  render: function () {

    // Find the ul
    var stuffElement = document.getElementById('stuff');

    for (let i = 0; i < this.items.length; i++) {
      // Add a new element
      var newItem = document.createElement('li');

      // Give that new element text
      newItem.textContent = this.items[i];

      // Add the new element to the ul
      stuffElement.appendChild(newItem);
    }
  }
}



var pageInitialize = function () {
  house.render();
  garage.render();
}


pageInitialize();



var myNewItem = document.createElement('span');
