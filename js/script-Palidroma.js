/* Palidroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

var wordChosenElement = document.getElementById("wordChosen");
var buttonChecksElement = document.getElementById("buttonChecks");
var resultVerificationElement = document.getElementById("resultVerification");


var userWord = prompt("Inserisci una parola");
console.log("Parola utente: ", userWord);

while (!userWord) {
    userWord = prompt("Inserisci una parola");
    wordChosenElement.innerText = userWord;
}
wordChosenElement.innerText = "La parola scelta è: " + userWord;

buttonChecksElement.classList.remove("d-none");

buttonChecksElement.addEventListener("click", function () {
    var userWordReverse = isPalidroma(userWord);

    if (userWord === userWordReverse) {
        console.log("La parola inserita è palidroma!");
        resultVerificationElement.innerText = "La parola inserita è palidroma!";
    } else {
        console.log("La parola inserita non è palidroma!");
        resultVerificationElement.innerText = "La parola inserita non è palidroma!";
    }

    function isPalidroma(word) {
        var wordReverse = word.split("").reverse().join("");
        console.log("Parola invertita: ", wordReverse)
        return wordReverse;
    }
});





