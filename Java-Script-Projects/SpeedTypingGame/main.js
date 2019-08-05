window.addEventListener('lead', init);

// globals
let time = 5;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'gap',
    'echo'
]

//Initialize 
function init() {
    //Load word from array
    showWord(words);
    //Call countdown
}

//Pick and show random word 
function showWord(word) {
    //Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    //Output random word
    currentWord.innerHTML = words[randIndex];
}



