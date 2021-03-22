//
//
// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
//
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
//
//

// MAIL

var accounts = [
	"michael.air.jordan23@gmail.com",
	"neil-armstrong@yahoo.com",
	"satoshi_nakamoto@gmail.com",
];

console.log(accounts);

var question = prompt("Do you remember your email address?").toLowerCase();
console.log(question);

var userFound = false;

for (var i = 0; i < accounts.length; i++) {
	if (accounts[i] === question) {
		userFound = true;

		// console.log("Utente trovato");
		document.getElementById("userFound").innerHTML =
			"Email found! Welcome back, Leo and the president were searching for you!";
		break;
	} else {
		// console.log("Utente non trovato");
		document.getElementById("userFound").innerHTML =
			"Email not found. Get lost, dumb.";
	}
}

// Gioco dei dadi

// NUmero random giocatore

var player = Math.floor(Math.random() * 6) + 1;
console.log(player);
// NUmero random giocatore

var computer = Math.floor(Math.random() * 6) + 1;
console.log(computer);
// Stabilire vincitore

var response;

if (player > computer) {
	response = "Hai vinto!";
} else if (player == computer) {
	response = "Pareggio!";
} else {
	response = "Ha vinto il computer :(";
}

document.getElementById("player").innerHTML = "Tu: " + player;
document.getElementById("computer").innerHTML = "Computer: " + computer;
document.getElementById("response").innerHTML = response;
