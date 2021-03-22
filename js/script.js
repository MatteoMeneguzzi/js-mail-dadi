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
	"satoshi_Nakamoto@gmail.com",
];

console.log(accounts);

var question = prompt("Do you remember your email address?").toLowerCase();
console.log(question);

var userFound = false;

for (var i = 0; i < accounts.length; i++) {
	if (accounts[i] === question) {
		userFound = true;
		// document.getElementById("userFound").innerHTML =
		console.log("Utente trovato");
		("Email found! Welcome back, Leo and the president were searching for you!");
	} else {
		userFound = false;
		console.log("Utente trovato");
		// document.getElementById("userFound").innerHTML =
		("Email not found. Get lost, dumb.");
	}
}
