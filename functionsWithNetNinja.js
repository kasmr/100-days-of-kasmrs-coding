//functions declaration
//    console.log("Hello!");
function greet() {
    console.log("Hello");
}
greet();

//expressions 
const speak = function() {
    console.log("I wanna talk!");
}
speak();

//arguments and parameters 

const say = function(name = "Antonio", time = "night") {
    console.log(`Good ${time} ${name}`);
}
say("Alik");
//returning values 
/*const calcArea = function(radius) {
    return  result = 3.14 * radius**2;
}
*/

//arrow function 
/*const calcArea = (radius) => {
    return  3.14 * radius**2;  
};
*/

//or 

const calcArea = (radius) => 3.14 * radius**2;

const a = calcArea(5);
console.log("area is", a);

//practise arrow functions 
const hello = () => "hello world!";
const reuslt = hello();
console.log(reuslt);

//before 
/*const bill = function(products, tax) {
    let total = 0;
    for (let i=0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}
*/

//after
const bill = (products, tax) => {
    let total = 0;
    for (let i=0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}
console.log(bill([10,20,30], 0.2));

//forEach
let people = ["Jonh", "Tony", "Chris", "Poly"];
//people.forEach((person, index) => console.log(index, person));

//callBack
const logPerson = (person, index) => {
    console.log(`${index} - ${person}`);
}
people.forEach(logPerson);
