let currentPlayer = "X";
let gameBoardMatrix = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
let gameOver = false;

function generateBoard() {
	let game = document.getElementById('game');
	let gameBoard = "";
	for (let i = 0; i < 3; ++i) {
		gameBoard += '<div class="sameLine">';
		for (let j = 0; j < 3; ++j) {
			gameBoard += '<div class="cell" onclick="putXor0('+ i + ', ' + j +')" id="'+ i + j +'"></div>';
		}
		gameBoard += '</div>';
	}
	game.innerHTML = gameBoard;
}

generateBoard();

function putXor0(line, column) {
	if (gameBoardMatrix[line][column] != " " && gameOver == false) {
		alert("Alege altă căsuță, aceasta este ocupată deja.");
	} else if (gameOver == false) {
		gameBoardMatrix[line][column] = currentPlayer;
		document.getElementById('' + line + column).innerHTML = gameBoardMatrix[line][column];
	}
	if (currentPlayer == "X") {
		currentPlayer = "0";
	} else if (currentPlayer == "0") {
		currentPlayer = "X";
	}
	whoWin();
}

function whoWin() {
	if ((gameBoardMatrix[0][0] == "X" && gameBoardMatrix[0][1] == "X" && gameBoardMatrix[0][2] == "X") || (gameBoardMatrix[1][0] == "X" && gameBoardMatrix[1][1] == "X" && gameBoardMatrix[1][2] == "X") || (gameBoardMatrix[2][0] == "X" && gameBoardMatrix[2][1] == "X" && gameBoardMatrix[2][2] == "X") || (gameBoardMatrix[0][0] == "X" && gameBoardMatrix[1][0] == "X" && gameBoardMatrix[2][0] == "X") || (gameBoardMatrix[0][1] == "X" && gameBoardMatrix[1][1] == "X" && gameBoardMatrix[2][1] == "X") || (gameBoardMatrix[0][2] == "X" && gameBoardMatrix[1][2] == "X" && gameBoardMatrix[2][2] == "X") || (gameBoardMatrix[0][0] == "X" && gameBoardMatrix[1][1] == "X" && gameBoardMatrix[2][2] == "X") || (gameBoardMatrix[0][2] == "X" && gameBoardMatrix[1][1] == "X" && gameBoardMatrix[2][0] == "X")) {
		gameOver = true;
		document.getElementById("message").textContent = "X a câștigat!"
		createTheResetButton();
	} else if ((gameBoardMatrix[0][0] == "0" && gameBoardMatrix[0][1] == "0" && gameBoardMatrix[0][2] == "0") || (gameBoardMatrix[1][0] == "0" && gameBoardMatrix[1][1] == "0" && gameBoardMatrix[1][2] == "0") || (gameBoardMatrix[2][0] == "0" && gameBoardMatrix[2][1] == "0" && gameBoardMatrix[2][2] == "0") || (gameBoardMatrix[0][0] == "0" && gameBoardMatrix[1][0] == "0" && gameBoardMatrix[2][0] == "0") || (gameBoardMatrix[0][1] == "0" && gameBoardMatrix[1][1] == "0" && gameBoardMatrix[2][1] == "0") || (gameBoardMatrix[0][2] == "0" && gameBoardMatrix[1][2] == "0" && gameBoardMatrix[2][2] == "0") || (gameBoardMatrix[0][0] == "0" && gameBoardMatrix[1][1] == "0" && gameBoardMatrix[2][2] == "0") || (gameBoardMatrix[0][2] == "0" && gameBoardMatrix[1][1] == "0" && gameBoardMatrix[2][0] == "0")) {
		gameOver = true;
		document.getElementById("message").textContent = "0 a câștigat!"
		createTheResetButton();
	} else if (gameBoardMatrix[0][0] != " " && gameBoardMatrix[0][1] != " " && gameBoardMatrix[0][2] != " " && gameBoardMatrix[1][0] != " " && gameBoardMatrix[1][1] != " " && gameBoardMatrix[1][2] != " " && gameBoardMatrix[2][0] != " " && gameBoardMatrix[2][1] != " " && gameBoardMatrix[2][2] != " ") {
		gameOver = true;
		document.getElementById("message").textContent = "Remiză!"
		createTheResetButton();
	}
}

function resetGame() {
	location.reload();
}

function createTheResetButton() {
	document.getElementsByClassName("resetGame")[0].innerHTML = '<button type="button" id="resetGameButton" class="btn btn-outline-secondary btn-lg px-4" onclick="resetGame();">Joc nou</button>';
}
