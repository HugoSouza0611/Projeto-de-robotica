const baconx = document.querySelectorAll('.botao');
// baconx.length





for(let i = 0; i < baconx.length; i++){
console.log(i);
baconx[i].onclick = function(){
    baconx[i].classList.add('ativo');emove('ativo')
}

//baconx[i].classList.remove('ativo');
}