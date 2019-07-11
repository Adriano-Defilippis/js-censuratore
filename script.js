// - Il software riceve in input un lungo testo e una serie di parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali

var text, badwordList;

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

text = prompt("inserisci il testo da controllare");


console.log(badwordList);
console.log(text);
