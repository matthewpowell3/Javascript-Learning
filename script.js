// declare a variable
// redefining a variable
let myName;
myName = 'Matthew';
console.log(myName);

// const are not redefinable
const name = 'John';
/*
Can't Work
name = "Mark"
*/
console.log(name);

const Name = 'Matthew';
const age = 12;
const isHoverable = true / false;
const noValue = undefined;
// Null is used when you want to clear a variable
const selectedColor = null;

// Objects

// Right way to group things
const person = {
  myRealName: 'Matthew',
  myRealAge: 14,
};

// Dot Notation

person.myRealName = 'Mark';

console.log(person.myRealName);

// Bracket Notation

person['myRealAge'] = 13;

console.log(person['myRealAge']);

// Wrong way to group things
let myRealName = 'Matthew';
let myRealAge = 14;

// Array

// Empty Array
let selectedColors = ['red','blue'];
console.log(selectedColors[0])
