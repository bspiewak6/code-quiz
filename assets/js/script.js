var timerClock = document.getElementById("timer");
var startBtn = document.getElementById("start");
var quizContainer = document.getElementById("quiz-container")
var answerList = document.getElementById("answer");
var result = document.getElementById("result");

var currentQuestion = 0;
var scoreCounter = 75;
var timeLeft = 75;
var highScore = 0
var interval



// create array for questions, choices and answers
var questions = [
    {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<js>", "<javascript>", "<script>", "<scripting>"],
    answer: "<script>"
    },
 
    {
    question: "Where is the correct place to insert a JavaScript?",
    choices: ["the <header> section", "both <header> and <body> section", "<body> section", "<footer> section"],
    answer: "<body> section"   
    },
    
    {
    question: "Commonly used data types DO NOT Include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
    },   
    
    {
    question: "The condition in an if/else statement is enclosed with ______",
    choices: ["quotes", "parenthesis", "curly brackets", "square brackets"],
    answer: "parenthesis"
    },

    {
    question: "Arrays in JavaScript can be used to store ______" ,
    choices: ["number and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
    },
];

//  Clicking the "start quiz" button starts the quiz, hides the welcome container, and displays the quiz wrapper

function getQuestion() {
    if(questions[currentQuestion]){
    var question = questions[currentQuestion];
    document.getElementById("question").textContent = question.question;
    answer.innerHTML = "";
    for (var i = 0; i < question.choices.length; i++) {
        var newItem = document.createElement("li");
        newItem.textContent = question.choices[i];
        answer.appendChild(newItem);
        newItem.addEventListener("click", processClick)
    }
}
};

function timer() {
     interval = setInterval(function() {
        if (timeLeft > 0) {
            timerClock.textContent = "Time Left: " + timeLeft;
            timeLeft--; 
        } else {
            clearInterval(interval);
        }
    }, 1000);     
};

function processClick() {
    // say if question is right or wrong
    result.innerHTML = "";
    var question = questions[currentQuestion];
    if (questions[currentQuestion] && currentQuestion < 4) {
        correctAlert = document.createElement("p");
    } else if (currentQuestion === 4) {
        correctAlert = document.createElement("p");
        clearInterval(interval);
    }
    
    if (question.answer === this.textContent) {
        correctAlert.textContent = "CORRECT";
        
    } else {
        correctAlert.textContent = "INCORRECT";
        timeLeft = timeLeft - 10;
    }

    result.appendChild(correctAlert);
    currentQuestion++;
    
    getQuestion();  
};


// need to use localStorage to save score which is the time left

// take user to highscore.html for them to write in initials

// save all high scores in localStorage to show on highscore.html page



// event listener to start quiz when user clicks on start button
startBtn.addEventListener("click", getQuestion);
// when user clicks on start button, the timer starts
startBtn.addEventListener("click", timer);


