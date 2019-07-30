/*
  OBJECTS - DOMAIN MODELING

  - Attributes (NOUN)
    i.e.
      Windshield
      Door
      Tires
      Engine Type
      Color

  - Behavior . (VERB)
    - Warm your butt
    - Move
    - Stop

*/

// ARRAY []

// OBJ {}
// Property:Value
//  "Key/Value Pair"
// this = context
// this.hair.color
//  "this object's ... hair.color"
//  "this is my hair.color"

var sky = "blue";

var zach = {
  color: 'pale',
  hair: {
    color: 'brown',
    type: 'curly',
    texture: 'thick',
    length: 'short'
  }
};

var allie = {
  color: 'pale',
  hair: {
    color: 'black',
    type: 'curly',
    texture: 'thick',
    length: 'long'
  },
  run: function() { console.log('Running Fast'); },
  walk: function() { console.log('Zach will be there later...'); }
};

var john = {
  firstName: 'John',
  lastName: 'Cokos',
  height: '5-9',
  weight: '',
  color: 'pale',
  hair: {
    color: 'white',
    type: 'curly',
    texture: 'thick',
    length: 'long'
  },
  children: [zach,allie], // Extensible
  run: function() { console.log(`Running Fast`); },
  walk: function() { console.log( `${sky} "will be" there's later...`); }
}

var lovelace = {
  temp: 72,
  light: 5,
  dim: function(num) {
    this.light = num;
  },
  heat: function(num) {
    this.temp = num;
  }
}

var turing = {
  temp: 68,
  light: 9,
  dim: function(num) {
    this.light = num;
    this.heat(57);
  },
  heat: function(num) {
    this.temp = num;
  }
}

john.walk();
john.run();

console.log(turing);
turing.dim(5);
console.log(turing);

console.log(JSON.stringify(turing));

