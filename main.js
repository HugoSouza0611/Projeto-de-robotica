alert('Olá, seja bem vindo!!');

let nomeUsuario = prompt ('Qual o seu nome?');
let texto = document.querySelector('span');



texto.textContent = nomeUsuario;

while (nomeUsuario == ''){
    nomeUsuario = prompt ('Qual o seu nome?');
}