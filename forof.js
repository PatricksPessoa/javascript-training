/*
var carros = [
    {id: 1, marca: 'ford', preço: 10000, ano: 2009},
    {id: 2, marca: 'fiat', preço: 8000, ano: 2010}
]

var total = 0;
*/
/*  com 'for' normal calculando preço máximo
for(var i = 0; i < carros.length; i++) {
    total += carros[i].preço
}

console.log(total);
*/

/* com 'for of'
for(const carro of carros) {
    total += carro.preço
}

console.log(total);
*/

/* com 'for in'
for(const i in carros) {
    total += carros[i].preço
}

console.log(total);
*/

/* 0 verde 1 amarelo 2 azul 3 branco
const cores = ['verde', 'amarelo', 'azul', 'branco']

for(const index in cores) {
    console.log(index,  cores[index])
}
*/

/* todos os valores do array com for in 

const produtos = [
    { descrição: 'Resma Ofício', valor: 11.50, quantidade: 10 },
    { descrição: 'Lapis preto', valor: 0.50, quantidade: 3 },
    { descrição: 'Transferidor plástico', valor: 1.20, quantidade: 4 }
]

var total = 0

for(const i in produtos) {
    const { valor, quantidade} = produtos[i]

    total += valor * quantidade
}

console.log(total);
*/

/* const números = [0, 10, 20, 30, 40, 50, 60, 100]

for(const numero in números) {
    console.log(números[numero])
} */

/*
const carros = [
    { id: 1, modelo: 'Corsa', marca: 'Chevrolet', preço: 18000 },
    { id: 2, modelo: 'Punto', marca: 'Fiat', preço: 12000 },
    { id: 3, modelo: 'Gol', marca: 'Volkswagen', preço: 14000 },
    { id: 4, modelo: 'Saveiro', marca: 'Volkswagen', preço: 20000 },
    { id: 5, modelo: 'Uno', marca: 'Fiat', preço: 12000 }
  ]
  
  let total = 0
  
  for (const carro of carros) {
    total += carro.preço
  }
  
  // converte o número para o padrão monetário
  const valorFinal = Number(total).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
  
  console.log(valorFinal) // R$ 76,000.00
  */
