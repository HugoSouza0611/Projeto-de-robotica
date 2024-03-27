alert('Olá, seja bem vindo!!');

let nomeUsuario = prompt ('');
let texto = document.querySelector('span');



while (nomeUsuario == ''){
    nomeUsuario = prompt ('Qual o seu nome?');
}

texto.textContent = nomeUsuario;