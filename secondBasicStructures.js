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

// Basic Data Structures: Iterate Through All an Array's Items Using For Loops
// Sometimes when working with arrays, it is very handy to be able to iterate through each item to find one or more elements that we might need, or to manipulate an array based on which data items meet a certain set of criteria. JavaScript offers several built in methods that each iterate over arrays in slightly different ways to achieve different results (such as every(), forEach(), map(), etc.), however the technique which is most flexible and offers us the greatest amount of control is a simple forloop.

// Consider the following:

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
  for (let i = 0; i < arr.length; i++) {
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
  ["unshift", false, 1, 2, 3, "complex", "nested"],
  [["loop", "shift", 6, 7, 1000, "method", "deep"]],
  [[["concat", false, true, "spread", "array", "deeper"]]],
  [
    [
      [
        ["mutate", 1327.98, "deepest", "splice", "slice", "push"],
        ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth"]
      ]
    ]
  ]
  // change code above this line
];

// Basic Data Structures: Add Key-Value Pairs to JavaScript Objects
// At their most basic, objects are just collections of key-value pairs, or in other words, pieces of data mapped to unique identifiers that we call properties or keys. Let's take a look at a very simple example:

let FCC_User = {
  username: "awesome_coder",
  followers: 572,
  points: 1741,
  completedProjects: 15
};
// The above code defines an object called FCC_Userthat has four properties, each of which map to a specific value. If we wanted to know the number of followersFCC_Userhas, we can access that property by writing:

let userData = FCC_User.followers;
// userData equals 572
// This is called dot notation. Alternatively, we can also access the property with brackets, like so:

let userData = FCC_User["followers"];
// userData equals 572
// Notice that with bracket notation, we enclosed followersin quotes. This is because the brackets actually allow us to pass a variable in to be evaluated as a property name (hint: keep this in mind for later!). Had we passed followersin without the quotes, the JavaScript engine would have attempted to evaluate it as a variable, and a ReferenceError: followers is not definedwould have been thrown.

// Using the same syntax, we can also add new key-value pairs to objects. We've created a foodsobject with three entries. Add three more entries: bananaswith a value of 13, grapeswith a value of 35, and strawberrieswith a value of 27.

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// change code below this line
foods["bananas"] = 13;
foods["grapes"] = 35;
foods["strawberries"] = 27;
// change code above this line

console.log(foods);

// Basic Data Structures: Modify an Object Nested Within an Object
// Now let's take a look at a slightly more complex object. Object properties can be nested to an arbitrary depth, and their values can be any type of data supported by JavaScript, including arrays and even other objects. Consider the following:

let nestedObject = {
  id: 28802695164,
  date: "December 31, 2016",
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13
    }
  }
};
// nestedObjecthas three unique keys: id, whose value is a number, datewhose value is a string, and data, whose value is an object which has yet another object nested within it. While structures can quickly become complex, we can still use the same notations to access the information we need.

// Here we've defined an object, userActivity, which includes another object nested within it. You can modify properties on this nested object in the same way you modified properties in the last challenge. Set the value of the onlinekey to 45.

let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42
  }
};

// change code below this line
userActivity.data.online = 45;
// change code above this line

console.log(userActivity);

// Basic Data Structures: Access Property Names with Bracket Notation
// In the first object challenge we mentioned the use of bracket notation as a way to access property values using the evaluation of a variable. For instance, imagine that our foodsobject is being used in a program for a supermarket cash register. We have some function that sets the selectedFoodand we want to check our foodsobject for the presence of that food. This might look like:

let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];
// This code will evaluate the value stored in the selectedFoodvariable and return the value of that key in the foodsobject, or undefinedif it is not present. Bracket notation is very useful because sometimes object properties are not known before runtime or we need to access them in a more dynamic way.
// We've defined a function, checkInventory, which receives a scanned item as an argument. Return the current value of the scannedItemkey in the foodsobject. You can assume that only valid keys will be provided as an argument to checkInventory.

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
// do not change code above this line

function checkInventory(scannedItem) {
  // change code below this line
  return foods[scannedItem];
}

// change code below this line to test different cases:
console.log(checkInventory("apples"));

// Basic Data Structures: Use the delete Keyword to Remove Object Properties
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// change code below this line
delete foods.plums;
delete foods.oranges;
delete foods.strawberries;
// change code above this line

console.log(foods);

// Basic Data Structures: Check if an Object has a Property
// Now we can add, modify, and remove keys from objects. But what if we just wanted to know if an object has a specific property? JavaScript provides us with two different ways to do this. One uses the hasOwnProperty()method and the other uses the inkeyword. If we have an object userswith a property of Alan, we could check for its presence in either of the following ways:

users.hasOwnProperty("Alan");
"Alan" in users;
// both return true

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // change code below this line
  if (users.hasOwnProperty("Alan", "Jeff", "Sarah", "Ryan")) {
    return true;
  } else {
    return false;
  }
  // change code above this line
}

console.log(isEveryoneHere(users));

//#2
function isEveryoneHere(obj) {
  // change code below this line
  if (("Alan", "Jeff", "Sarah", "Ryan" in users)) {
    return true;
  } else {
    return false;
  }
  // change code above this line
}

// Basic Data Structures: Iterate Through the Keys of an Object with a for...in Statement
// Sometimes you may need to iterate through all the keys within an object. This requires a specific syntax in JavaScript called a for...in statement. For our usersobject, this could look like:

for (let user in users) {
  console.log(user);
}

// logs:
Alan;
Jeff;
Sarah;
Ryan;
// In this statement, we defined a variable user, and as you can see, this variable was reset during each iteration to each of the object's keys as the statement looped through the object, resulting in each user's name being printed to the console.
// NOTE:
// Objects do not maintain an ordering to stored keys like arrays do; thus a keys position on an object, or the relative order in which it appears, is irrelevant when referencing or accessing that key.
// We've defined a function, countOnline; use a for...in statement within this function to loop through the users in the usersobject and return the number of users whose onlineproperty is set to true.

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  // change code below this line
  var count = 0;
  for (let name in users) {
    if (users[name].online === true) {
      count++;
    }
  }
  return count;
  // change code above this line
}

console.log(countOnline(users));

// Basic Data Structures: Generate an Array of All Object Keys with Object.keys()
// We can also generate an array which contains all the keys stored in an object using the Object.keys()method and passing in an object as the argument. This will return an array with strings representing each property in the object. Again, there will be no specific order to the entries in the array.
// Finish writing the getArrayOfUsersfunction so that it returns an array containing all the properties in the object it receives as an argument.

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // change code below this line
  return Object.keys(obj);
  // change code above this line
}

console.log(getArrayOfUsers(users));
