const baconx = document.querySelectorAll('.objetivos ');
const textos = document.querySelectorAll( '.aba-conteudo');




for(let i = 0; i < baconx.length; i++){
    baconx[i].onclick = function(){
        for ( let j =0; j < baconx.length; j++)
        baconx[j].classList.romove( 'ativo');
    textos[j].classList.remove('ativa');
    }
baconx[i].classList.add('ativo');
textos[i].classList.add ('ativa');
}
  const contadores= document.querySelectorAll('.coontador');
const tempoObjetivo1= new Date ('2024-04-30T00:00:00');
let Tempoatual; new Date();
let segudos= Math.floor (tempoFinal/1000);
let minutos=Math.floor(segundos/60);
let hora = Mat.floor(minutos/60;
let dias= Math.floor (horas/24);



contadores[0].textContent = dias + horas "horas"+ minutos + "minutos" + segudos + "segundos";