/*
// a.
console.log("item a")
let primeiroNumero = Number(prompt("Digite o primeiro número"))
let segundoNumero = Number(prompt("Digite o segundo número"))
if(primeiroNumero < segundoNumero){
    console.log(segundoNumero, primeiroNumero)
} else{
    console.log(primeiroNumero, segundoNumero)
}
// Quando os dois números são iguais cai no else e imprime os dois números

// b.
console.log("item b")
let terceiroNumero = Number(prompt("Digite o terceiro número"))
// 3 2 1
if(primeiroNumero > segundoNumero && segundoNumero > terceiroNumero){
    console.log(primeiroNumero, segundoNumero, terceiroNumero)
}else
// 3 1 2
if(primeiroNumero > segundoNumero && segundoNumero < terceiroNumero && terceiroNumero < primeiroNumero){
    console.log(primeiroNumero, terceiroNumero, segundoNumero)
}else
// 1 3 2
if(segundoNumero > terceiroNumero && terceiroNumero > primeiroNumero){
    console.log(segundoNumero, terceiroNumero, primeiroNumero)
}else 
// 2 3 1
if(segundoNumero > terceiroNumero && terceiroNumero < primeiroNumero){
    console.log(segundoNumero, primeiroNumero, terceiroNumero)
}else
// 1 2 3
if(terceiroNumero > segundoNumero && segundoNumero > primeiroNumero){
    console.log(terceiroNumero, segundoNumero, primeiroNumero)
}else
// 2 1 3
if(terceiroNumero > segundoNumero && segundoNumero < primeiroNumero){
    console.log(terceiroNumero, primeiroNumero, segundoNumero)
}
// Se digitar números iguais nada acontece
*/
// c.
console.log("item c")
let primeiroNumero = Number(prompt("Digite o primeiro número"))
let segundoNumero = Number(prompt("Digite o segundo número"))
let terceiroNumero = Number(prompt("Digite o terceiro número"))
// Tres números iguais
if(primeiroNumero === segundoNumero && segundoNumero === terceiroNumero){
    console.log("Insira ao menos um número diferente")
}else
// 1 1 2
if(primeiroNumero === segundoNumero){
    if(primeiroNumero < terceiroNumero){
        console.log(terceiroNumero, primeiroNumero)
    }else{console.log(primeiroNumero, terceiroNumero)}
}else
// 1 2 1
if(primeiroNumero === terceiroNumero || segundoNumero === terceiroNumero){
    if(primeiroNumero < segundoNumero){
        console.log(segundoNumero, primeiroNumero)
    }else{console.log(primeiroNumero, segundoNumero)}
}else
// 2 1 1
// Aparentemente esse trecho é redundante
/*if(segundoNumero === terceiroNumero){
    if(primeiroNumero < segundoNumero){
        console.log(segundoNumero, primeiroNumero)
    }else{console.log(primeiroNumero, segundoNumero)}
}else*/
// 3 2 1
if(primeiroNumero > segundoNumero && segundoNumero > terceiroNumero){
    console.log(primeiroNumero, segundoNumero, terceiroNumero)
}else
// 3 1 2
if(primeiroNumero > segundoNumero && segundoNumero < terceiroNumero && terceiroNumero < primeiroNumero){
    console.log(primeiroNumero, terceiroNumero, segundoNumero)
}else
// 1 3 2
if(segundoNumero > terceiroNumero && terceiroNumero > primeiroNumero){
    console.log(segundoNumero, terceiroNumero, primeiroNumero)
}else 
// 2 3 1
if(segundoNumero > terceiroNumero && terceiroNumero < primeiroNumero){
    console.log(segundoNumero, primeiroNumero, terceiroNumero)
}else
// 1 2 3
if(terceiroNumero > segundoNumero && segundoNumero > primeiroNumero){
    console.log(terceiroNumero, segundoNumero, primeiroNumero)
}else
// 2 1 3
if(terceiroNumero > segundoNumero && segundoNumero < primeiroNumero){
    console.log(terceiroNumero, primeiroNumero, segundoNumero)
}