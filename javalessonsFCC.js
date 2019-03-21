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