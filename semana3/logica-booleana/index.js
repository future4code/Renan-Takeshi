//Exercícios de interpretação de código
// Exercício 1
console.log("Exercicio 1")
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)
//a. false
resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)
//b. false
resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
//c. true
resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)
//d. false
console.log("e. ", typeof resultado)
//e. boolean

//Exercício 2
//a. O array é um conjunto com varias unidades de informação; o array se declara colocando os valores entre [] e separados por , (vírgula)
//b. O index inicial é 0
//c. Usando o comando .lenght (ex: tamanho = array.lenght)
//d.
console.log("Exercicio 2")
let array
console.log('I. ', array)
//I. undefined
array = null
console.log('II. ', array)
//II. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)
//III. 11
let i = 0
console.log('IV. ', array[i], " e ", array[i+1])
//IV. 3 e 4
array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)
//V. 19 e 9
i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])
//VI. 3
i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)
//VII. 1


