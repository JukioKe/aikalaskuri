'use strict'

document.getElementById('config-form').onsubmit = paivitaTiedotMuistiin;

let konfiguraatio = window.localStorage.getItem('konfiguraatio');
if (konfiguraatio) {
    konfiguraatio = JSON.parse(konfiguraatio);
    document.querySelector("input[name='title']").value = konfiguraatio['otsikko'];
    document.querySelector("input[name='date']").value = konfiguraatio['maaraaika'];
    document.querySelector("input[name='time']").value = konfiguraatio['kellonaika'];
    document.querySelector("input[name='message']").value = konfiguraatio['viesti'];
}

function paivitaTiedotMuistiin() {
    let otsikko = document.querySelector("input[name='title']").value;
    let maaraaika = document.querySelector("input[name='date']").value;
    let kellonaika = document.querySelector("input[name='time']").value;
    let viesti = document.querySelector("input[name='message']").value;

    let paivitetytTiedot = {
        otsikko: otsikko,
        maaraaika: maaraaika,
        kellonaika: kellonaika,
        viesti: viesti
    }

    window.localStorage.setItem("konfiguraatio", JSON.stringify(paivitetytTiedot));
    console.log(paivitetytTiedot);
    location.replace("/");
    return false;
}