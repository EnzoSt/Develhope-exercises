const students = ["Paul", "George", "Lucas"];

function addStudent(student) {
  students.push(student);
}

addStudent("Marco");

console.log(students);

//---------------------------------------------------------------------------------------------------------------------------------------
// DOMANDA:
// Sai individuare il motivo per cui abbiamo la possibilità di aggiungere
// un elemento all'array nonostante abbiamo dichiarato la variabile come `readonly`?
//---------------------------------------------------------------------------------------------------------------------------------------
// RISPOSTA:
// Quando facciamo una dichiarazione di tipo "Const" diciamo che l'identificatore della variabile non può essere riassegnato.
// Nel caso di dati primitivi, l'identificatore corrisponde al valore della variabile stessa, perché tali tipi di dati vengono passati per valore.
// Nel caso degli Array, i dati vengono passati per riferimento e non per valore come avviene per i primitivi,
// questo ci consente di modificare gli elementi e/o i valori presenti in un array lasciando quindi inalterato
// l'identificatore dell'array che corrisponde al riferimento di allocazione di memoria assegnatogli.
//---------------------------------------------------------------------------------------------------------------------------------------
