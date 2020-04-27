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

