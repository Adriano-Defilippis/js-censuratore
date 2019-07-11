// - Il software riceve in input un lungo testo e una serie di parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali

var text, textTrim, badwordList;


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

for (var i = 0; i < badwordList.length; i++) {
  badwordList[i] = badwordList[i].toUpperCase();

}


console.log(badwordList);
console.log(text);



// Trasformo il testo inserito in un Array di stringhe, dove ogni stringa è una parole dell'input inserito
textTrim = text.toUpperCase().split(" ");
console.log(textTrim);


//Ciclo all'interno dell'array con il mio testo input splittato
for (var i = 0; i < textTrim.length; i++) {

  // Se nell'array delle parole da censurare, compare un item dell'array creato dal testo spilittato inserito dall'utente,
  // allora questo item viene sostituito con una stringa "xxx"
  if (badwordList.includes(textTrim[i])) {
    textTrim[i] = "xxx";
  }
}

// Restituisco la stringa di testo inserita precedentemente, con una stringa censurata.
// .join(), transforma l'array in una stringa
text = textTrim.join();

//Restituzione dell'array con le parole sostituite e censurate;
console.log(text);
