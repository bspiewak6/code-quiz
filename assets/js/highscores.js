function highScores() {

var highScoreKeys = Object.keys(localStorage);

for (var i = 0; i < highScoreKeys.length; i++) {
    var hsKey = highScoreKeys[i];
    console.log(hsKey);
    var hsValue = localStorage.getItem(hsKey);
    console.log(hsValue);
    
    var para = document.createElement("p");
    var t = document.createTextNode("High Scores");
    para.appendChild(t);

    var list = document.getElementById("score-list");
    list.insertBefore(para, list.childNodes[0]);
} 
};

highScores();

// when the user clicks on clear high scores button, the scores go away
