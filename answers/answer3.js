'use strict'

let olio = {};
console.log(olio);

olio.etunimi = "Magnus";
console.log(olio);

olio.sukunimi = "von Wright";
console.log(olio);

olio.etunimi = "Ferdinand";
console.log(olio);

delete olio.etunimi;
console.log(olio);