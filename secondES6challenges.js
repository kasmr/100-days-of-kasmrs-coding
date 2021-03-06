//so here is the usuall concatenation 
const band = 'The prodigy';
const song = 'Smake my bitch up';
const year = 1998;

let result = 'The most popular song in England is ' + song + 'performed by not the less popular band ' + band + ' which was released in ' + year;
console.log(result);

//and here is much more efficient way to write the same thing

let result = 'The most popular song in England is ${song} performed by not the less popular band ${band} which was released in ${year}';
console.log(result);

//Day 20
//1)Use the Rest Operator with Function Parameters

const sum = (function() {
    "use strict";
    return function sum(...args) {
      return args.reduce((a, b) => a + b, 0);
      
    };
  })();
  console.log(sum(1, 2, 3,)); // 6
  
//2)Use the Spread Operator to Evaluate Arrays In-Place
  
  const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);

//3)Use Destructuring Assignment to Assign Variables from Objects

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
  };
  
  function getTempOfTmrw(avgTemperatures) {
    "use strict";
    // change code below this line
    const {tomorrow: tempOfTomorrow} = avgTemperatures; // change this line
    // change code above this line
    return tempOfTomorrow;
  }
  
  console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
  
//Day 21
// 1)ES6: Use Destructuring Assignment to Assign Variables from Nested Objects

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
  const {tomorrow:{ max: maxOfTomorrow}} = forecast ; // change this line
  // change code above this line
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

//Day 22
//1)ES6: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
//Use destructuring assignment with the rest operator to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [a,b, ...arr] = source; // change this
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

//2)ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters
//Use destructuring assignment within the argument to the function half to send only max and min inside the function.

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  return function half ({max, min}) {
    
    // use function argument destructuring
    return (max + min) / 2.0;
  };
  // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015

//3)ES6: Create Strings using Template Literals
//Use template literal syntax with backticks to display each entry of the result object's failure array. Each entry should be wrapped inside an li element with the class attribute text-warning, and listed within the resultDisplayArray.

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray =  [ `<li class="text-warning">${result.failure[0]}</li>`,
    `<li class="text-warning">${result.failure[1]}</li>`, 
    `<li class="text-warning">${result.failure[2]}</li>` ]

  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`, 
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);

//4)ES6: Write Concise Object Literal Declarations Using Simple Fields
//Use simple fields with object literals to create and return a Person object.

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {name, age, gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

//5)ES6: Write Concise Declarative Functions with ES6

// change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

//6)ES6: Use class Syntax to Define a Constructor Function

function makeClass() {
  "use strict";
  /* Alter code below this line */
class Vegetable {
  constructor(name){
    this.name = name;
  }
}
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'

//Day 23
//1)Use getters and setters to Control Access to an Object
/*Use class keyword to create a Thermostat class. The constructor accepts Fahrenheit temperature.
Now create getter and setter in the class, to obtain the temperature in Celsius scale.
Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit scale, and C is the value of the same temperature in Celsius scale
Note
When you implement this, you would be tracking the temperature inside the class in one scale - either Fahrenheit or Celsius.
This is the power of getter or setter - you are creating an API for another user, who would get the correct result, no matter which one you track.
In other words, you are abstracting implementation details from the consumer.
*/

function makeClass() {
  "use strict";
  /* Alter code below this line */
class Thermostat {
  constructor(farenheit) {
    this.farenheit = farenheit;
  }
  get temperature() {
    return 5/9 * (this.farenheit - 32);
  }
  set temperature(celsius) {
    this.farenheit = celsius * 9.0 / 5 + 32;
  }
}
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C

//Day 24 
//1)ES6: Understand the Differences Between import and require
//Add the appropriate import statement that will allow the current file to use the capitalizeString function. The file where this function lives is called "string_functions", and it is in the same directory as the current file.

"use strict";
import { capitalizeString } from "string_functions";

//2)ES6: Use export to Reuse a Code Block
//Below are two variables that I want to make available for other files to use. Utilizing the first way I demonstrated export, export the two variables.

"use strict";
export const foo = "bar";
export const bar = "foo";

//3)ES6: Use * to Import Everything from a File
//The code below requires the contents of a file, "capitalize_strings", found in the same directory as it, imported. Add the appropriate import * statement to the top of the file, using the object provided.

"use strict";
import * as myImport from "capitalize_strings";

//4)Create an Export Fallback with export default

"use strict";
export default function subtract(x,y) {return x - y;}

//5)ES6: Import a Default Export

"use strict";
import subtract from "math_functions";
subtract(7,4);

