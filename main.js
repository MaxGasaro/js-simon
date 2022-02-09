//funzione genera numero casuale compreso tra min e max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//funzione per nascondere numeri casuali precedentemente mostrati
function resetMessaggio() {
    
    element.innerHTML = '';

}

//funzione per chiedere all'utente 5 numeri compresi tra 0 e 100
function getNumeriUtente() {

    const numeriUtente = [];

    while (numeriUtente.length < 5) {
        const numero = parseInt(prompt('Inserisci un numero'));
        if (!numeriUtente.includes(numero) && !isNaN(numero) && numero <= 100 && numero > 0) {
            numeriUtente.push(numero);
        }
    }

    return numeriUtente;
}

//crea nuovo array con i numeri indovinati
//cioè verificando quali elementi sono presenti in entrambi gli array 
//passati come parametri della funzione
function verificaNumeriIndovinati(arrayNumeriGenerati, arrayNumeriInseriti) {

    const indovinati = [];

    for (let i = 0; i < arrayNumeriInseriti.length; i++) {

        if (arrayNumeriGenerati.includes(arrayNumeriInseriti[i])) {
            indovinati.push(arrayNumeriInseriti[i]);
        }
    }

    return indovinati;

}

//funzione per stampare nel html
function stampaNumeriIndovinati(result) {
    element.innerHTML = 'Hai indovinato questi numeri: ' + result;
}


//genero 5 numeri casuali e li metto in un array
const numeriCasuali = [];

while (numeriCasuali.length < 5) {

    const numeroGenerato = getRandomNumber(1,100);
    if (!numeriCasuali.includes(numeroGenerato)) {
        numeriCasuali.push(numeroGenerato);
    }
}

//stampo questo array nell'HTML
const element = document.getElementById('messagge');

element.innerHTML = numeriCasuali;
//timeout che nasconde elemento html
setTimeout(resetMessaggio, 2*1000);
//timeout +1 secondo (per compatibilità con chrome) 
//che richiede di inserire i numeri letti che si ricordano
setTimeout(function() {

    //chiedo all'utente di inserire numeri
    const numeriInseriti = getNumeriUtente();

    //verifico quali numeri sono indovinati
    const numeriIndovinati = verificaNumeriIndovinati(numeriCasuali, numeriInseriti);

    stampaNumeriIndovinati(numeriIndovinati);


}, 3*1000);


