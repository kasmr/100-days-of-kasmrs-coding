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