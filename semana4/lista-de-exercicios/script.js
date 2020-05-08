// Exercícios de interpretação

// 1.
// A função conversorDeMoeda recebe um argumento number
// e converte esse valor para moeda Real utilizando uma cotação
// informada pelo usuário através de um prompt, retornando uma string.
// Supondo que o usuário responda o prompt com o valor 5, a resposta no console seria:
// R$500

// 2.
// A função investeDinheiro recebe um Number valor que sera
// multiplicado por uma taxa determinada a ser selecionada pela
// string tipoDeInvestimento, que é o primeiro parâmetro da função
// Caso o tipoDeInvestimento seja inválido, mostra um alert
// retorna um Number com o valor multiplicado pela taxa
// Respostas do console:
// 161
// undefined (com um alert "TIPO DE INVESTIMENTO INFORMADO INCORRETO!")

// 3.
// O código copia no array1 os elementos pares do array numeros
// e elementos impares no array2
// Respostas do console:
// Quantidade total de números 14
// 6
// 8

// 4.
// Esse código procura o menor e maior item do array numeros
// e atribui as variaveis numero1 e numero2, respectivamente.
// Respostas do console:
// -10
// 283

// Exercícios de Lógica de Programação

// 1.
const arr = [1, 2, 3, 4, 5, 6, 7]
// for-of (imprime todos os item no array)
for(let num of arr){
    console.log(num)
}
// while (imprime todos os itens, indicando o indice)
let i = 0
while(i < arr.length){
    console.log(`O valor do array no índice ${i} é: ${arr[i]}`)
    i++
}
// .forEach (soma todos os itens)
let soma = 0
arr.forEach((item, idx, arr) => {
    soma += item
})
console.log(soma)

// 2.
// a) false
// b) true
// c) true
// d) true
// e) false

// 3.
// Esqueceu de incrementar o contador i
// Na comparação não vai o =
const quantidadeDeNumerosPares = 3
i = 0
while(i < quantidadeDeNumerosPares) {
  console.log(i*2)
  i++
}
