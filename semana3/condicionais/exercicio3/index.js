let array = [1, 2, 3, 4, 5, 6]
let tamanhoDoArray = array.length
console.log("O tamanho é", tamanhoDoArray)

console.log("Primeiro elemento:", array[0])
console.log("Terceiro elemento:", array[2])
console.log("Último elemento:", array[5])

array[0] *= 2 // Mesma coisa que: array[0] = array[0] * 2
array[2] *= 2
array[4] *= 2

console.log(array)