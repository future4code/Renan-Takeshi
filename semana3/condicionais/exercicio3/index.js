const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  }
}

console.log(mensagem)
// Uncaught ReferenceError: mensagem is not defined
// O erro acontece pois a variavel mensagem foi declarada dentro do bloco if
// o comando console.log(mensagem) está fora do bloco, logo não tem acesso a mensagem