// Dados do cliente/compra
const nome = prompt("Digite seu nome completo")
const tipo = prompt("Qual tipo de jogo gostaria ? Responda IN ou DO").toUpperCase()
const etapa = prompt("Qual a etapa do jogo ? Responda SF, DT ou FI").toUpperCase()
const categoria = Number(prompt("Escolha a categoria: 1, 2, 3 ou 4"))
const quantidade = Number(prompt("Quantos ingressos deseja comprar ?"))
// Tabela de preços
const sf = [1320, 880, 550, 220]
const dt = [660, 440, 330, 170]
const fi = [1980, 1320, 880, 330]
// Variaveis
let valorIngresso
let valorTotal

// Saida
console.log("---Dados da compra---")
// Nome
console.log(`Nome do cliente: ${nome}`)
// Tipo de jogo
switch(tipo){
    case "IN":
        console.log("Tipo de jogo: Internacional")
        break;
    case "DO":
        console.log("Tipo de jogo: Nacional")
        break;
}
// Etapa do jogo e valores do ingresso
switch(etapa){
    case "SF":
        console.log("Etapa do jogo: Semi-final")
        valorIngresso = sf[categoria-1]
        break;
    case "DT":
        console.log("Etapa do jogo: Decisão do 3o lugar")
        valorIngresso = dt[categoria-1]
        break;
    case "FI":
        console.log("Etapa do jogo: Final")
        valorIngresso = fi[categoria-1]
        break;
}
// Categoria
console.log(`Categoria: ${categoria}`)
// Quantidade
console.log(`Quantidade de ingressos: ${quantidade}`)
console.log("---Valores---")
// Valor total
valorTotal = valorIngresso * quantidade
switch (tipo){
    case "IN":
        valorIngresso = valorIngresso * 4.1
        valorTotal = valorTotal * 4.1
        console.log(`Valor do ingresso: U$${valorIngresso}`)
        console.log(`Valor do total: U$${valorTotal}`)
        break;
    case "DO":
        console.log(`Valor do ingresso: R$${valorIngresso}`)
        console.log(`Valor do total: R$${valorTotal}`)
        break;
}