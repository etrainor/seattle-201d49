var family = ['John','Cathy','Zach','Allie'];

family.push('Jodi');
// family.push('Rosie');

// y, Y, YES, Yes, yes, YeS, yEs, yeS

console.log(family.length, family);


if(family.length === 4 && family[2] === "Zach") {
  console.log('Get a second job');
} else if ( family.length === 5 ) {
  console.log('Danger, Will Robinson!');
}else {
  console.log("You're Good");
}

// If there are more than 5 people, give advice
