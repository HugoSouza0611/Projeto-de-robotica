function TocaSomPom() {
    document.querySelector('#som-tecla-toim').play();
}

const Listadeteclas = document.querySelectorAll('.tecla');

let contador = 0;

while (Contador < Listadeteclas.length)  {
    Listadeteclas[Contador].onclick = function ()   {
        tocar(idAudio);
    };    
const lista = Listadeteclas[contador].classList[1];
console.log(lista);

const idAudio = `#som_${classe}`;


    console.log(idAudio);
    Contador = Contador + 1;
    console.log(Contador);
}