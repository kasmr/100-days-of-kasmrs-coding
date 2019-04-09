//Today at the day #2 i've been studying java script on freecodecamp.com! Just on the basics right now, let's go not to just basics!:)

//Concatenating Strings with Plus Operator

var myStr = 'This is the start.' + ' This is the end.';

//Concatenating Strings with the Plus Equals Operator

var myStr = 'This is the first sentence. ';
myStr += 'This is the second sentence.';

//Constructing Strings with Variables

var myName = "Alik";
var myStr = "My name is" + myName + " and I am well!";

//Appending Variables to Strings

var someAdjective = "fun!";
var myStr = "Learning to code is ";
myStr += someAdjective; 

//that was it for that day 2

//at a day 3 i continued to explore java scrtipt on freecodecamp.com

//Basic JavaScript: Find the Length of a String


var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;

//Basic JavaScript: Use Bracket Notation to Find the First Character in a String
// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName  = lastName[0];

//Basic JavaScript: Understand String Immutability
// Setup
var myStr = "Jello World";

myStr = "Hello World"; 

//Basic JavaScript: Use Bracket Notation to Find the 1th Character in a String

// Setup
var lastName = "Lovelace";

var thirdLetterOfLastName = lastName[2];

//Basic JavaScript: Use Bracket Notation to Find the Last Character in a String
//Setup
var lastName = "Lovelace";

var lastLetterOfLastName = lastName[lastName.length - 1];

//Basic JavaScript: Use Bracket Notation to Find the Nth-to-Last Character in a String
// Setup
var lastName = "Lovelace";

var secondToLastLetterOfLastName = lastName[lastName.length -2];

//Basic JavaScript: Word Blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Your code below this line
    var result = "My " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + " ";
  
    // Your code above this line
    return result;
  }
  
  // Change the words here to test your function
  wordBlanks("dog", "big", "ran", "quickly");

  // Day 4 here lets get started! :)
  //Basic JavaScript: Store Multiple Values in one Variable using JavaScript Arrays

  var myArray = ["Alik", 23];

  //Basic JavaScript: Nest one Array within Another Array

  var myArray = [["i love sopranos", 1], ["but the best season is", 2]];

  //Basic JavaScript: Access Array Data with Indexes

  // Setup
var myArray = [50,60,70];
var myData = myArray[0];

//Basic JavaScript: Modify Array Data With Indexes

// Setup
var myArray = [18,64,99];
myArray[0] = 45;

//Basic JavaScript: Access Multi-Dimensional Arrays With Indexes
//Using bracket notation select an element from myArray such that myData is equal to 8.
 // Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line.
var myData = myArray[2][1];

//Basic JavaScript: Manipulate Arrays With push()
//Push ["dog", 3] onto the end of the myArray variable.

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
myArray.push(["dog",3]);

//Basic JavaScript: Manipulate Arrays With pop()
//Use the .pop() function to remove the last item from myArray, assigning the "popped off" value to removedFromMyArray

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
var removedFromMyArray = myArray.pop();

// Day 5 here lets go!
//Basic JavaScript: Manipulate Arrays With shift()
//Use the .shift() function to remove the first item from myArray, assigning the "shifted off" value to removedFromMyArray.
 
// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray = myArray.shift();

//Basic JavaScript: Manipulate Arrays With unshift()
//Add ["Paul",35] to the beginning of the myArray variable using unshift().

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35])

//Basic JavaScript: Shopping List
//The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.

var myList = [["onion", 1], ["bread", 1], ["tomatos", 10], ["cucambers", 5], ["sausages", 2]];

//Basic JavaScript: Write Reusable JavaScript with Functions
//Create a function called reusableFunction which prints "Hi World" to the dev console.
//Call the function.

function reusableFunction() {console.log("Hi World");}
reusableFunction();

//Basic JavaScript: Passing Values to Functions with Arguments
//Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
//Call the function with two numbers as arguments.

function functionWithArgs(a, b) {console.log(a+b);}
functionWithArgs(1, 2);
functionWithArgs(7, 9);

//Basic JavaScript: Global Scope and Functions
//Using var, declare a global variable myGlobal outside of any function. Initialize it with a value of 10.
//Inside function fun1, assign 5 to oopsGlobal without using the var keyword.

// Declare your variable here
var myGlobal = 10; 

function fun1() {
  oopsGlobal = 5;
  // Assign 5 to oopsGlobal Here
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//Basic JavaScript: Local Scope and Functions
//Declare a local variable myVar inside myLocalScope. Run the tests and then follow the instructions commented out in the editor.
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "holly molly";
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope

// Now remove the console log line to pass the test

//Basic JavaScript: Global vs. Local Scope in Functions
//Add a local variable to myOutfit function to override the value of outerWear with "sweater".

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";
  
  
  // Only change code above this line
  return outerWear;
}

myOutfit();

//Basic JavaScript: Return a Value from a Function with Return
//Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value. See the last line in the editor for an example of how you can test your timesFive function.

