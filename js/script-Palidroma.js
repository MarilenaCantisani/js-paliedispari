/* Palidroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */


var userWord = prompt("Inserisci una parola");
console.log("Parola utente: ", userWord);

var userWordReverse = isPalidroma(userWord);

if (userWord === userWordReverse) {
    console.log("La parola inserita è palidroma!");
} else {
    console.log("La parola inserita non è palidroma!");
}

function isPalidroma(word) {
    var wordReverse = word.split("").reverse().join("");
    console.log("Parola invertita: ", wordReverse)
    return wordReverse;
}