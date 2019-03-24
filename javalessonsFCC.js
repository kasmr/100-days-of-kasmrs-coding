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
