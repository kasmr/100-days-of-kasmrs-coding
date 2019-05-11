Day #16
Started ES6 first challenge: difference between var and let

https://github.com/kasmr/100-days-of-kasmrs-coding/commit/6dd6a6cec936a94fbe3941b718ee8c972cc0b70c

Day #17 Today i've learned:
1) Compare Scopes of the var and let Keywords
2) How to declare a variable with const keyword (Note: A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.)
3) How to mutate an Array Declared with const
4) How to Prevent Object Mutation (Note Object.freeze
5) How to Use Arrow Functions to Write Concise Anonymous Functions (Note: const myFunc = () => "value")
6) How to Write Arrow Functions with Parameters (Note: const doubler = (item) => item * 2;)
7) How to Write Higher Order Arrow Functions (Note: to make the code more succinct)
8) How to Set Default Parameters for Your Functions

https://github.com/kasmr/100-days-of-kasmrs-coding/blob/ef7b6a83fbdf0ec4bc912a0a1a02695933e04570/firstES6challenges.js

Day #18 
Today i've been watching javascript video courses by TheNetNinja and he showed there that right now it s much better to use 'template string way' instead of 'concatenation'.
Also a lot of methods such as indexOf, length, slice, concat, push and others. 

Day #19
Today i've learned High order functions & arrays, big thank you to Traversy media for that, now i understand it. Here is my code: 
https://github.com/kasmr/100-days-of-kasmrs-coding/commit/f1a80373dbe96fba7fee06943ce7d9c7c7c15598

Day #20 
Today i've been learning on freecodecamp, here is the list:
1)The spread syntax (rest operator), i ve got really confused with this one, thanks to net ninja for explanation: Example

This code

const product = (function() {
	"use strict";
	return function product(n1, n2, n3) {
		const args = [n1, n2, n3];
		return args.reduce((a, b) => a * b, 1);
	};
})();
console.log(product(2, 4, 6));//48
Can be written as such

const product = (function() {
	"use strict";
	return function product(...n) {		
		return n.reduce((a, b) => a * b, 1);
	};
})();
console.log(product(2, 4, 6));//48

2)The use  of the Spread Operator to Evaluate Arrays In-Place
3)The use  of Destructuring Assignment to Assign Variables from Objects, after this challenge i fucking hate freecodecamp!!!! trigered!!!!

freecodecamp is very annoying, video courses are much better!

Day #21 here. I continued doing freecodecamp challenges still : 
1)ES6: Use Destructuring Assignment to Assign Variables from Nested Objects
funny thing huh? cant make this challenges, they get me triggered, went to learn by video courses by traversy media!

Day #22. I always get started with freecodecamp challenges and always it makes me triggered, but still......
1)Destructuring Assignment with the Rest Operator to Reassign Array Elements
2)Use Destructuring Assignment to Pass an Object as a Function's Parameters
3)Create Strings using Template Literals
4)Write Concise Object Literal Declarations Using Simple Fields
5)Write Concise Declarative Functions with ES6
6)Use class Syntax to Define a Constructor Function

https://github.com/kasmr/100-days-of-kasmrs-coding/blob/master/secondES6challenges.js

After i went to netNinja for his javascript course 

Day #23. The first thing i've done is i watched the netNinja video course about js functions. 

Then i went to freecodecamp to practise ES6
1)Use getters and setters to Control Access to an Object

https://github.com/kasmr/100-days-of-kasmrs-coding/blob/master/secondES6challenges.js

Also  i've done video course with netNinja about functions 

https://github.com/kasmr/100-days-of-kasmrs-coding/blob/master/functionsWithNetNinja.js

Day #24.
1)Understand the Differences Between import and require
2)Use export to Reuse a Code Block
3)Use * to Import Everything from a File
4)Create an Export Fallback with export default (Note: Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const)
5)Import a Default Export (Note: The syntax differs in one key place - the imported value, add, is not surrounded by curly braces, {}. Unlike exported values, the primary method of importing a default export is to simply write the value's name after import.)

https://github.com/kasmr/100-days-of-kasmrs-coding/blob/master/secondES6challenges.js

Well, that was it. I've completed all ES6 chfallenges on freeCodeCamp. The next stoppage is RegEx. 

1)Regular Expressions: Using the Test Method
2)Regular Expressions: Match Literal Strings
3)Regular Expressions: Match a Literal String with Different Possibilities
4)Regular Expressions: Ignore Case While Matching (Note: You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings "ignorecase", "igNoreCase", and "IgnoreCase".)
5)Regular Expressions: Extract Matches (Note: To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.)
6)Regular Expressions: Find More Than the First Match (Note: You can have multiple flags on your regex like /search/gi)

https://github.com/kasmr/100-days-of-kasmrs-coding/blob/master/regExFirstChallenges.js

Day #25
Today i've started continuing RegEx challenges on free code camp:

1)Regular Expressions: Match Anything with Wildcard Period (The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match "hug", "huh", "hut", and "hum", you can use the regex /hu./ to match all four words.)
2)Regular Expressions: Match Single Character with Multiple Possibilities
3)Regular Expressions: Match Letters of the Alphabet (Inside a character set, you can define a range of characters to match using a hyphen character: -.)
4)Regular Expressions: Match Numbers and Letters of the Alphabet
5)Regular Expressions: Match Single Characters Not Specified
6)Regular Expressions: Match Characters that Occur One or More Times (You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.)
7)Regular Expressions: Match Characters that Occur Zero or More Times



Then i went to netNinja video course about objects.
