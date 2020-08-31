// all global variables
var timerClock = document.getElementById("timer");
var startBtn = document.getElementById("start");
var answerList = document.getElementById("answer");
var result = document.getElementById("result");
var welcome = document.getElementById("welcome-container");
var quiz = document.getElementById("quiz-container");
var saveBtn = document.getElementById("save");
var finalScore = document.getElementById("score");
var initialsEl = document.querySelector("#contact-name");

var currentQuestion = 0;
var scoreCounter = 75;
var timeLeft = 75;
var highScore = 0
var interval



// array for questions, choices and answers
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
//  Hide form until after quiz is completed
document.getElementById("form").setAttribute("class", "hide")


//  Function to start the quiz and get the array of questions to run
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
            timeLeft--; 
            timerClock.textContent = "Time Left: " + timeLeft;
        } else {
            clearInterval(interval);
        }
    }, 1000);     
};

function processClick() {
    // say if question is right or wrong
    result.innerHTML = "";
    var question = questions[currentQuestion];
    correctAlert = document.createElement("p");

    if (question.answer === this.textContent) {
        correctAlert.textContent = "CORRECT";
        
    } else {
        correctAlert.textContent = "INCORRECT";
        timeLeft = timeLeft - 10;
    }

    result.appendChild(correctAlert);
    currentQuestion++;

    if (currentQuestion === questions.length) {
        // endGame();
        // we're waiting for the DOM to update the accurate score
        setTimeout(endGame, 1000);

    } else {
        getQuestion();
    }
    
    getQuestion();  
};

// create a function that ends the game
function endGame() {


// clear the questions area // hide the quiz-container div and result div
document.getElementById("quiz-container").setAttribute("class", "hide")
document.getElementById("result").setAttribute("class", "hide")

// show user their score and unhide the form to enter initials 
finalScore.textContent = "Your final score is: " + timeLeft;
clearInterval(interval);
document.getElementById("form").setAttribute("class", "block")

};

function saveHighScore(e) {
    e.preventDefault();
    var initials = initialsEl.value.trim();
    localStorage.setItem(initials, timeLeft);
    window.location="./highscores.html";
};

// take the user to the high scores page to show all localStorage names and scores



// event listener to start quiz when user clicks on start button
startBtn.addEventListener("click", getQuestion);

// when user clicks on start button, the timer starts
startBtn.addEventListener("click", timer);

// when the user clicks on save button, the initials are put in localStorage
saveBtn.addEventListener("click", saveHighScore);






