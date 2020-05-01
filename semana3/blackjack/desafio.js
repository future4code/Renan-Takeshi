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
   // Não pode comprar se for maior que 19, pois vai perder já que o valor mínimo é 2
   while(pontuacaoUsuario < 20 && confirm(`Suas cartas são ${cartasUsuario}. A carta revelada do computador é ${cartasComputador[0]}\n`+
                                          'Deseja comprar mais uma carta ?')){
      novaCompra = comprarCarta()
      cartasUsuario.push(novaCompra.texto)
      pontuacaoUsuario += novaCompra.valor
   }
   // Pontuacao do usuario extrapolou 21
   if(pontuacaoUsuario > 21){
      alert(`Suas cartas são ${cartasUsuario}. Sua pontuação é ${pontuacaoUsuario}.\n`+
            `As cartas do computador são ${cartasComputador}. A pontuação do computador é ${pontuacaoComputador}.\n`+
            `O computador ganhou!`)
   }else{
      // Loop do computador comprando cartas
      while(pontuacaoComputador < pontuacaoUsuario){
         novaCompra = comprarCarta()
         cartasComputador.push(novaCompra.texto)
         pontuacaoComputador += novaCompra.valor
      }
      // Checando o vencedor
      if(pontuacaoComputador > 21 || pontuacaoUsuario > pontuacaoComputador){
         alert(`Suas cartas são ${cartasUsuario}. Sua pontuação é ${pontuacaoUsuario}.\n`+
               `As cartas do computador são ${cartasComputador}. A pontuação do computador é ${pontuacaoComputador}.\n`+
               `O usuário ganhou!`)
      }else
      if(pontuacaoComputador > pontuacaoUsuario){
         alert(`Suas cartas são ${cartasUsuario}. Sua pontuação é ${pontuacaoUsuario}.\n`+
               `As cartas do computador são ${cartasComputador}. A pontuação do computador é ${pontuacaoComputador}.\n`+
               `O computador ganhou!`)
      }else{
         alert(`Suas cartas são ${cartasUsuario}. Sua pontuação é ${pontuacaoUsuario}.\n`+
               `As cartas do computador são ${cartasComputador}. A pontuação do computador é ${pontuacaoComputador}.\n`+
               `Empate!`)
      } // Fim da checagem de vencedor - linha 49
   } // Fim do if-else - linha 37
} // Fim do loop princial - linha 4
// Término do jogo
console.log('O jogo acabou')