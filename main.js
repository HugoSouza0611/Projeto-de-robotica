function TocaSomPom(id) {
    document.querySelector(id).play();
}

const Listadeteclas = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < Listadeteclas.length)  {
    Listadeteclas[Contador].onclick = function ()   {
        TocaSomPom(idAudio);
    }   
const lista = Listadeteclas[Contador].classList[1];
const idAudio = `#som-${lista}`;
console.log(lista);
console.log(idAudio);
console.log(Contador);
Contador = Contador + 1;
}
