var timerClock = document.getElementById('timer');
var quizSelection = document.getElementById('quiz');
var startBtn = document.getElementById('start');
var questionElement = document.getElementById('question');
var answerElement = document.getElementById('answer');
var currentQuestion = 0;


questions[currentQuestion]; // this will show the user questions

// create variable with questions and answrs

var questions = [
    {
    question: "Inside which HTML element do we put the JavaScript?",
    answer: ["<js>", "<javascript>", "<script>", "<scripting>"],
    correct: "answer"
    },

    
    {
    question: "Where is the correct place to insert a JavaScript?",
    answer: ["the <header> section", "both <header> and <body> section", "<body> section", "<footer> section"],
    correct: "answer"
    },
    
    {
    question: "Commonly used data types DO NOT Include:",
    answer: ["strings", "booleans", "alerts", "numbers"],
    correct: "answer"
    },   
    
    {
    question: "The condition in an if/else statement is enclosed with ______",
    answer: ["quotes", "parenthesis", "curly brackets", "square brackets"],
    correct: "answer" 
    },

    {
    question: "Arrays in JavaScript can be used to store ______" ,
    answers: ["number and strings", "other arrays", "booleans", "all of the above"],
    correct: "answer"
    },
];


function timer() {
    var timeLeft = 75;

    var interval = setInterval(function() {
        if (timeLeft > 0) {
            timerClock.textContent = timeLeft;
            timeLeft--; 
        } else {
            clearInterval(interval);
            // displayMessage();
            
            // wrong answer needs to decrease the timer by 10 seconds
            // when time hits 0, bring up screen to save initials and score

        }
    }, 1000);     
};

function getQuestion() {
    var question = questions[currentQuestion];
    questionElement.textContent = question.question
};

startBtn.addEventListener("click", timer);