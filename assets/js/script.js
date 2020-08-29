var timerClock = document.getElementById();
var quizSelection = document.getElementById();
var startBtn = document.getElementById('start');

// create variable with questions and answrs

var questions = [
    {
    q: "Inside which HTML element do we put the JavaScript?",
    answers: {
    a1: "<js>",
    a2: "<javascript>",
    a3: "<script>",
    a4: "<scripting>"
    },

    correctAnswer: "a3"
    },
    
    {
    q: "Where is the correct place to insert a JavaScript?",
    answers: {
    a1: "the <header> section",
    a2: "both <header> and <body> section",
    a3: "<body> section",
    a4: "<footer> section"
    },

    correctAnswer: "a3"
    },
    
    {
    q: "Commonly used data types DO NOT Include:",
    answers: {
    a1: "strings",
    a2: "booleans",
    a3: "alerts",
    a4: "numbers"
    },

    correctAnswer: "a2"
    },    
    
    {
    q: "The condition in an if/else statement is enclosed with ______",
    answers: {
    a1: "quotes",
    a2: "parenthesis",
    a3: "curly brackets",
    a4: "square brackets"
    },

    correctAnswer: "a2"
    },    
    
    {
    q: "Arrays in JavaScript can be used to store ______" ,
    answers: {
    a1: "number and strings",
    a2: "other arrays",
    a3: "booleans",
    a4: "all of the above"
    },

    correctAnswer: "a"
    },

];


function timer() {
    var timeLeft = 75;

    var interval = setInterval(function() {
        if (remainingTime >= 0) {
            timerClock.textContent = remainingTime;
            remainingTime--; 
        } else{
            
        }
    }, 1000);     
};

startBtn.onclick = start();