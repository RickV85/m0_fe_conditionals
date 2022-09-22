// This exercise file is a little different from the others you have seen so far. Read carefully!
// Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
// Spend some time changing the variables and running the file to see how the story changes.


var doorChoice = 1;
var bearClothing = "";
var bearChoice = 2;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!";
} else if (bearChoice === 2) {
  "You tell the bear the " + bearClothing + " is too small and it starts to cry!";
} else if (bearChoice === 3) {
  "You run as fast as you can into the next room. It's full of snakes!";
} else {
  "You stay with the bear and become it's best friend!";
}


// Questions
// 1. In English, using technical vocabulary, describe what is happening between lines 12 and 16.
//  If the condition "is doorChoice strictly 1?" then the yet to be defined var bearClothing is "hat", else bearClothing is "scarf".
// 2. What variable has a new value assigned to it after the first if statement executes?
//  "bearClothing" has no value until the first if statment executes.
// 3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
//  If doorChoice === 3, this would result in "bearClothing" = scarf.
// 4. In English, using technical vocabulary, describe what is happening between lines lines 25 and 33.
//  This section is an if statement that gives 4 options for results with else if and else conditions.
//  The variable "bearClothing" value will be inserted in to results for "bearChoice === 1" and "bearChoice === 2" but not if "bearChoice === 3" or any other value for "bearChoice."
// 5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
//  The result will be ""You run as fast as you can into the next room. It's full of snakes!" but it will not be logged to the console.
// 6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
//  The variable bearClothing will be "hat" and that will be reflected in the console logs on lines 18 and 19.
//  The if statement in lines 25 - 33 will result with "You tell the bear the hat is too small and it starts to cry!" but it will not log to the console.
// 7. What is your favorite ending?
//  I like bearChoice === 1 where the bear is friendly!
