//1)Regular Expressions: Match Anything with Wildcard Period

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

//2)Regular Expressions: Match Single Character with Multiple Possibilities

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

//3)Regular Expressions: Match Letters of the Alphabet

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

//4)Regular Expressions: Match Numbers and Letters of the Alphabet

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s,2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line

//5)Regular Expressions: Match Single Characters Not Specified

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-99]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line

//6)Regular Expressions: Match Characters that Occur One or More Times

let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);

//7)Regular Expressions: Match Characters that Occur Zero or More Times

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);