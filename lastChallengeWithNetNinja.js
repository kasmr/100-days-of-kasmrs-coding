//query all p elements 
//cycle through them 
//give any tag a class of error there error word exist
//give any tag a class of success there success word exist

const paras = document.querySelectorAll('p');
console.log(paras);
paras.forEach(text => {
    if (text.innerText.match('error')) {
        text.classList.add('error');
    };
    if (text.innerText.match('success')) {
        text.classList.add('success');
    }
});

