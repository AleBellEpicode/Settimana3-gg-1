/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
/*function area(l1, l2) {
  console.log("Il rettangolo ha un area di:", l1 * l2);
}
area(2, 3);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/*function crazySum(sum1, sum2) {
  if (sum1 === sum2) {
    console.log("I numeri sommati e poi moltiplicati sono", (sum1 + sum2) * 3);
  } else {
    console.log("I numeri sommati sono", sum1 + sum2);
  }
}
crazySum(1, 1);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/*let parameter = -10.1;
function crazyDiff(parameter, diff1) {
  if (parameter > 19) {
    console.log(
      "I numeri sottratti e poi moltiplicati sono",
      Math.abs(parameter - diff1) * 3
    );
  } else {
    console.log("I numeri sottratti sono", Math.abs(parameter - diff1));
  }
}
crazyDiff(parameter, 1);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary(n) {
  if (Number.isInteger(n) && ((n > 20 && n <= 100) || n === 400)) {
    return true;
  }
}
const LaFunzioneevera = boundary(30.2);
console.log(LaFunzioneevera);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
function epify(parole) {
  if (typeof parole === `string` && parole === "EPICODE") {
    return parole;
  } else {
    typeof parole === `string`;
    return "EPICODE" + parole;
  }
}
const companyname = epify("Italia");
console.log(companyname);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/*function check3and7(numcheck) {
  if (Math.sign(numcheck) === 1 && (numcheck % 3 === 0 || numcheck % 7 === 0))
    return true;
  else {
    return false;
  }
}
const checkednumber = check3and7(14);
console.log(checkednumber);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString(reversedstring) {
  if (typeof reversedstring === `string`) {
    return reversedstring.split("").reverse().join("");
  }
}
let reverse = reverseString("EPICODE");
console.log(reverse);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
function upperFirst(string1) {
  const splitstring = string1.split(" ");
  for (let i = 0; i < splitstring.length; i++) {
    splitstring[i] =
      splitstring[i].charAt(0).toUpperCase() + splitstring[i].substring(1);
  }
  return splitstring.join(" ");
}
let upperedWords = upperFirst("Stringa di diverse parole");
console.log(upperedWords);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
function cutString(string) {
  return (deletedchar = string.slice(1, -1));
}
let deletedstring = cutString("Patatalessa");
console.log(deletedstring);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom(n) {
  let randomnumarray = [];
  for (let i = 0; i < n; i++) {
    randomnumarray.push(Math.floor(Math.random() * 11));
  }
  return randomnumarray;
}
let randomnumgen = giveMeRandom(23);
console.log(randomnumgen);
/* SCRIVI QUI LA TUA RISPOSTA */
