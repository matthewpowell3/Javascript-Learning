// Lecture one

// Console.log()

console.log('This program displays text and consists of a single command');

// Data types

/*
Number
Strings
Boolean
*/

// Booleans
let isHoverable = true;
let isClickable = false;

// Strings
let userName = 'Mark';
let birthday = 'Apr 10, 2023';

// Number
let userAge = 14;
let workTimes = 2 + ' years';

// Variable

/* Examples
let greeting = 'Hello, world!';
let salary = 100000;
let isWinning = true;
 */

let car = 'MarkX';
let time = '6:00PM';

// Redefining

/* Examples
let greeting = 'Hello, world!';
greeting = 'Hi';
console.log(greeting);
*/

// Multiple variables to point to the same value.

/* Examples
let salary = 100;
let oldSalary = salary;
// both variables point to the same value
console.log(salary); // 100
console.log(oldSalary); // 100
salary = 200000;
// salary is 200000 and oldSalary is 100!
console.log(salary); // 200000
console.log(oldSalary); // 100
*/

let name = 'Matthew';
let newName = name;

console.log(name);
console.log(newName);

name = 'John';

console.log(name);
console.log(newName);

// There are 2 ways to get an empty box variable:

let amount;

let height = null;

// OR

let length = undefined;

// Lecture two

// Export and bigger projects

/* There may not be a limitation, but as the codebase of the program grows, the more important the structure becomes. Most projects are created by teams of programmers. If all development took place in one file, their life would be hell.

In the last lecture, we looked at constants. Very often there are situations when a constant needs to be used in several places. To make that happen and avoid code duplication, we usually create a separate file, for example, constants.js, initialize constants there, and export them for use in other project files. */

// importing

/*Please note that the path can be absolute or relative.

An absolute path starts at the root of the / filesystem on UNIX-like systems and is rarely used to import constants in javascript.

A relative path usually starts with . or .. and includes only part of an absolute path.

. - means that the file search should be started from the current directory

.. - the file search will start one directory higher than the current one*/

import { monthsSalary, isHappy } from './constants.js';

console.log(`My months salary is $${monthsSalary}`);
console.log(`I am happy and that is ${isHappy}`);

// My Try

import { isActive, driverAge } from './constants.js';

console.log(`Is this button active ${isActive}`);
console.log(`What is the dirvers age answer:${driverAge}`);