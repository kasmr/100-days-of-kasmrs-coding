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

