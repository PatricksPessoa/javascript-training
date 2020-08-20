var nome;
console.log( nome ? 'Olá' + nome : 'Digite um nome');  //ternário

if ( nome ) {  // normal mesma coisa que o ternário de cima
    console.log("Olá" + nome);
} else {
    console.log("Digite um nome");
}