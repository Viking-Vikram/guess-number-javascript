"use strict";
// console.log(
// 	(document.querySelector(".message").textContent = "correct answer")
// );
// console.log((document.querySelector(".score").textContent = 10));
// console.log((document.querySelector(".number").textContent = 10));
// console.log((document.querySelector(".guess").value = 22));

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
// document.querySelector(".number").textContent = secretNumber;
const displayMessage = function (message) {
	document.querySelector(".message").textContent = message;
};
const storeScore = function (score) {
	document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
	let guess = Number(document.querySelector(".guess").value);
	if (!guess) {
		displayMessage("No number!");
	} else if (guess === secretNumber) {
		displayMessage("Correct Answer!");
		document.querySelector("body").style.backgroundColor = " #60b347";
		document.querySelector(".number").style.width = "30rem";
		document.querySelector(".number").textContent = secretNumber;

		if (score > highscore) {
			highscore = score;
			document.querySelector(".highscore").textContent = highscore;
		}
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber ? "Too High" : "Too Low");
			score--;
			storeScore(score);
		} else {
			displayMessage("You lost the game.");
			storeScore(0);
		}
	}
	// } else if (guess < secretNumber) {
	// 	if (score > 1) {
	// 		document.querySelector(".message").textContent = "Too Low";
	// 		score--;
	// 		document.querySelector(".score").textContent = score;
	// 	} else {
	// 		document.querySelector(".score").textContent = 0;
	// 		document.querySelector(".message").textContent = "You lost the game";
	// 	}
	// }
});
document.querySelector(".again").addEventListener("click", function () {
	score = 20;
	storeScore(score);
	secretNumber = Math.trunc(Math.random() * 20 + 1);
	// document.querySelector(".number").textContent = secretNumber;
	document.querySelector(".number").textContent = "?";
	displayMessage("Starting guessing...");
	document.querySelector(".number").style.width = "15rem";
	document.querySelector(".guess").value = "";
	document.querySelector("body").style.backgroundColor = "#222";
});
