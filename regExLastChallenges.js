//1)Restrict Possible Usernames
/*1. The only numbers in the username have to be at the end. There can be zero or more of them at the end.
2. Username letters can be lowercase and uppercase.
3. Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.
*/

let username = "JackOfAllTrades";
let userCheck = /[a-z]{2,}\d*$/i; // curly braces {} to specify the minimal amount of words in search 
let result = userCheck.test(username);

//2)Match Whitespace

let sample = "Space: the final frontier.";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
console.log(result);

//3)Match Non-Whitespace Characters

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

//4)Specify Upper and Lower Number of Matches

let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\s/i; // Change this line
let result = ohRegex.test(ohStr);

//5)Specify Only the Lower Number of Matches

let haStr = "Hazzzzah";
let haRegex = /z{4,}/i; // Change this line
let result = haRegex.test(haStr);
console.log(result);

//6)Specify Exact Number of Matches

let timStr = "Timmmmber";
let timRegex = /tim{4}ber/i; // Change this line
let result = timRegex.test(timStr);

//7)Check for All or None

let favWord = "favorite";
let favRegex = /favou?rite/i; //note: You can think of this ? symbol as saying the previous element is optional
let result = favRegex.test(favWord);

//8)Regular Expressions: Positive and Negative Lookahead

let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);

//Day 31
//9)Reuse Patterns Using Capture Groups
//Using the .match() method on a string will return an array with the string it matches, along with its capture group.

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);

//10)Use Capture Groups to Search and Replace

let huhText = "This sandwich is good.";
let fixRegex = /good/; // Change this line
let replaceText = "okey-dokey"; // Change this line
let result = huhText.replace(fixRegex, replaceText);
console.log(result);

//11)Remove Whitespace from Start and End
//Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
console.log(result);