// Example
function minusSeven(num) {
  return num - 7;
}

// Only change code below this line
function timesFive(num) {
  return num * 5;
}
var answer = timesFive(5);

console.log(minusSeven(10));

//Basic JavaScript: Understanding Undefined Value returned from a Function
//Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}


// Only change code above this line
var returnedValue = addFive();

//Basic JavaScript: Assignment with a Returned Value
//Call the processArg function with an argument of 7 and assign its return value to the variable processed.
// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

//Basic JavaScript: Stand in Line
//Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
//Add the number to the end of the array, then remove the first element of the array.
//The nextInLine function should then return the element that was removed.

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var removed = arr.shift();
  
  return removed;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 10)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

//Basic JavaScript: Understanding Boolean Values
//Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked.

function welcomeToBooleans() {

  // Only change code below this line.
  
  return true; // Change this line
  
  // Only change code above this line.
  }
  welcomeToBooleans();

  //Hey it's day 6 continue working on my javascript skills!
  //Basic JavaScript: Use Conditional Logic with If Statements
  //Create an if statement inside the function to return "Yes, that was true" if the parameter wasThatTrue is true and return "No, that was false" otherwise.

  // Setup
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
   // Only change code below this line.
   return "No, that was false";
   
   
   // Only change code above this line.
 
 }
 
 // Change this value to test
 trueOrFalse(true);
 trueOrFalse(false);

 //Basic JavaScript: Comparison with the Equality Operator
//Add the equality operator to the indicated line so that the function will return "Equal" when val is equivalent to 12

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);

//Basic JavaScript: Comparison with the Strict Equality Operator
//Use the strict equality operator in the if statement so the function will return "Equal" when val is strictly equal to 7

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);

//Basic JavaScript: Practice comparing different values
//The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns "Equal" only when the values are strictly equal.

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(20, "20");

//Basic JavaScript: Comparison with the Inequality Operator
//Add the inequality operator != in the if statement so that the function will return "Not Equal" when val is not equivalent to 99

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual("99");

//Basic JavaScript: Comparison with the Strict Inequality Operator
//Add the strict inequality operator to the if statement so the function will return "Not Equal" when val is not strictly equal to 17

function testStrictNotEqual(val) {
  // Only Change Code Below this Line
  
  if (val !== 17) {

  // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);

//Basic JavaScript: Comparison with the Greater Than Operator
//Add the greater than operator to the indicated lines so that the return statements make sense.

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  
  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(10);

//Basic JavaScript: Comparison with the Greater Than Or Equal To Operator
//Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

function testGreaterOrEqual(val) {
  if (val >=21) {  // Change this line
    return "20 or Over";
  }
  
  if (val >=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
testGreaterOrEqual(21);

//Day 7 lets smash this!

//Basic JavaScript: Comparison with the Less Than Operator
//Add the less than operator to the indicated lines so that the return statements make sense.

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }
  
  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
testLessThan(55);

//Basic JavaScript: Comparison with the Less Than Or Equal To Operator
//Add the less than or equal to operator to the indicated lines so that the return statements make sense.

function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }
  
  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

// Change this value to test
testLessOrEqual(10);

//Basic JavaScript: Comparisons with the Logical And Operator
//Combine the two if statements into one statement which will return "Yes" if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return "No".

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
      return "Yes";
    }


  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);

//Basic JavaScript: Comparisons with the Logical Or Operator
//Combine the two if statements into one statement which returns "Outside" if val is not between 10 and 20, inclusive. Otherwise, return "Inside".

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }


  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);

//Basic JavaScript: Introducing Else Statements
//Combine the if statements into a single if/else statement.

function testElse(val) {
  var result = "";
  // Only change code below this line
  
  if (val > 5) {
    result = "Bigger than 5";
  }
  
  else {
    result = "5 or Smaller";
  }
  
  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);

//Basic JavaScript: Introducing Else If Statements
//If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
  
  else if (val < 5) {
    return "Smaller than 5";
  }
  else {
  return "Between 5 and 10";
  }
}

// Change this value to test
testElseIf(7);

//Day 8 right here! just 292 days left to complete the challenge!

//Basic JavaScript: Logical Order in If Else Statements
//Order is important in if, else if statements.

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);

//Basic JavaScript: Chaining If Else Statements
//if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:

function testSize(num) {
  if (num < 5) {
  return "Tiny";
} 
 else if (num < 10) {
 return "Small";
  }
  else if (num <15) {
    return "Medium";
  }
  else if (num < 20) {
  return "Large";
  }
  else if (num >= 20) {
    return "Huge";
  }
  // Only change code above this line
}

// Change this value to test
testSize(7);

