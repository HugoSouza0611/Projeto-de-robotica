function TocaSomPom() {
    document.querySelector('#som-tecla-toim').play();
}

const Listadeteclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < 9) {
    Listadeteclas[0].onclick = function () tocar ( '#som-tecla-toim')
    contador = contador + 1;
    console.log(contador);
}
