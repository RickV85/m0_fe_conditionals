// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents)

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false
console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers)

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log("Is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents)

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log("is numberStudents greater than or equal to 20?", numberStudents >= 20)

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log("is numberStudents greater than or equal to 21?", numberStudents >= 21)

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log("is numberStudents less than or equal to 20?", numberStudents <= 20)

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log("is numberStudents less than or equal to 21?", numberStudents <= 21)


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

// Log the console with the results of the comparison: is 4 less that 9?
// This should log: true
console.log(4 < 9);
// YOU DO: Explain.

// Log the console with the result of the comparison: is 4 less than books?
// This should log: false
var books = 3;
console.log(4 < books);
// YOU DO: Explain.

// Log the console with the results of the comparison: is friends greater than siblings?
// This should log: true
var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.

// Log the console with the results of the conditon: is attendees not strictly equal to meals?
// This should log: true
var attendees = 9;
var meals = 8;
console.log(attendees != meals);
// YOU DO: Explain.


// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
// This should log: true
console.log(lovesToPlay && lovesTreats)

// Determine if the dog loves to play and loves the dog park
// This should log: false
console.log(lovesToPlay && lovesDogPark)

// Determine if the dog loves to play or loves the dog park
// This should log: true
console.log(lovesToPlay || lovesDogPark)

// Determine if the dog loves to play and is a puppy
// This should log: true
console.log(lovesToPlay && age < 2);

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: I used the age variable to determine if the dog was a puppy by testing the condition "is the dog less than 2?"
// I combined that age condition with the "lovesToPlay" variable and created the condition saying they must both be true to log: true which was the result.
