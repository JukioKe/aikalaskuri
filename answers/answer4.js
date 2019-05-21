'use strict'

let nappi = document.getElementById("muutaOlioksi");

nappi.addEventListener("click", muutaObjektiksi);

function muutaObjektiksi() {
let teksti = document.getElementById("tekstikentta").value;
let objekti = JSON.parse(teksti);
console.log(objekti);
}
