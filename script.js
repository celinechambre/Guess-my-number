'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightscore = 0;

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);

// No number entered  
    if(!guess) {
        displayMessage("No number")

// Good guess 
    } else if (guess === secretNumber) {
        displayMessage("Correct number")

        document.querySelector(".number").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = '#60b347';

        document.querySelector(".number").style.width = "30rem";

        if(score > hightscore) {
            hightscore = score;
            document.querySelector(".highscore").textContent = hightscore;
        }

// Wrong guess
    } else if (guess !== secretNumber) {
        if(score > 0) {
            displayMessage(guess > secretNumber ? "Too high" : "Too low");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("You lost") 
        }
    }
});

document.querySelector('.again').addEventListener("click", function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    displayMessage("Start guessing...")
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").textContent = "";

    document.querySelector("body").style.backgroundColor = '#222';
    document.querySelector(".number").style.width = "15rem";
});