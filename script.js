// - Il software riceve in input un lungo testo e una serie di parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali

var text, badwordList;


// Lista Parole da censurare
badwordList = [
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
  "pellentesque",
  "nibh",
  "nunc",
  "consectetur",
  "sodales",
  "at",
  "rutrum",
  "nec",
  "massa",
  "nunc",
  "ullamcorper",
  "vehicula"
]

// Input per il controllo delle parole da censurare
text = prompt("inserisci il testo da controllare");


console.log(badwordList);
console.log(text);



var textTrim;
// Trasformo il testo inserito in un Array di stringhe, dove ogni stringa è una parole dell'input inserito
textTrim = text.split(" ");
console.log(textTrim);
