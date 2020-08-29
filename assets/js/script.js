var timerClock = document.getElementById('timer');
var quizSelection = document.getElementById('quiz');
var startBtn = document.getElementById('start');
var answerElement = document.getElementById('answer');
var currentQuestion = 0;

// create variable with questions and answrs

var questions = [
    {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<js>", "<javascript>", "<script>", "<scripting>"],
    correct: "<script>"
    },

    
    {
    question: "Where is the correct place to insert a JavaScript?",
    choices: ["the <header> section", "both <header> and <body> section", "<body> section", "<footer> section"],
    correct: "<body> section"
    },
    
    {
    question: "Commonly used data types DO NOT Include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    correct: "booleans"
    },   
    
    {
    question: "The condition in an if/else statement is enclosed with ______",
    choices: ["quotes", "parenthesis", "curly brackets", "square brackets"],
    correct: "parenthesis" 
    },

    {
    question: "Arrays in JavaScript can be used to store ______" ,
    choices: ["number and strings", "other arrays", "booleans", "all of the above"],
    correct: "all of the above"
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
    document.getElementById('question').textContent = question.question;
    answer.innerHTML = "";
    for (var i = 0; i < question.choices.length; i++) {
        var newItem = document.createElement("li"); // create li element and save to a variable
        newItem.textContent = question.choices[i];
        answer.appendChild(newItem);
    }
    
    // make event listener, when this is clicked we're going to get a new question
    newItem.addEventListener("click", processClick)

};

function processClick() {
    // say if it's right or wrong
    // if wrong, subtract 10 seconds from the timer
    // load next question

    currentQuestion++
    getQuestion();
    
}




getQuestion();

// when user clicks on start button, the timer starts
startBtn.addEventListener("click", timer);