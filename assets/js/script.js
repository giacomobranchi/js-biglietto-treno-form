/*Descrizione:
 Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in solo console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Questo richiederà un minimo di ricerca.*/

let fullName = document.getElementById("fullName");
let distance = document.getElementById("distance");
let age = document.getElementById("age");

let buttonCreate = document.getElementById("create");
let buttonDelete = document.getElementById("delete");

const pricePerKm = 0.21;

buttonCreate.addEventListener("click", function(){
    let ticketType = "Biglietto standard";
    let distanceValue = Number(distance.value);
    let ticketPrize = pricePerKm * distanceValue;
    //console.log(ticketPrize);
    let ageValue = age.value;
    //console.log(age);
    let finalPrize;
    if (ageValue === "minor") {
        finalPrize = ticketPrize * 0.8;
        ticketType = "Biglietto scontato";
    } else if (ageValue === "over"){
        finalPrize = ticketPrize * 0.6;
        ticketType = "Biglietto scontato";
    } else if (ageValue === "adult"){
        finalPrize = ticketPrize;
    }

    console.log(finalPrize);

    let html =
    '<div class="ticket">'+
        '<div class="ticketname">'+
            '<h5>NOME PASSEGGERO</h5>'+
            '<div>'+fullName.value+'</div>'+
        '</div>'+
        '<div class="ticketinfo">'+
            '<table>'+
                '<thead>'+
                    '<td>Offerta</td>'+
                    '<td>Carrozza</td>'+
                    '<td>Codice CP</td>'+
                    '<td>Costo Biglietto</td>'+
                '</thead>'+
                '<tr>'+
                    '<td>'+ticketType+'</td>'+
                    '<td>'+(Math.random() * 10).toFixed(0)+'</td>'+
                    '<td>'+(Math.random() * 10000).toFixed(0)+'</td>'+
                    '<td>'+finalPrize.toFixed(2)+'€</td>'+
                '</tr>'+
            '</table>'+
        '</div>'+
    '</div>';

    document.getElementById("Tickets").innerHTML+=html;
})

buttonDelete.addEventListener("click", function(){
    fullName.value = "";
    distance.value = "";

    document.getElementById("Tickets").innerHTML=
    '<div class="ticketdetail">'+
        '<h3>DETTAGLIO PASSEGGERI</h3>'+
    '</div>';
})
 