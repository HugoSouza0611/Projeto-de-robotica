function TocaSomPom(id) {
    document.querySelector(id).play();
}

const Listadeteclas = document.querySelectorAll('.tecla');



for (let Contador = 0; Contador < Listadeteclas.length; Contador++) {
    const lista = Listadeteclas[Contador].classList[1];
    const idAudio = `#som-${lista}`;
    const tecla = Listadeteclas[Contador];
    const classe = tecla.classList[1];
    tecla.onclick = function () {
        TocaSomPom(idAudio);
    }

  
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space'|| evento.code === 'Enter')
        tecla.classList.add('ativa')
        console.log(evento.code === 'Space'|| evento.code === 'Enter')
    }
    tecla.onkeyup = function ()  {
        tecla.classList.remove('ativa');
    }
   tecla.classList.add('ativa')
   tecla.classList.remove('ativa')
}
