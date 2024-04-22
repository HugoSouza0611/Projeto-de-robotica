const baconx = document.querySelectorAll('.objetivos ');
const textos = document.querySelectorAll('.aba-conteudo');




for (let i = 0; i < baconx.length; i++) {
  
  baconx[i].onclick = function () {
    
    for (let j = 0; j < baconx.length; j++){
    baconx[j].classList.romove('ativo');
    textos[j].classList.remove('ativa');
  }
  baconx[i].classList.add('ativo');
  textos[i].classList.add('ativa');
}
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date('2024-04-30T00:00:00');

let Tempoatual; new Date();
let tempoFinal = tempoObjetivo1 - Tempoatual;
let segundos = Math.floor(tempoFinal / 1000);
let minutos = Math.floor(segundos / 60);
let hora = Math.floor(minutos / 60);
let dias = Math.floor(hora / 24);

segundos %= 60;
minutos %= 60;
hora %= 24;




contadores[0].textContent = dias + "dias"+ hora + "horas" + minutos;