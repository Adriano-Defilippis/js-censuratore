// - Il software riceve in input un lungo testo e una serie di parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali


// Funzione per trovare ed eliminare il "." e la ","
function deletePunctuation(word){

  word = word.split("");

  console.log("Parola splittata", word);

};



//Funzione censuratrice di parole proibite
function censuratore(text, badwordList){

    var textTrim;

    //Trasformo tutto in maiuscolo per permettere un facile controllo
    for (var i = 0; i < badwordList.length; i++) {
      badwordList[i] = badwordList[i].toUpperCase();
    }

    console.log("Array delle parole proibite: ", badwordList);
    console.log("Input del testo da controllare " ,text);

    // Trasformo il testo inserito in un Array di stringhe, dove ogni stringa è una parole dell'input inserito
    textTrim = text.toUpperCase().split(" ");
    console.log("Teseto diviso per parola ",textTrim);

    //Ciclo all'interno dell'array con il mio testo input splittato
    for (var i = 0; i < textTrim.length; i++) {

      // Se nell'array delle parole da censurare, compare un item dell'array creato dal testo spilittato inserito dall'utente,
      // allora questo item viene sostituito con una stringa "xxx"
      if (badwordList.includes(textTrim[i])) {

        // deletePunctuation(textTrim[i]);
        textTrim[i] = "xxxxx";
      }
    }

    // Restituisco la stringa di testo inserita precedentemente, con una stringa censurata.
    // .join(), transforma l'array in una stringa
    //.toLowerCase(), rende dinuvo tutta la stringa in minuscolo
    text = textTrim.join(" ").toLowerCase();

    //Restituzione dell'array con le parole sostituite e censurate;
    console.log("Array parole censurate:", text);
};



// Esecuzine del codice
var input, listaProibita;


// Lista Parole da censurare
listaProibita = [
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
input = prompt("inserisci il testo da controllare");



censuratore(input, listaProibita);
