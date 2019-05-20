'use strict';

let maaraaika = new Date();

let maaraaikaJSON = window.localStorage.getItem('konfiguraatio');
console.log(maaraaikaJSON);
let maaraaikaObjekti;

if (maaraaikaJSON) {
  maaraaikaObjekti = JSON.parse(maaraaikaJSON);
  maaraaika = new Date(maaraaikaObjekti.maaraaika + "T" + maaraaikaObjekti.kellonaika);
  document.getElementById('otsikko').innerHTML = maaraaikaObjekti.otsikko;
} else {
  location.replace("config.html");
}

let nykyhetki = new Date();
let aikavaliObj = aikavali(nykyhetki, maaraaika);
paivitaEtusivu(aikavaliObj);

let interval = setInterval(() => {
  nykyhetki = new Date();
  aikavaliObj = aikavali(nykyhetki, maaraaika);
  paivitaEtusivu(aikavaliObj);
}, 1000);


function aikavali(mista, mihin) {
  let jaannosSekunteissa;
  let aikavaliSekunneissa = Math.floor((mihin.getTime() - mista.getTime()) / 1000);
  let paivat = Math.floor(aikavaliSekunneissa / 60 / 60 / 24);
  jaannosSekunteissa = aikavaliSekunneissa - (paivat * 24 * 60 * 60);
  let tunnit = Math.floor(jaannosSekunteissa / 60 / 60);
  jaannosSekunteissa -= tunnit * 60 * 60;
  let minuutit = Math.floor(jaannosSekunteissa / 60);
  jaannosSekunteissa -= minuutit * 60;
  let sekunnit = Math.floor(jaannosSekunteissa);

  if (paivat == 0 && tunnit == 0 && minuutit == 0 & sekunnit == 0) {
    lopetus();
    clearInterval(interval);
  }

  let aikavali = {
    paiva: lisaaNollaTarvittaessa(paivat),
    tunti: lisaaNollaTarvittaessa(tunnit),
    minuutti: lisaaNollaTarvittaessa(minuutit),
    sekunti: lisaaNollaTarvittaessa(sekunnit)
  }
  return aikavali;
}

function paivitaEtusivu(aikavali) {
  let paivaValitsija = '.value[data-key="d"]';
  let tuntiValitsija = '.value[data-key="h"]';
  let minuuttiValitsija = '.value[data-key="m"]';
  let sekuntiValitsija = '.value[data-key="s"]';

  document.querySelector(paivaValitsija).innerHTML = aikavali["paiva"];
  document.querySelector(tuntiValitsija).innerHTML = aikavali["tunti"];
  document.querySelector(minuuttiValitsija).innerHTML = aikavali["minuutti"];
  document.querySelector(sekuntiValitsija).innerHTML = aikavali["sekunti"];
}

function lisaaNollaTarvittaessa(number) {
  return number < 10 ? '0' + number : number;
}

function lopetus() {
  document.getElementById('lopetusteksti').innerHTML = maaraaikaObjekti.viesti + "";
  naytaLopetusPopup();
}

function naytaLopetusPopup() {
  var popup = document.getElementById("lopetusPopup");
  popup.classList.toggle("show");
}