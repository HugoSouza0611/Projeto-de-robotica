function TocaSomPom (){
    document. querySelector ( 'som_tecla_pom') .play ( );
}
const Listadeteclas = document.querySelectorAll('.tecla'); 

let contador - 0; 

while(contador<9) {                                   
    Listadeteclas[0] .onclick = TocaSomPom;

     contador - contador + 1;
console.log(contador);
}
  