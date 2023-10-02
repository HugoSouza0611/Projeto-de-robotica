function TocaSomPom(id) {
    document.querySelector(id).play();
}

const Listadeteclas = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < Listadeteclas.length) {
    const lista = Listadeteclas[Contador].classList[1];
    const idAudio = `#som-${lista}`;
    const tecla = Listadeteclas[Contador];
    const classe = tecla.classList[1];
    tecla.onclick = function () {
        TocaSomPom(idAudio);
    }

    Contador = Contador + 1;
    tecla.onkeydown = function (evento.key) {
        tecla.classList.add('ativa')
        console.log(evento);
    }
    tecla.onkeyup = function ()  {
        tecla.classList.remove('ativa');
    }
   tecla.classList.add('ativa')
   tecla.classList.remove('ativa')
}
