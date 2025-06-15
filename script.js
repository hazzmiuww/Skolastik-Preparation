const question = document.getElementById('question');
const optionA = document.getElementById('option-a');
const optionB = document.getElementById('option-b');
const trueContainer = document.getElementById('true');
const falseContainer = document.getElementById('false');
const result = document.getElementById('result');
const sum = 0;

//function for displaying the question

const showQuestion = () => {
    let randNumA = Math.floor(Math.random()*20);
    console.log(randNumA);
}

console.log(showQuestion())