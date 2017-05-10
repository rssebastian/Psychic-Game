

var possChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessCounter = 0;
var userGuess = [];

function create_guess_Array() {
	userGuess[guessCounter] = String.fromCharCode(event.keyCode).toLowerCase();
	guessCounter++;
}
document.onkeyup = function() {
	var ourChoice = String.fromCharCode(event.keyCode).toLowerCase();
	var compChoice = possChoices[Math.floor(Math.random() * possChoices.length)];
	if (ourChoice === compChoice) {
		wins ++;
		guessesLeft = 9;
		guessCounter = 0;
		userGuess = [];
		document.querySelector("#guessesbox").innerHTML = "<center>You Won! New Game!</center>"
		/*document.getElementById("#answerImg").src = "assets/images/joy.jpg";*/
		} else if (possChoices.indexOf(ourChoice) >= 0 && ourChoice !== compChoice) {
			if (userGuess.indexOf(ourChoice) >= 0) {
				alert("You already chose this letter! Try again!");
			} else {
				guessesLeft--;
				create_guess_Array();
				document.querySelector("#guessesbox").innerHTML = "<center>" + userGuess + "</center>"
				/*document.getElementById("#answerImg").src = "assets/images/fear.jpg";*/
			}
			
			if (guessesLeft === 0) {
				guessesLeft = 9;
				losses++;
				guessCounter = 0;
				userGuess = [];
				document.querySelector("#guessesbox").innerHTML = "<center>You Lost! New Game!</center>"
				/*document.getElementById("#answerImg").src = "assets/images/sadness.jpg";*/
			}
		} else {
			/*document.getElementById("#answerImg").src) = "assets/images/anger.jpg"*/
			alert("Please choose a letter key!");
		}
	console.log(wins);
	console.log(losses);
	console.log(guessesLeft);

	document.querySelector("#winbox").innerHTML = "<center>" + wins + "</center>"
	document.querySelector("#countbox").innerHTML = "<center>" + guessesLeft + "</center>"
	document.querySelector("#lossbox").innerHTML = "<center>" + losses + "</center>"
}


/*//1. Wins = 0, Losses = 0, Guesses Left = 9
//2. Computer selects possible choice
//3. On key up, the letter is displayed
//4. If guesses = 0, reset game, change score
//5. If guess = compchoice, +1 win and reset
//6. If guess !== compchoice, -1 Guesses Left
//7. If Guesses Left = 0, +1 loss and reset*/
