'use strict'

let henkilo = {
    nimi: {etunimi: "Esko", sukunimi: "Esimerkki"},
    ika: 41,
    sukupuoli: "mies",
    harrastukset: ["jalkapallo", "jääkiekko", "lentopallo"],
    jasen: true
}

console.log(henkilo);

console.log(JSON.stringify(henkilo));