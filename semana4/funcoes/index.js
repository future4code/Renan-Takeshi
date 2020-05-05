// Exercício 1
console.log('Exercício 1')
const minhaFuncao = (quantidade) => {
	const array = []
	for(let i = 0; i < quantidade; i+=2) {
			for(let j = 0; j < i; j++) {
				array.push(j)
			}
	}
	return array
}
// Item a
console.log(minhaFuncao(2))
// []
// vazio pois quando i = 0, j não é menor que i
// nenhuma iteração no loop interno 

// Item b
console.log(minhaFuncao(5))
// [0, 1, 0, 1, 2, 3]
// duas iterações quando i = 2 e i = 4
// não imprime o 5 pois o i pula para 6, que é maior que quantidade

// Item c
console.log(minhaFuncao(8))
// [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]
// tres iterações quando i = 2, i = 4 e i = 6
// não itera quando i = 8, pois não é menor que 8

// Exercício 2
console.log('Exercício 2')
let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
};
// Item a
console.log(funcao(arrayDeNomes, "Darvas"));
// 0
// Index do arrayDeNomes onde se encontra o valor "Darvas"
console.log(funcao(arrayDeNomes, "João"));
// 2
// Index do arrayDeNomes onde se encontra o valor "João"
console.log(funcao(arrayDeNomes, "Paula"));
// undefined
// Não retorna nada, pois não encontra o valor "Paula"
// Item b
// Sim, funcionaria, pois compara dois parametros do mesmo tipo, Number

// Exercício 3
console.log('Exercício 3 (nos comentários)')
function metodo(array) {
  let resultadoA = 0;
  let resultadoB = 1;
  let arrayFinal = [];

  for (let x of array) {
    resultadoA += x;
    resultadoB *= x;
  }

  arrayFinal.push(resultadoA);
  arrayFinal.push(resultadoB);
  return arrayFinal;
}
// Retorna um array onde o primeiro campo é a soma de todos os valores do array inicial,
// e o segundo campo é a multiplicação dos valores do array inicial.
// A função poderia ser renomeada somatorioProdutorio(array)

// Exercício 4
// Item a
console.log('Exercício 4a')
const idadeCachorro = (idadeHumana) => {
  return idadeHumana * 7
}
console.log(`4 anos humanos são ${idadeCachorro(4)} anos em idade de cachorro`)
// 4 anos humanos são 28 anos em idade de cachorro

// Item b
console.log('Exercício 4b')
const infoPessoal = (nome, idade, endereco, ehEstudante) => {
  if(typeof(nome) === 'string' && typeof(idade) === 'number' && typeof(endereco) === 'string' && typeof(ehEstudante) === 'boolean'){
    let stringEstudante
    if(ehEstudante){
      stringEstudante = 'sou estudante'
    }else{
      stringEstudante = 'não sou estudante'
   }
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e ${stringEstudante}.`
  }else{
    console.log('Argumentos incorretos!')
  }
}
console.log(infoPessoal('Renan', 34, 'Alameda 42 número 37', true))
// Eu sou Renan, tenho 34 anos, moro em Alameda 42 número 37 e sou estudante.

// Exercício 5
console.log('Exercício 5')
const qualSeculo = (ano) => {
  const algarismosRomanos = ['NÃO EXISTE ANO 0!','I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX','XXI']
  return `O ano ${ano} percente ao século ${algarismosRomanos[Math.ceil(ano/100)]}`
}
console.log(qualSeculo(1001))
// O ano 1001 pertence ao século XI

// Exercício 6
// Item a
console.log('Exercício 6a')
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
const quantidadeElementos = (array) => {
  return array.length
}
console.log(`O array possui ${quantidadeElementos(array)} elementos`)
// O array possui 10 elementos

// Item b
console.log('Exercício 6b')
const ehPar = (numero) => {
  if(numero % 2 === 0){
    return true
  }
  return false
}
console.log(ehPar(1))
// false

// Item c
console.log('Exercício 6c')
const quantosPares = (array) => {
  let contador = 0
  for(let numero of array){
    if(numero % 2 === 0){
      contador++
    }
  }
  return contador
}
console.log(quantosPares(array))
// 6

// Item d
console.log('Exercício 6d')
const quantosPares2 = (array) => {
  let contador = 0
  for(let numero of array){
    if(ehPar(numero)){
      contador++
    }
  }
  return contador
}
console.log(quantosPares2(array))
// 6