alert('Olá, seja bem vindo!!');

let nomeUsuario = prompt ('');
let texto = document.querySelector('span');



while (nomeUsuario == ''){
    nomeUsuario = prompt ('Qual o seu nome?');
}

if (nomeUsuario == null) {
    texto.textContent = 'Usuário';
} else {
    texto.textContent = nomeUsuario;
}


