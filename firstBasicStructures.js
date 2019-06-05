//1)Use an Array to Store a Collection of Data

let yourArray = ['string', 1, 5, true, 'ha!']; // change this line

//2) Access an Array's Contents Using Bracket Notation

let myArray = ["a", "b", "c", "d"];
// change code below this line
myArray[1] = "f";
//change code above this line
console.log(myArray);

//3)Add Items to an Array with push() and unshift()
//We have defined a function, mixedNumbers, which we are passing an array as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.

let i = 0;
function mixedNumbers(arr) {
  // change code below this line
for ( i=0 ; i < 1 ; i++) {
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
}
  // change code above this line
  return arr;
}

// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));

//4)Remove Items from an Array with pop() and shift()
//We have defined a function, popShift, which takes an array as an argument and returns a new array. Modify the function, using pop() and shift(), to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.

function popShift(arr) {
    let popped = arr.pop(); // change this line
    let shifted = arr.shift(); // change this line
    return [shifted, popped];
  }
  
  // do not change code below this line
  console.log(popShift(['challenge', 'is', 'not', 'complete']));
  
  //5)Remove Items Using splice()
  //We've defined a function, sumOfTen, which takes an array as an argument and returns the sum of that array's elements. Modify the function, using splice(), so that it returns a value of 10.

  function sumOfTen(arr) {
    // change code below this line
    arr.splice(1,2);
    // change code above this line
    return arr.reduce((a, b) => a + b);
  }
  
  // do not change code below this line
  console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

  //6)Add Items Using splice()
  //We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.
  
  function htmlColorNames(arr) {
    // change code below this line
    arr.splice(0,2, 'DarkSalmon', 'BlanchedAlmond');
    // change code above this line
    return arr;
  } 
   
  // do not change code below this line
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

  //7)Copy Array Items Using slice()
  //We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the elements 'warm' and 'sunny'.

  function forecast(arr) {
    // change code below this line
    let newForecast = arr.slice(2,4);
    return newForecast;
  }
  
  // do not change code below this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));