//**Exercícios de interpretação de código**

// Exercício 1
// Este código efetua a soma de todos os números entre 0 e 14 (inclusive)
console.log('Exercício 1')
let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
console.log(sum)
// Resultado no console: 105

// Exercício 2
// Este código testa e imprime quais numeros em lista são divisiveis por numero
// 2.a) O comando .push adiciona um elemento ao array, na última posicão
// 2.b) [10, 15, 25, 30]
// 2.c) numero = 3 -> [12, 15, 18, 21, 27, 30]
//      numero = 4 -> [12]
console.log('Exercício 2')
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 5
for(const item of lista) {
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)

//**Exercícios de escrita de código**
// Exercício 3
console.log('Exercício 3')
// Este array será usado para exemplificar as respostas de todos os itens
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
console.log(`array = ${array}`)
// 3.a
// Devolvendo o maior número do array
console.log('item a')
let maior = 0
for(let numero of array){
    if(numero > maior){
        maior = numero
    }
}
// Devolvendo o menor número do array
let menor = maior
for(let numero of array){
    if(numero < menor){
        menor = numero
    }
}
console.log(`O maior número é ${maior} e o menor é ${menor}`)

// 3.b
// Devolvendo os números do array divididos por 10
console.log('item b')
let novoArray = []
for(let numero of array){
    novoArray.push(numero / 10)
}
console.log(novoArray)

// 3.c
// Devolvendo os números pares do array
console.log('item c')
novoArray = []
for(let numero of array){
    if(numero % 2 === 0){
        novoArray.push(numero)
    }
}
console.log(novoArray)

// 3.d
// Devolvendo o array modo verbose
console.log('item d')
novoArray = []
for(let i = 0; i < array.length; i++){
    novoArray.push(`O elemento do índex ${i} é ${array[i]}`)
}
console.log(novoArray)


//**Desafio de interpretação de código**
// Desafio 1
// Este código imprime um triângulo com a quantidade de linhas especificadas
console.log('Desafio 1')
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  // Não entendi porque a variável chama asterisco!
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}
// Resposta:
// 0
// 0 0
// 0 0 0
// 0 0 0 0

//**Desafios de escrita de código**
// Desafio 2
// Jogo de adivinhação de número com 2 jogadores
console.log('Desafio 2')
const objetivo = Number(prompt('Digite um número secreto!'))
console.log('Vamos jogar!')
let chute = null
let tentativas = 0
while(chute !== objetivo){
    tentativas++
    chute = Number(prompt('Chute um número!'))
    console.log(`O número chutado foi: ${chute}`)
    if(chute > objetivo){
        alert('Errou. O número secreto é menor!')
        console.log('Errou. O número secreto é menor!')
    }else
    if(chute < objetivo){
        alert('Errou. O número secreto é maior!')
        console.log('Errou. O número secreto é maior!')
    }
}
console.log('Acertou!')
console.log(`O número de tentativos foi: ${tentativas}`)

// Desafio 3
// Jogo de adivinhação de número com 1 jogador e objetivo random
console.log('Desafio 3')
const aleatorio = Math.ceil((Math.random() * 100))
console.log('Vamos jogar!')
chute = null
tentativas = 0
while(chute !== aleatorio){
    tentativas++
    chute = Number(prompt('Chute um número!'))
    console.log(`O número chutado foi: ${chute}`)
    if(chute > aleatorio){
        alert('Errou. O número secreto é menor!')
        console.log('Errou. O número secreto é menor!')
    }else
    if(chute < aleatorio){
        alert('Errou. O número secreto é maior!')
        console.log('Errou. O número secreto é maior!')
    }
}
console.log('Acertou!')
console.log(`O número de tentativos foi: ${tentativas}`)
// Reflexão:
// A alteração foi bem simples, só mudou uma variável. Não sei como poderia ter sido mais fácil.