function hasValue(list, val) {
  for(var i = 0; i < list.length; i++ ) {
    if(list[i] === val) { return true; }
  }
  return false;
}

var letters = ['a','b','c','d'];

console.log( hasValue(letters,'z'))
console.log(letters.includes('z'));

// WITH OBJECTS (this is like a map)

var family = {
  john: true,
  cathy: true,
  zach: true,
  allie: true
}

if ( family["john"] ) { console.log("John is real") }
if ( family["fred"] ) { console.log("Fred is real") }

