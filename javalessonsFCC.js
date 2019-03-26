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