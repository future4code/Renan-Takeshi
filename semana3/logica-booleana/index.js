//Exercícios de interpretação de código
console.log("Exercícios de interpretação de código")
// Exercício 1
console.log("Exercício 1")
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
console.log("Exercício 2")
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

//Exercícios de escrita de código
console.log("Exercícios de escrita de código")
//Exercício 1.a
console.log("Exercício 1")
function fahrenheitToKelvin(fahrenheit){
    let kelvin = ((fahrenheit - 32) * (5/9)) + 273.15
    return kelvin
}
console.log('77 graus Fahrenheit = ',fahrenheitToKelvin(77), "Kelvin")

//Exercício 1.b
function celciusToFahrenheit(celcius){
    let fahrenheit = (celcius * (9/5)) + 32
    return fahrenheit
}
console.log('80 graus Celcius = ',celciusToFahrenheit(80), "graus Fahrenheit")

//Exercício 1.c
let fahrenheit = celciusToFahrenheit(30)
let kelvin = fahrenheitToKelvin(fahrenheit)
console.log('30 graus Celcius = ', fahrenheit,'graus Fahrenheit = ', kelvin,'Kelvin')

//Exercício 1.d
let celcius = prompt("Qual valor Celcius deseja converter ?")
fahrenheit = celciusToFahrenheit(celcius)
kelvin = fahrenheitToKelvin(fahrenheit)
console.log(celcius,'graus Celcius = ', fahrenheit,'graus Fahrenheit = ', kelvin, 'Kelvin')

//Exercício 2
console.log("Exercício 2")
const perguntas = ["Oi, sou o JSbot, qual o seu nome ?",
                   "Em que ano estamos ?",
                   "Como é sentir o Sol na sua pele ?",
                   "Você prefere praia ou montanha ?",
                   "Qual o sentido da vida ?"]
let respostas = [prompt(perguntas[0]), 
                 prompt(perguntas[1]),
                 prompt(perguntas[2]),
                 prompt(perguntas[3]),
                 prompt(perguntas[4])]
console.log('1.', perguntas[0])
console.log('Resposta:', respostas[0])
console.log('2.', perguntas[1])
console.log('Resposta:', respostas[1])
console.log('3.', perguntas[2])
console.log('Resposta:', respostas[2])
console.log('4.', perguntas[3])
console.log('Resposta:', respostas[3])
console.log('5.', perguntas[4])
console.log('Resposta:', respostas[4])
