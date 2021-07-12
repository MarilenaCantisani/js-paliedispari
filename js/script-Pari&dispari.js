/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

//TODO Chiedo all'utente pari o dispari ed un numero da 1 a 5
var userChoice = prompt("Pari o dispari?", "pari");
console.log(userChoice);

var userNumber = prompt("Scegli un numero da 1 a 5", "4");
console.log("Numero scelto dall'utente: ", userNumber);

//TODO Generp un numero random per il computer 
function getRandomNumber(min, max) {
    max++;
    var randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
}

var computerNumber = getRandomNumber(1, 5);
console.log("Numero random: ", computerNumber);


var sum = parseInt(userNumber) + parseInt(computerNumber);
console.log("Somma dei numeri: ", sum);
var evenSum = isEven(sum);
console.log("è pari? ", evenSum)

function isEven(number) {
    var isEven;
    if (sum % 2 === 0) {
        isEven = true;
    } else {
        isEven = false;
    }
    return isEven;
}

if (userChoice === "pari" || evenSum === "true" && userChoice === "dispari" || evenSum === "false") {
    console.log("Hai vinto!");
} else {
    console.log("Hai perso!");
}