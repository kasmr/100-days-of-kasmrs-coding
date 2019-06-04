Day #16
Started ES6 first challenge: difference between ```var``` and ```let```

https://github.com/kasmr/100-days-of-kasmrs-coding/commit/6dd6a6cec936a94fbe3941b718ee8c972cc0b70c

Day #17 Today I've learned:
1) Compare Scopes of the ```var``` and ```let``` Keywords
2) How to declare a variable with const keyword (Note: A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.)
3) How to mutate an Array Declared with const
4) How to Prevent Object Mutation (Note ```Object.freeze```
5) How to Use Arrow Functions to Write Concise Anonymous Functions (Note: ```const myFunc = () => "value"```)
6) How to Write Arrow Functions with Parameters (Note: ```const doubler = (item) => item * 2;```)
7) How to Write Higher Order Arrow Functions (Note: to make the code more succinct)
8) How to Set Default Parameters for Your Functions

https://github.com/kasmr/100-days-of-kasmrs-coding/blob/ef7b6a83fbdf0ec4bc912a0a1a02695933e04570/firstES6challenges.js

Day #18 
Today I've been watching javascript video courses by TheNetNinja and he showed there that right now it s much better to use 'template string way' instead of 'concatenation'.
Also a lot of methods such as ```indexOf```, ```length```, ```slice```, ```concat```, ```push``` and others. 

Day #19
Today I've learned High order functions & arrays, big thank you to Traversy media for that, now I understand it. Here is my code: 
https://github.com/kasmr/100-days-of-kasmrs-coding/commit/f1a80373dbe96fba7fee06943ce7d9c7c7c15598

Day #20 
Today I've been learning on freecodecamp, here is the list:
1)The spread syntax (```...``` rest operator), I've got really confused with this one, thanks to net ninja for explanation: Example

This code

```
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
```

2)The use  of the Spread Operator to Evaluate Arrays In-Place
3)The use  of Destructuring Assignment to Assign Variables from ```Objects```, after this challenge I f###ing hate freecodecamp!!!! trigered!!!!

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

After I went to netNinja for his javascript course 

Day #23. The first thing I've done is I watched the netNinja video course about js functions. 

Then I went to freecodecamp to practise ES6
1)Use getters and setters to Control Access to an Object

https://github.com/kasmr/100-days-of-kasmrs-coding/blob/master/secondES6challenges.js

Also  I've done video course with netNinja about functions 

https://github.com/kasmr/100-days-of-kasmrs-coding/blob/master/functionsWithNetNinja.js

Day #24.
1)Understand the Differences Between ```import``` and ```require```
2)Use export to Reuse a Code Block
3)Use ```*``` to ```import``` Everything from a File
4)Create an Export Fallback with ```export default``` (Note: Since ```export default``` is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use ```export default``` with ```var```, ```let```, or ```const```)
5)Import a default export (Note: The syntax differs in one key place - the imported value, add, is not surrounded by curly braces, ```{ }```. Unlike exported values, the primary method of importing a default export is to simply write the value's name after ```import valueName;```.)

https://github.com/kasmr/100-days-of-kasmrs-coding/blob/master/secondES6challenges.js

Well, that was it. I've completed all ES6 chfallenges on freeCodeCamp. The next stoppage is RegEx. 

1)Regular Expressions: Using the Test Method
2)Regular Expressions: Match Literal Strings
3)Regular Expressions: Match a Literal String with Different Possibilities
4)Regular Expressions: Ignore Case While Matching (Note: You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the ```i``` flag. You can use it by appending it to the regex. An example of using this flag is ```/ignorecase/i```. This regex can match the strings "ignorecase", "igNoreCase", and "IgnoreCase".)
5)Regular Expressions: Extract Matches (Note: To use the ```.match()```, apply the method on a string and pass in the regex inside the parentheses.)
6)Regular Expressions: Find More Than the First Match (Note: You can have multiple flags on your regex like ```/search/gi```)

https://github.com/kasmr/100-days-of-kasmrs-coding/blob/master/regExFirstChallenges.js

Day #25
Today I've started continuing RegEx challenges on free code camp:

