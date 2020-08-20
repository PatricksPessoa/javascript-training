/*let salário = 1000

while (salário < 5000) {                            // operação repetitiva com while até certo valor
    salário += 100

    console.log("O salário ainda é R$" + salário)
}*/


/*let aumento = 500
let salário = 1000

do {
    console.log("O salário ainda é R$" + salário)       // operação repetitiva com do while

    aumento += 50
} while (aumento < 500)*/

/*let contador = 0

while(contador < 50) {
    console.log(`repetição nr $`)       // while vai incrementar o número até que tenha 50 de valor

    contador++
}*/

/*const cores = [
    'Verde',
    'Amarelo',
    'Azul',
    'Branco'
]

let index = 0

while (index < cores.length) {
    console.log(index, cores[index]) // 0 verde 1 amarelo 2 azul 3 branco
    index++
}*/

/*const produtos = [
    { descrição: 'Resma Ofício', valor: 11.50, quantidade: 10 },
    { descrição: 'Lapis preto', valor: 0.50, quantidade: 3 },
    { descrição: 'Transferidor plástico', valor: 1.20, quantidade: 4 }
  ]
  
  let total = 0
  let index = 0
  
  while (index < produtos.length) {
    const { valor, quantidade } = produtos[index]
  
    total += valor * quantidade                  // mostra o valor total de todos os itens
    index++
  }
  
  console.log(total)*/

  /*const números = [ 10, 11, 22, 33, 44, 55, 66, 77 ,88 ,99]

  let index = 0

  while (index < números.length) {
      console.log('numero atual %s: ' + números[index])  // mostra o valor de cada número
      index++
    }*/


   /* const carros = [
        { id: 1, modelo: 'Corsa', marca: 'Chevrolet', preço: 18000 },
        { id: 2, modelo: 'Punto', marca: 'Fiat', preço: 12000 },
        { id: 3, modelo: 'Gol', marca: 'Volkswagen', preço: 14000 },
        { id: 4, modelo: 'Saveiro', marca: 'Volkswagen', preço: 20000 },
        { id: 5, modelo: 'Uno', marca: 'Fiat', preço: 12000 }
      ]
      
      let total = 0
      let index = 0
      
      while (index < carros.length) {
        total += carros[index].preço                   // soma todos os preços
        index++
      }
      
      // converte o número para o padrão monetário
      const valorFinal = Number(total).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
      
      console.log(valorFinal) */
      // R$ 76,000.00