var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var win = 0;
var loss = 0;
var guess = 10;

var beginText = document.getElementById("begin");
var winText = document.getElementById("win-text");
var lossText = document.getElementById("loss-text");
var guessText = document.getElementById("guessLeft");

document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    if ((userGuess === computerGuess)) {
        win++;
        guess--;
    } else if ((userGuess !== computerGuess)) {
        loss++;
        guess--;
    }

    if ((guess === 0)) {
        alert("You Lose!");
        win = 0;
        loss = 0;
        guess = 10;
    }

    beginText.textContent = "";
    winText.textContent = "Wins: " + win;
    lossText.textContent = "Losses: " + loss;
    guessText.textContent = "Guesses left: " + guess;

}