1)Regular Expressions: Match Anything with Wildcard Period (The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match "hug", "huh", "hut", and "hum", you can use the regex ```/hu./``` to match all four words.)
2)Regular Expressions: Match Single Character with Multiple Possibilities
3)Regular Expressions: Match Letters of the Alphabet (Inside a character set, you can define a range of characters to match using a hyphen character: ```-```.)
4)Regular Expressions: Match Numbers and Letters of the Alphabet
5)Regular Expressions: Match Single Characters Not Specified
6)Regular Expressions: Match Characters that Occur One or More Times (You can use the ```+``` character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.)
7)Regular Expressions: Match Characters that Occur Zero or More Times

https://github.com/kasmr/100-days-of-kasmrs-coding/blob/master/regExSecondChallenges.js

Then I went to netNinja video course about objects.

Day #26 
I've continued to learn about objects with netNinja:
1)Kinds of Math objects and how to use them
2)Difference between reference values and simple values 

https://github.com/kasmr/100-days-of-kasmrs-coding/blob/master/objectsWithNetNinja.js

Then I started to learn about Document Object Model (DOM):
1)```querySelector``` + ```querySelectorAll```
2)```getElementById```
3)```getElemntsByClassName``` (Note: cannot use forEach method)

Day #27 
I'm up to the last part of DOM video course with netNinja. There I've learned about:
1)How to use```getElementByTagName```
2)Property called ```innerText```
3)Property called ```innerHTML```
4)Updating HTML elements with ```getAttribute``` and ```setAttribute``` (changing already existing attributes and even making new!) 

https://github.com/kasmr/100-days-of-kasmrs-coding/blob/master/documentObjectModel.js

Day #28 here!
So today i will finish my javascript lessons with netNinja and to be more accurate DOM lesson.
1)How to add, change or delete ```css``` attributes via javascript 
2)How to add ```classes``` 
3)How to remove ```classes``` 

https://github.com/kasmr/100-days-of-kasmrs-coding/blob/master/documentObjectModel.js

Day #29 
Couldnt finish last lesson because of a challenge at the end, so here we are. Actually did it quiet fast and easy. The funny thing is what to do this challenge i had used ```Regullar Expressions``` i have learned on freecodecamp, that was the first thing what came to my mind and it worked! I felt so happy :) While netNinja used ```include method``` which he didn't explain.



Then i went back to regEx which after challenge seems to be very useful:
1)Find Characters with ```Lazy Matching```
2)The regex ```/z+/``` matches the letter z when it appears one or more times in a row
3)```Match Beginning``` String Patterns
4)```Match Ending``` String Patterns (```shorthand character class```)
5)Match Everything But Letters and Numbers (```shorthand character class \W```)
6)Match All Numbers (```shorthand character class \d``` to count how many digits there are)
7)Match All Non-Numbers (or non-digits using a similar shortcut that uses an uppercase ```\D``` instead)

https://github.com/kasmr/100-days-of-kasmrs-coding/commit/ae0c398ce4a2ac368a1c95cf5887374502430fc3

Day #30
Hope to finish today the regEx challenges and move to debbuging, that must be interesting.
Well, this is what i've learned today:
1)Restrict Possible Usernames
2)Match Whitespace (```s, \s```)
3)Match Non-Whitespace Characters (```S, \S```)
4)Specify Upper and Lower Number of Matches (```quantity specifiers {}```)
5)Specify Only the Lower Number of Matches (```{3,}```)
6)Specify Exact Number of Matches (```{6}```)
7)Check for All or None (```?```)
8)Regular Expressions: Positive (```?=...```) and Negative (```?!...```) Lookahead

https://github.com/kasmr/100-days-of-kasmrs-coding/commit/9d1de78353f3e3102097d8ac049e9cdf924aad3e#diff-297c898081f49f7abc84057533a71e5d

Day #31
Couldnt finish last time, my internet access went down. So i continued from there i stopped, regEx. 
9)Reuse Patterns Using Capture Groups
10)Use Capture Groups to ```Search``` and ```Replace```
11)Remove Whitespace from Start and End (```challenge```)

https://github.com/kasmr/100-days-of-kasmrs-coding/blob/master/regExLastChallenges.js

Well, i've done all the ```regEx``` challenges and now i'm on ```Debugging```
1)Use the JavaScript Console to Check the Value of a Variable

