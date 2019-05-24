//1)Query
const para = document.querySelector('div.error');

console.log(para);

const paras = document.querySelectorAll('p');
console.log(paras[0]);

//paras.forEach(paragraphs => {
//    console.log(paragraphs);
//});

const errors = document.querySelectorAll('.error');
console.log(errors);

//2)get element by id

const title = document.getElementById('title-page');
console.log(title);

//3)get element by class

const error = document.getElementsByClassName('error');
console.log(error);
console.log(error[0]);
//error.forEach(error => {
//    console.log(error)});

//Day 27 
//get element by tag name 

const tags = document.getElementsByTagName('p');
console.log(tags);
console.log(tags[1]);

//2)innerText property

//const text = document.querySelector('p');
//console.log(text.innerText);
//text.innerText = 'Javascripts is awseome!';
//text.innerText += ' Javascripts is awseome!';

const newText = document.querySelectorAll('p');
newText.forEach(text => {
    console.log(text.innerText);
    text.innerText += ' new text!';
});

//3)InnerHTML property

//const content = document.querySelector('.content');
//content.innerHTML = '<h2>This is new H2 </h2>';
/*const content = document.querySelector('.content');
const people = ['Alik', 'Jonh', 'Rick'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});
*/
//4)Updating HTML elements with getAttribute and setAttribute
const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.yandex.ru');
link.innerText = "yandex";

//const msg = document.querySelector('p');
//msg.setAttribute('class', 'success');
//msg.setAttribute('style', 'color: red');

//Day 28 
//1)How to add and change css styles 

const css = document.querySelector('h1');
//here we are overwriting color by adding margin
//css.setAttribute('style', 'margin: 100 px;');

//here we don't and also updating the color 
css.style.margin = "50px";
css.style.color = "crimson";
css.style.fontSize = "50px"; //if its two word attribute we use camelcase 

//this how to remove property (empty string) 
css.style.margin = "";

//2)How to add classes 
const contentOfP = document.querySelector('p');
console.log(contentOfP.classList)
contentOfP.classList.add('error');

//How to remove class
contentOfP.classList.remove('error');
contentOfP.classList.add('content'); //and adding new one 
