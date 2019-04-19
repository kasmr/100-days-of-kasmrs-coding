//so here is the usuall concatenation 
const band = 'The prodigy';
const song = 'Smake my bitch up';
const year = 1998;

let result = 'The most popular song in England is ' + song + 'performed by not the less popular band ' + band + ' which was released in ' + year;
console.log(result);

//and here is much more efficient way to write the same thing

let result = 'The most popular song in England is ${song} performed by not the less popular band ${band} which was released in ${year}';
console.log(result);