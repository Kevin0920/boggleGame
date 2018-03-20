// object store all dices

var dice = [
    "aaafrs",
    "aaeeee",
    "aafirs",
    "adennn",
    "aeeeem",
    "aeegmu",
    "aegmnn",
    "afirsy",
    "bjkqxz",
    "ccenst",
    "ceiilt",
    "ceilpt",
    "ceipst",
    "ddhnot",
    "dhhlor",
    "dhlnor",
    "dhlnor",
    "eiiitt",
    "emottt",
    "ensssu",
    "fiprsy",
    "gorrvw",
    "iprrry",
    "nootuw",
    "ooottu",
]

// sum for total point

var sum = 0;
var pointCount = document.querySelector('#total-points');

// get all dice grid 
var allDice = document.querySelector('.dice');

// table query ref 
var table = document.querySelector('#score-table');

// for submit  button 
var submitBtn = document.querySelector('#submit-word');

// get all buttons for placement 
var allDice = document.querySelectorAll('.dice button');

// current clicked word
var showCurWord = document.querySelector('#current-word');

// array to push current word
var currentWord = [];

// random dice create
(function randomDice() {
    // set a variable to let index will 
    var showQu = "Qu";
    for (var i = 0; i < dice.length; i++) {
        // get each dice
        var currentDice = dice[i].toUpperCase().split('');
        // random dice side
        var diceRoll = Math.floor(Math.random() * 6);
        // set dice innerHTML to current charactor
        if (currentDice[diceRoll] === "Q") {
            allDice[i].innerHTML = "Qu";
        }
        else {
            allDice[i].innerHTML = currentDice[diceRoll];
        }
    };
}());

function clickedDice() {
    if (!this.classList.contains('selected')) {
        this.setAttribute("class", "selected");
        currentWord.push(this.innerHTML);
        this.className += " " + "blue";
    }
    else {
        for (let i = currentWord.length; i >= 0; i--) {
            if (currentWord[i] === this.innerHTML) {
                currentWord.splice(i, 1);
            }
        }
    }
    var wordDisplay = currentWord.join('');
    showCurWord.innerHTML = wordDisplay;
    // console.log(currentWord);
}

// click event for selecting 

for (let i = 0; i < allDice.length; i++) {
    allDice[i].addEventListener('click', clickedDice);
}

// after submit clear 
function reset() {
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = currentWord.join('');
    cell2.innerHTML = points;
    pointCount.innerHTML = sum;

    currentWord = [];
    showCurWord.innerHTML = '';
    for (let i = 0; i < allDice.length; i++) {
        allDice[i].removeAttribute('class', 'selected');

    }
}

function calPoints() {
    var x = currentWord.length;
    switch (true) {
        case (x < 3):
            alert("Your word needs to be at least 3 charactors long!");
            break;
        case (x === 3 || x === 4):
            points = 1;
            pointCount += points;
            break;
        case (x === 5):
            points = 2;
            pointCount += points;
            break;
        case (x === 6):
            points = 3;
            pointCount += points;
            break;
        case (x === 7):
            points = 5;
            pointCount += points;
            break;
        case (x > 7):
            points = 11;
            pointCount += points;
            break;
        default:
            points = 0;
    }
    if (x > 2) {
        reset();
    }
};

submitBtn.addEventListener('click', calPoints);

