function TocaSomPom(id) {
    document.querySelector(id).play();
}

const Listadeteclas = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < Listadeteclas.length)  {
    Listadeteclas[Contador].onclick = function ()   {
        TocaSomPom(idAudio);
        const tecla = Listadeteclas[Contador];
        const classe = tecla.classList[1]
    
    }  
        tecla.onclick = function () {
            TocaSomPom(idAudio)
    }
const lista = Listadeteclas[Contador].classList[1];
const idAudio = `#som-${lista}`;
Contador = Contador + 1;
Listadeteclas[5].classList.add('ativa')
Listadeteclas[5].classList.remove('ativa')
}