//Basic JavaScript: Golf Code

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) {
  return "Hole-in-one!";
  }
  else if (strokes <= (par - 2)) {
    return "Eagle";
  }
  else if (strokes === (par - 1)) {
    return "Birdie";
  }
  else if (strokes === par) {
    return "Par";
  }
  else if (strokes === (par + 1)) {
    return "Bogey";
  }
  else if (strokes === (par + 2)) {
    return "Double Bogey";
  }
  else if (strokes >= (par + 3)) {
    return "Go Home!"
  }
  // Only change code above this line
}

// Change these values to test
golfScore(4, 1 );

//Basic JavaScript: Selecting from Many Options with Switch Statements

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
  }
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
caseInSwitch(1);
 //Well that is it :(

//Hi everyone! Today is a big day...day 9! Enjoy the show!
 //Basic JavaScript: Adding a Default Option in Switch Statements
 //Write a switch statement to set answer for the following conditions:
 
 function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
    answer = "apple"; 
    break;
    case "b":
    answer = "bird";
    break;
    case "c":
    answer = "cat";
    break;
    default:
    answer = "stuff";
    break;
  }

  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
switchOfStuff(1);

//Basic JavaScript: Multiple Identical Options in Switch Statements
//Write a switch statement to set answer for the following ranges:
//1-3 - "Low", 4-6 - "Mid", 7-9 - "High"

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";

  }
  
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
sequentialSizes(1);

//Basic JavaScript: Replacing If Else Chains with Switch
//Change the chained if/else if statements into a switch statement.

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  
switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
    default:
      answer = "";
  }
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
chainToSwitch(7);

//Day 10!

//Basic JavaScript: Returning Boolean Values from Functions
//Fix the function isLess to remove the if/else statements.

function isLess(a, b) {
  // Fix this code
  return a <= b; 
  }

// Change these values to test
isLess(10, 15);

//Day 11! 

/*Basic JavaScript: Counting Cards
You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Output
-3 Hold
5 Bet

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.*/

var count = 0;

function cc(card) {
  // Only change code below this line
  
  
  return "Change Me";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');

//got really stuck wiht this

//Day 11 
//In this example, all the properties are stored as strings, such as - "name", "legs", and "tails". However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:
//Day 12 i have been doing quite a lot of stuff for this two days but my notebook is killing me! it just cant run vs code and chrome at once it crashes instantly! 
//it makes me so angry! fucking lenovo getting cheap everywhere!
//i ve done Record Lesson without any help and so proud of it, but cant post the function feelsbad man, anyway i will continue at my home pc, so the next code you see is the alteration!
//Basic JavaScript: Iterate with JavaScript For Loops
//Use a for loop to work to push the values 1 through 5 onto myArray

var myArray = [];
for (var i=1; i < 6; i++) {
  myArray.push(i);
}
console.log(myArray);

//Basic JavaScript: Iterate Odd Numbers With a For Loop
//Push the odd numbers from 1 through 9 to myArray using a for loop.

var myArray = [];
for (var i=1; i < 10; i+=2) {
  myArray.push(i);
}

//Basic JavaScript: Count Backwards With a For Loop
//Push the odd numbers from 9 through 1 to myArray using a for loop.

var myArray = [];
for (i=9; i > 0; i-=2) {
  myArray.push(i);
}

//Basic JavaScript: Iterate Through an Array with a For Loop
//Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for (var i = 0; i < myArr.length; i++) {
total += myArr[i];
}
console.log(myArr);

//Day 13!

//Basic JavaScript: Nesting For Loops
//Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j=0; j< arr[i].length; j++) {
      product = product * arr[i][j];
    } 
  }

  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);

//Basic JavaScript: Iterate with JavaScript Do...While Loops
//Change the while loop in the code to a do...while loop so that the loop will push the number 10 to myArray, and i will be equal to 11 when your code finishes running.

// Setup
var myArray = [];
var i = 10;

// Only change code below this line.
do {
myArray.push(i);
i++;}
while (i < 5); 
console.log(i);

//Basic JavaScript: Profile Lookup
//Still thinking on this 
//Setup

var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop){
// Only change code below this line
if (name == contacts.firstName) {
  return contacts.lastName;
} else {
  return "No such contact";
}
if (prop == contacts.likes[""]) {
  return contacts.likes[""]
} else {
  return "No such property";
}
}
// Only change code above this line


// Change these values to test your function
lookUpProfile("Akira", "likes");

//Had been thinking of solution for an hour eventually watched on youtube how someone did it and actually started to understand loops

//Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop){
// Only change code below this line
for (var i = 0; i < contacts.length; i++) {
  if ( name === contacts[i].firstName) {
      if ( contacts[i].hasOwnProperty(prop)) {
          return contacts[i][prop];
      }
      else {
          return "No such property";
      }
  } 
}
return "No such contact";
}
// Only change code above this line


// Change these values to test your function
lookUpProfile("Akira", "likes");

//Basic JavaScript: Generate Random Fractions with JavaScript
//Change randomFraction to return a random number instead of returning 0.

function randomFraction() {

  // Only change code below this line.

  return Math.random(1);

  // Only change code above this line.
}