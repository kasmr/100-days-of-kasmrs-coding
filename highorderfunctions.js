const players = [
    {name: "jose", club: "real", debute: 1998, retired: 2005},
    {name: "onopa", club: "inter", debute: 1994, retired: 2000},
    {name: "guy", club: "zenit" , debute: 1985, retired: 2001},
    {name: "arshavin", club:"cska" , debute: 2011, retired: 2019},
    {name: "venger", club: "spartak", debute: 2000, retired: 2015},
    {name: "virgil", club: "real", debute: 1995, retired: 2004}
    
];

for (let i = 0; i < players.length ; i++) {
    console.log(players[i]);
}

const age = [ 31, 13, 44, 17, 28, 38, 11, 88, 56, 33, 15, 1];
//Use of filter
/* old version
let canDrink = [] ;
for (i=0; i < age.length; i++) {
    if (age[i] >= 18) {
     canDrink.push(age[i]);
    }
}
*/
/* modern version
const canDrink = age.filter(function(age) {
    if (age >= 18) {
        return true;
    }
});
*/

//ES6 version 
const canDrink = age.filter(age => age >= 18);
console.log(canDrink);

//get filter club

const playersClub = players.filter(players => players.club === "real");
console.log(playersClub);

//get players who debuted in 90s
const playersDebute = players.filter(players => (players.debute >= 1990 && players.debute < 2000));
console.log(playersDebute);

//get players that career lasted at least ten years 
const playersLastedTenYears = players.filter(players => (players.retired - players.debute >= 10));
console.log(playersLastedTenYears);

//map 

/*const playersName = players.map(function (players) {
    return players.name;
});
console.log(playersName);
*/

/*const mapTest = players.map(function(players) {
return `${players.name} [${players.debute} - ${players.retired}]`
});
console.log(mapTest);
*/

//ES6 map

const mapTest = players.map(players => `${players.name} [${players.debute} - ${players.retired}]`);
console.log(mapTest);

//more map usage

const ageSquare = age.map(age => Math.sqrt(age) );
console.log(ageSquare);

const ageTimesThree = age.map(age => age * 3);
console.log(ageTimesThree);

//sort 
/*const sortedPlayers = players.sort(function(a, b) {
    if (a.debute > b.debute) {
        return 1;
    }
    else {
        return -1;
    }
})
*/
//sort ES6
const sortedPlayers = players.sort((a, b) => (a.debute > b.debute ? 1 : -1));
console.log(sortedPlayers);

//sort age
const sortedAge = age.sort((a,b) => a - b);
console.log(sortedAge);

//reduce
/* for method
let ageSum = 0;
for (i=0; i < age.length; i++) {
 ageSum += age[i];
}
*/

/*const ageSum = age.reduce(function(total, age) {
    return total + age;
}, 0)
*/
//ES6
const ageSum = age.reduce((total, age) => total + age, 0);
console.log(ageSum);

//reduce of players
/*const playersYearsPlayedInTotal = players.reduce(function(total, players) {
    return total + (players.retired - players.debute)}, 0) ;

*/
//ES6
const playersYearsPlayedInTotal = players.reduce((total, players) => total + (players.retired - players.debute), 0);
console.log(playersYearsPlayedInTotal);

//All of them combined like combiners in Half Life 2 Ha!

const combinedMethods = age
.map (age => age * 2)
.sort(age => 20 )
.reduce((a, b) => a + b, 0 );
console.log(combinedMethods);
