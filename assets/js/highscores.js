// this .js file will control the high scores page of the game

// function to generate the high scores
// pull them out of localStorage
// append to page below the High Scores header

function highScores() {

var highScoreKeys = Object.keys(localStorage);

for (var i = 0; i < highScoreKeys.length; i++) {
    var hsKey = highScoreKeys[i];
    //console.log(hsKey);
    var hsValue = localStorage.getItem(hsKey);
    //console.log(hsValue);
    
    var para = document.createElement("p");
    var t = document.createTextNode(`${hsKey} : ${hsValue}`);
    para.appendChild(t);

    var list = document.getElementById("score-list");
    list.insertBefore(para, list.childNodes[0]);
} 
};

highScores();

