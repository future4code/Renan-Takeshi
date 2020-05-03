// Mensagem de boas vindas
console.log('Bem vindo ao jogo de Blackjack!')
// Inicializando variaveis
// Qual pratica seria melhor, declarar aqui ou dentro do while ?
let usuario = []
let computador = []
// Loop principal do jogo
while(confirm('Quer iniciar uma nova rodada ?')){
   // Usuario compra cartas
   usuario[0] = comprarCarta()
   usuario[1] = comprarCarta()
   // Computador compra cartas
   computador[0] = comprarCarta()
   computador[1] = comprarCarta()
   // Calculo da pontuacao dos jogadores
   usuario[2] = usuario[0].valor + usuario[1].valor
   computador[2] = computador[0].valor + computador[1].valor
   // Imprime cartas e pontuação
   console.log(`Usuário - cartas ${usuario[0].texto} ${usuario[1].texto} - pontuação ${usuario[2]}`)
   console.log(`Computador - cartas ${computador[0].texto} ${computador[1].texto} - pontuação ${computador[2]}`)
   // Testa qual vencedor
   if(usuario[2] > computador[2]){
      console.log('O usuário ganhou!')
   } else
   if(computador[2] > usuario[2]){
      console.log('O computador ganhou!')
   } else{
      console.log('Empate!')
   }
} // Fim do loop principal - linha 9
// Término do jogo
console.log('O jogo acabou')