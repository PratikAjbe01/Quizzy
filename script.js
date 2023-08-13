let question = document.getElementById('question');
let ansA = document.getElementById('a');
let ansB = document.getElementById('b');
let ansC = document.getElementById('c');
let ansD = document.getElementById('d');

let questionArray = ['Question 1: What is the capital of France?', 'Question 2: Which planet is known as the "Red Planet"?', 'Question 3: How many continents are there in the world?', 'Question 4: What is the chemical symbol for gold?', 'Question 5: Who painted the Mona Lisa?'];

function displayQuiz(i) {
  let answerArray = [
    { a: 'London', b: 'Madrid', c: 'Paris', d: 'Rome' },
    { a: 'Venus', b: 'Mars', c: 'Jupiter', d: 'Saturn' },
    { a: '4', b: '5', c: '6', d: '7' },
    { a: 'Go', b: 'Ag', c: 'Au', d: 'AgAu' },
    { a: 'Vincent van Gogh', b: 'Leonardo da Vinci', c: 'Pablo Picasso', d: 'Michelangelo' }
  ];

  question.innerText = questionArray[i];
  ansA.innerText = answerArray[i].a;
  ansB.innerText = answerArray[i].b;
  ansC.innerText = answerArray[i].c;
  ansD.innerText = answerArray[i].d;
}
let wrongAnswer=0;
var i = 0;
let score = 0;
displayQuiz(i);

function checkAnswer(id) {
  let selectedAnswer = document.getElementById(id).innerText;

  if (selectedAnswer === 'Paris' || selectedAnswer === 'Mars' || selectedAnswer === '7' || selectedAnswer === 'Au' || selectedAnswer === 'Leonardo da Vinci') {
    score += 1;
  }else{
wrongAnswer+=1;
  }

  i += 1;

  if (i < questionArray.length) {
    displayQuiz(i);
  } else {
    showScore();
    console.log('Quiz completed. Score:', score);
  }
}
function startAgain(){
  location.reload();
 
}
function showScore(){
let quizblock= document.getElementById('quizblock');
let ScoreHTML = `<div class="ansdiv">
<h2>Final Score :${score}</h2>
<h3> Wrong Answers :${wrongAnswer}</h3>
<h3> Correct Answers :${score}</h3>
<button onClick="startAgain()">Start</button>
</div>`;
quizblock.innerHTML=ScoreHTML;
}