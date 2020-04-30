/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// Mensagem de boas vindas
console.log('Bem vindo ao jogo de Blackjack! - Desafio')
// Loop principal do jogo
while(confirm('Quer iniciar uma nova rodada ? - Desafio')){
   // Aqui eu declarei dentro do loop, qual será que usa menos memória ?
   // Mas será que faz diferença já que o navegador por padrão vai consumir memória ordens de magnitude maior ??!?
   let cartasUsuario, cartasComputador, pontuacaoUsuario, pontuacaoComputador, novaCompra
   // Comprando cartas iniciais
   do{
      // Inicializando as variaveis
      cartasUsuario = []
      cartasComputador = []
      pontuacaoUsuario = 0
      pontuacaoComputador = 0
      for(let i =0; i < 2; i++){
         novaCompra = comprarCarta()
         cartasUsuario.push(novaCompra.texto)
         pontuacaoUsuario += novaCompra.valor
      }
      for(let i =0; i < 2; i++){
         novaCompra = comprarCarta()
         cartasComputador.push(novaCompra.texto)
         pontuacaoComputador += novaCompra.valor
      }  
   // A pontuação pra dois A é 22
   }while(pontuacaoUsuario === 22 || pontuacaoComputador === 22)
   
   // Usuario comprando cartas
   while(pontuacaoUsuario <= 21 && confirm(`Suas cartas são ${cartasUsuario}. A carta revelada do computador é ${cartasComputador[0]}\n`+
                                           'Deseja comprar mais uma carta ?')){
      novaCompra = comprarCarta()
      cartasUsuario.push(novaCompra.texto)
      pontuacaoUsuario += novaCompra.valor
   }
   // Pontuacao do usuario extrapolou 21
   if(pontuacaoUsuario > 21){
      alert(`Suas cartas são ${cartasUsuario}. Sua pontuação é ${pontuacaoUsuario}\n`+
            `O usuário perdeu pois ultrapassou 21!`)
   }else{
      // Loop do computador comprando cartas
      while(pontuacaoComputador < pontuacaoUsuario){
         novaCompra = comprarCarta()
         cartasComputador.push(novaCompra.texto)
         pontuacaoComputador += novaCompra.valor
      }
      // Checando o vencedor
      if(pontuacaoComputador > 21){
         alert(`Suas cartas são ${cartasUsuario}. Sua pontuação é ${pontuacaoUsuario}.\n`+
               `As cartas do computador são ${cartasComputador}. A pontuação do computador é ${pontuacaoComputador}.\n`+
               `O usuário ganhou!`)
      }else
      if(pontuacaoUsuario > pontuacaoComputador){
         alert(`Suas cartas são ${cartasUsuario}. Sua pontuação é ${pontuacaoUsuario}.\n`+
               `As cartas do computador são ${cartasComputador}. A pontuação do computador é ${pontuacaoComputador}.\n`+
               `O usuário ganhou!`)
      }else
      if(pontuacaoComputador > pontuacaoUsuario){
         alert(`Suas cartas são ${cartasUsuario}. Sua pontuação é ${pontuacaoUsuario}.\n`+
               `As cartas do computador são ${cartasComputador}. A pontuação do computador é ${pontuacaoComputador}.\n`+
               `O computador ganhou ganhou!`)
      }else{
         alert(`Suas cartas são ${cartasUsuario}. Sua pontuação é ${pontuacaoUsuario}.\n`+
               `As cartas do computador são ${cartasComputador}. A pontuação do computador é ${pontuacaoComputador}.\n`+
               `Empate!`)
      }
   }
}
// Término do jogo
console.log('O jogo acabou')