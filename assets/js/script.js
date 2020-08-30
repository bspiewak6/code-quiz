var timerClock = document.getElementById("timer");
var startBtn = document.getElementById("start");
var quizContainer = document.getElementById("quiz-container")
var answerList = document.getElementById("answer");
var result = document.getElementById("result");

var currentQuestion = 0;
var scoreCounter = 75;
var timeLeft = 75;


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
    answer: "booleans"
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
    var question = questions[currentQuestion];
    document.getElementById("question").textContent = question.question;
    answer.innerHTML = "";
    for (var i = 0; i < question.choices.length; i++) {
        var newItem = document.createElement("li");
        newItem.textContent = question.choices[i];
        answer.appendChild(newItem);
        newItem.addEventListener("click", processClick)
    }
};

function timer() {
    var interval = setInterval(function() {
        if (timeLeft > 0) {
            timerClock.textContent = "Time Left: " + timeLeft;
            timeLeft--; 
        } else {
            clearInterval(interval);
            // show highscores.html - run function 
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
    
    // add a timeout before asking the next question
    // 2-3 seconds later, the next question pops up
    // clear the result div (result.innerHTML = "") when asking the new question
    
    getQuestion();  
};

// event listener to start quiz when user clicks on start button
startBtn.addEventListener("click", getQuestion);
// when user clicks on start button, the timer starts
startBtn.addEventListener("click", timer);


// // function for saving highscore
// function saveHighscore() {
//     // get value of input box
//     var initials = initialsEl.value.trim();
  
//     // make sure value wasn't empty
//     if (initials !== "") {
//       // get saved scores from localstorage, or if not any, set to empty array
//       var highscores =
//         JSON.parse(window.localStorage.getItem("highscores")) || [];
  
//       // format new score object for current user
//       var newScore = {
//         score: time,
//         initials: initials
//       };
  
//       // save to localstorage
//       highscores.push(newScore);
//       window.localStorage.setItem("highscores", JSON.stringify(highscores));
  
//       // redirect to next page
//       window.location.href = "highScore.html";
//     }
//   }