import Countdown from "./countdown.js";

const tempoParaOWWB = new Countdown("18 July 2021 23:59:59 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoParaOWWB.total[index];
  });
}
mostrarTempo();
setInterval(mostrarTempo, 1000);
