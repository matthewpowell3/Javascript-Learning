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
let selectedColors = ['red', 'blue'];
// Add to array hard way
selectedColors[2] = 'Pink';
console.log(selectedColors[0]);

// Array length properties how many elements in a array
console.log(selectedColors.length);

// Functions

function greeting(name,lastName) {
  console.log(`How are you ${name} ${lastName}`);
}

greeting("Matthew",'Powell');


// Calculating a value
function square(number) {
  // return this value to who every is calling this function
 return number * number
}
console.log(square(2))

// let oname = prompt("What is your name?");
// let oage = prompt("What is your age?");

// console.log(`Hello, ${oname}. You are ${oage} years old!`);



// let newPromise = new Promise()