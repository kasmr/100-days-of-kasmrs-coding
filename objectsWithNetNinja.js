//object Literals
/*
let user = {
    name: 'crystal',
    age: 20,
    email: 'crystal@gmail.com',
    location: 'krasnodar',
    blogs: ['why it is so god dammit good to eat?', 'trying to lose weight with intermittent fasting!'],
    
};
console.log(user);
console.log(user.name);
console.log(user['name']);

const key = 'name'; 
console.log(user[key]);

//typeOf

console.log(typeof user);
*/
//using methods 
//this method

let user = {
    name: 'crystal',
    age: 20,
    email: 'crystal@gmail.com',
    location: 'krasnodar',
    blogs: [ {title:'why it is so god damn good to eat?', likes: 30}, {title:'trying to lose weight with intermittent fasting!', likes: 100}],
    login(){
        console.log('User logged in!');
    },
    logout() {
        console.log('User logged out!');
    },
    logBlogs() {
        console.log('This user wrote the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title , blog.likes);
        })
    }
};
user.logBlogs();

//Day 26
//Math objects

console.log(Math);
console.log(Math.PI);
console.log(Math.E);
const area = 7.7;
console.log(Math.round(area)); //rounds 
console.log(Math.floor(area)); //rounds to loewer
console.log(Math.ceil(area)); //rounds to higher
console.log(Math.trunc(area)); //takes away decimal and leaves integer 

//random numbers 

const random = Math.random();
console.log(random);
console.log(Math.round(random * 100));

//primitive values 

let scoreOne = 10;
let scoreTwo = scoreOne;
console.log(`Score one is ${scoreOne}, Score two is ${scoreTwo}`);
scoreOne = 20;
console.log(`Score one is ${scoreOne}, Score two is ${scoreTwo}`);

//reference values

const user1 = {age: 40, name: 'ryora' };
const user2 = user1;
console.log (user1, user2);

user1.name = 'Mohamed';
user1.age = 'Dead';
console.log (user1, user2);

