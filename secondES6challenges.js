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
  