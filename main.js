function TocaSomPom(id) {
    document.querySelector(id).play();
}

const Listadeteclas = document.querySelectorAll('.tecla');

let contador = 0;

while (Contador < Listadeteclas.length)  {
    Listadeteclas[Contador].onclick = function ()   {
        TocaSomPom(idAudio);
    };    
const lista = Listadeteclas[contador].classList[1];
console.log(lista);

const idAudio = `#som-${lista}`;


    console.log(idAudio);
    Contador = Contador + 1;
    console.log(Contador);
}