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