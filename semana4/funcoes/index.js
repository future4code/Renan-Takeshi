// Exercício 1
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

// Item b
console.log(minhaFuncao(5))
// [0, 1, 0, 1, 2, 3]

// Item c
console.log(minhaFuncao(8))
// [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]


// Exercício 2
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
const idadeCachorro = (idadeHumana) => {
  return idadeHumana * 7
}
console.log(idadeCachorro(4))
// 28

// Item b
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
const qualSeculo = (ano) => {
  if(typeof(ano) === 'number'){
    const algarismosRomanos = [0,1,2,3,4,5,6,7,8,9,'X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX','XXI']
    return `O ano ${ano} percente ao século ${algarismosRomanos[Math.ceil(ano/100)]}`
  }else{
    console.log('Argumento incorreto!')
  }
}
console.log(qualSeculo(1001))
// O ano 901 pertence ao século XI

// Exercício 6
// Item a
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
const quantidadeElementos = (array) => {
  return array.length
}
console.log(`O array possui ${quantidadeElementos(array)} elementos`)
// O array possui 10 elementos

// Item b
const ehPar = (numero) => {
  if(numero % 2 === 0){
    return true
  }
  return false
}
console.log(ehPar(1))
// false

// Item c
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