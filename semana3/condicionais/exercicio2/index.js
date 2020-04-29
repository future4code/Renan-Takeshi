// Atribui a string digitada pelo usuario para a variavel fruta
let fruta = prompt("Escolha uma fruta")
// Desclaração da variavel preco para ser alterada no switch
let preco
// Atribui um valor para preco dependendo de qual fruta foi digitada pelo usuario
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM d.
  default:
    preco = 5
    break;
}
// Imprime no console a fruta escolhida e seu valor
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//b. O preço da fruta Maçã é R$ 2.25

//c. (2 * 3.5) + (1 * 2.25) + (3 * 5) + (1 * 0.30) = 24.55
//c. Pagaria R$ 24.55, pois Banana não tem case e vai pro default

//d. O preço da fruta Pêra é R$ 5