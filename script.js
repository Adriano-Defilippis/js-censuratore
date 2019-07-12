// - Il software riceve in input un lungo testo e una serie di parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali



// Funzione per trovare ed eliminare il "." e la ","
function deletePunctuation(word){

  // Splitto la parola in un array
  word = word.split("");

  console.log("Array diviso per cercare punteggiatura", word);


  for (var i = 0; i < word.length; i++) {

    if(word[i] === ",") {

      word[i] = "";

    }
  }
  word = word.join("");


  console.log("Parola senza la virgola: ", word);

  return word;


};



// Funzione per sostituire ogni carattere con una un parametro che passeremo come stringa alla funzione
function replaceCharacter(word, replaceWhit){
// replaceWhit => un parametro stringa da passare alla funzione come tale

  // Splitto la parola in un array
  word = word.split("");
  console.log("Parola splittata", word);

  for (var i = 0; i < word.length; i++) {

      word[i] = replaceWhit;
  }
  console.log("Array parola con x al posto delle lettere ",word);
  word = word.join("");
  console.log("Stringa Parola con x al posto delle lettere ",word);
  return word;
};



//Funzione censuratrice di parole proibite
function censuratore(text, badwordList){

    var textTrim;
    var contatoreCensura = 0;
    var mediaCensura;


    //Trasformo tutto in maiuscolo per permettere un facile controllo
    for (var i = 0; i < badwordList.length; i++) {
      badwordList[i] = badwordList[i].toUpperCase();
    }

    console.log("Array delle parole proibite: ", badwordList);
    console.log("Input del testo da controllare " ,text);

    // Trasformo il testo inserito in un Array di stringhe, dove ogni stringa è una parole dell'input inserito
    textTrim = text.toUpperCase().split(" ");
    console.log("Testo diviso per parola ",textTrim);


    //Ciclo all'interno dell'array con il mio testo input splittato
    for (var i = 0; i < textTrim.length; i++) {

      // Se nell'array delle parole da censurare, compare un item dell'array creato dal testo spilittato inserito dall'utente,
      // allora questo item viene sostituito con una stringa "x" a seconda della lunghezza della parola
      if (badwordList.includes(textTrim[i])) {

        contatoreCensura = contatoreCensura + 1;
        //Funzione per analizzare la parola e sostituire i caratteri con un valore che passa il programmatore alla funzione
        textTrim[i] = replaceCharacter(textTrim[i], "x");
      }
      mediaCensura = contatoreCensura/textTrim.length;


    }

    // Restituisco la stringa di testo inserita precedentemente, con una stringa censurata.
    // .join(), transforma l'array in una stringa
    //.toLowerCase(), rende dinuvo tutta la stringa in minuscolo
    text = textTrim.join(" ").toLowerCase();

    document.write(text);


    //Restituzione dell'array con le parole sostituite e censurate;
    console.log("Array parole censurate:", text);

    console.log("Numero di parole censurate: ",contatoreCensura);
    console.log("Media delle parole censurate: ",mediaCensura);

};



// Esecuzine del codice
var input, listaProibita, badWordIndex;


// Lista Parole da censurare
listaProibita = [];


// Con il ciclo permetto l'inserimento di 20 parole da ricercare e censuratore
// for (var i = 0; i < 10; i++) {
//   paroleinput = prompt("inserisci una parola da censurare");
//   listaProibita.push(paroleinput);
//
// }

var penetrazion = true;
// Con il ciclo while permetto l'inserimento di parole da ricercare e censuratore, a seconda di quante ne vuole inserire s
while (penetrazion == true) {

   paroleinput = prompt("inserisci una parola da censurare");
   listaProibita.push(paroleinput);
   var ask = prompt("Le parole da censurare sono abbastanza? Y/N");
   if (ask == "y") {
     penetrazion = false;
   }
}

console.log(listaProibita);
// Input per il controllo delle parole da censurare
input = prompt("inserisci il testo da controllare");




censuratore(input, listaProibita);


//Calcolare la media di parole censurate in base al numero di parole da controllare inserite
// console.log(contatoreCensura);
