const baconx = document.querySelectorAll('.objetivos ');
const textos = document.querySelectorAll( '.aba-conteudo');




for(let i = 0; i < baconx.length; i++){
    baconx[i].onclick = function(){
        for ( let j =0; j < baconx.length; j++)
        texto [j].classList.romove( 'ativo');
    textos [ j].classList.remove('ativa');
    }
botoes[i].classList.add('ativo');
textos[i].classList.add ('ativa');
}
