//Basic Data Structures: Copy an Array with the Spread Operator
//before
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line

    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));
//should return copyMachine([true, false, true], 2)should return [[true, false, true], [true, false, true]]
//after
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line
    newArr.push([...arr]);
    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));

// Basic Data Structures: Combine Arrays with the Spread Operator
// Another huge advantage of the spread operator, is the ability to combine arrays, or to insert all the elements of one array into another, at any index. With more traditional syntaxes, we can concatenate arrays, but this only allows us to combine arrays at the end of one, and at the start of another. Spread syntax makes the following operation extremely simple:

// let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
// let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];

// // thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']
// Using spread syntax, we have just achieved an operation that would have been more complex and more verbose had we used traditional methods.
// We have defined a function spreadOutthat returns the variable sentence, modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].

function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"]; // change this line
  return sentence;
}

// do not change code below this line
console.log(spreadOut());

// Basic Data Structures: Check For The Presence of an Element With indexOf()
// Since arrays can be changed, or mutated, at any time, there's no guarantee about where a particular piece of data will be on a given array, or if that element even still exists. Luckily, JavaScript provides us with another built-in method, indexOf(), that allows us to quickly and easily check for the presence of an element on an array. indexOf()takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1if the element does not exist on the array.

// For example:

// let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

// fruits.indexOf('dates') // returns -1
// fruits.indexOf('oranges') // returns 2
// fruits.indexOf('pears') // returns 1, the first index at which the element exists

// indexOf()can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the function using indexOf()so that it returns tru eif the passed element exists on the array, and false if it does not.

function quickCheck(arr, elem) {
  // change code below this line
  if (arr.indexOf(elem) === -1) {
    return false;
  } else {
    return true;
  }
  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(["squash", "onions", "shallots"], 125));

Basic Data Structures: Iterate Through All an Array's Items Using For Loops
Sometimes when working with arrays, it is very handy to be able to iterate through each item to find one or more elements that we might need, or to manipulate an array based on which data items meet a certain set of criteria. JavaScript offers several built in methods that each iterate over arrays in slightly different ways to achieve different results (such as every(), forEach(), map(), etc.), however the technique which is most flexible and offers us the greatest amount of control is a simple forloop.

Consider the following:

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// returns [12, 14, 80]

// Basic Data Structures: Iterate Through All an Array's Items Using For Loops
// Sometimes when working with arrays, it is very handy to be able to iterate through each item to find one or more elements that we might need, or to manipulate an array based on which data items meet a certain set of criteria. JavaScript offers several built in methods that each iterate over arrays in slightly different ways to achieve different results (such as every(), forEach(), map(), etc.), however the technique which is most flexible and offers us the greatest amount of control is a simple forloop.

// Consider the following:

// function greaterThanTen(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 10) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// // returns [12, 14, 80]

// Using a forloop, this function iterates through and accesses each element of the array, and subjects it to a simple test that we have created. In this way, we have easily and programmatically determined which data items are greater than 10, and returned a new array containing those items.
// We have defined a function, filteredArray, which takes arr, a nested array, and elemas arguments, and returns a new array. elemrepresents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a forloop, to return a filtered version of the passed array such that any array nested within arrcontaining elemhas been removed.

function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
  for (let i=0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) === -1) {
      newArr.push(arr[i]);
    }
  }
    // change code above this line
    return newArr;
  }
  
  // change code here to test different cases:
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

//   Basic Data Structures: Create complex multi-dimensional arrays
// Awesome! You have just learned a ton about arrays! This has been a fairly high level overview, and there is plenty more to learn about working with arrays, much of which you will see in later sections. But before moving on to looking at Objects, lets take one more look, and see how arrays can become a bit more complex than what we have seen in previous challenges.

// One of the most powerful features when thinking of arrays as data structures, is that arrays can contain, or even be completely made up of other arrays. We have seen arrays that contain arrays in previous challenges, but fairly simple ones. However, arrays can contain an infinite depth of arrays that can contain other arrays, each with their own arbitrary levels of depth, and so on. In this way, an array can very quickly become very complex data structure, known as a multi-dimensional, or nested array. Consider the following example:

// let nestedArray = [ // top, or first level - the outer most array
//   ['deep'], // an array within an array, 2 levels of depth
//   [
//     ['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
//   ],
//   [
//     [
//       ['deepest'], ['deepest'] // 2 arrays nested 4 levels deep
//     ],
//     [
//       [
//         ['deepest-est?'] // an array nested 5 levels deep
//       ]
//     ]
//   ]
// ];
// While this example may seem convoluted, this level of complexity is not unheard of, or even unusual, when dealing with large amounts of data.

// However, we can still very easily access the deepest levels of an array this complex with bracket notation:

// console.log(nestedArray[2][1][0][0][0]);
// // logs: deepest-est?
// And now that we know where that piece of data is, we can reset it if we need to:

// nestedArray[2][1][0][0][0] = 'deeper still';

// console.log(nestedArray[2][1][0][0][0]);
// // now logs: deeper still

// We have defined a variable, myNestedArray, set equal to an array. Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string 'deep', on the fourth level, include the string 'deeper', and on the fifth level, include the string 'deepest'.
  
let myNestedArray = [
    // change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    [['loop', 'shift', 6, 7, 1000, 'method', 'deep']],
    [[['concat', false, true, 'spread', 'array', 'deeper']]],
    [[[['mutate', 1327.98, 'deepest', 'splice', 'slice', 'push'], ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']]]],
    // change code above this line
  ];
  
  
  
  
  
  
  