// - Il software riceve in input un lungo testo e una serie di parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali


//funzione accessoria per togliere la punteggiatura da una parola senza usare regex
//accetta una stringa di testo e un array di caratteri
function removeChar(str, characters){
    // ciclo per controllare lettera per lettera
    for (var i = 0; i < str.length; i++) {
      //se trovo corrispondenza con l'array di caratteri rimuovo
       if(characters.indexOf(str[i]) > -1){
         str = str.replace(str[i], '');
       }
    }

  //ritorno la stringa
  return str;
};





// Funzione per sostituire ogni carattere con una un parametro che passeremo come stringa alla funzione
function replaceCharacter(word, replaceWhit){
// replaceWhit => un parametro stringa da passare alla funzione come tale

  // Splitto la parola in un array
  word = word.split("");
  console.log("Parola splittata per sostituzione lettere", word);

  for (var i = 0; i < word.length; i++) {

      word[i] = replaceWhit;
  }
  word = word.join("");
  return word;
};



//Funzione censuratrice di parole proibite
function censuratore(text, badwordList){

    var textTrim;
    var tempStr;
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

    //Ciclo all'interno dell'array con il mio testo input splittato
    for (var i = 0; i < textTrim.length; i++) {

      var badChar = [',','.',';',':','?','!'];

      //creo una stringa temporanea senza quei caratteri
      var tmpStr = removeChar(textTrim[i], badChar);




      // Se nell'array delle parole da censurare, compare un item dell'array creato dal testo spilittato inserito dall'utente,
      // allora questo item viene sostituito con una stringa "x" a seconda della lunghezza della parola
      if (badwordList.includes(tmpStr)) {


        //mantengo la punteggiature se presente, e sostituisco la str con la funzione per sosituire la x ad ogni lettera
        textTrim[i] = textTrim[i].replace(tmpStr, replaceCharacter(tmpStr, "x"));

        contatoreCensura ++;


      }


    }

    // Metto nella variabile la percetuale di parola censurate in base al testo controllato
    mediaCensura = (contatoreCensura / textTrim.length) * 100;

    // Restituisco la stringa di testo inserita precedentemente, con una stringa censurata.
    // .join(), transforma l'array in una stringa
    //.toLowerCase(), rende dinuvo tutta la stringa in minuscolo
    text = textTrim.join(" ").toLowerCase();

    document.write(text);


    //Restituzione dell'array con le parole sostituite e censurate;
    console.log("Array parole censurate:", text);

    console.log("Numero di parole censurate: ",contatoreCensura);
    console.log("Media delle parole censurate: ",mediaCensura, "%");

};



// Esecuzine del codice
var input, listaProibita, badWordIndex, paroleinput;


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

   // Se l'input inserito è vuoto o non definito lo script si blocca
   if ((paroleinput == "") || (paroleinput == "undefined")) {

     alert("Prego inserire del testo.");

   }else{

     // Pusho l'input nell' Array vuoto per le parole proibite
     listaProibita.push(paroleinput);

     // Chiedo all'utente se desidera terminare l'immissione delle parole da censurare;
     var ask = prompt("Le parole da censurare sono abbastanza? Y/N").toLowerCase();
     if (ask == "y") {
       penetrazion = false;

     }
  }
}

console.log(listaProibita);

// Input per il controllo delle parole da censurare
input = prompt("inserisci il testo da controllare");

// Fino a quando la stringa o è vuota o undefined, compare un alert e mi chiede di inserire del testo
while ((input == "") || (input == "undefined")) {

  alert("Prego inserire del testo.");
  input = prompt("inserisci il testo da controllare");

}

  // Funzione con parametri che ci restituisce un testo censurato 
  censuratore(input, listaProibita);








//Calcolare la media di parole censurate in base al numero di parole da controllare inserite
// console.log(contatoreCensura);
