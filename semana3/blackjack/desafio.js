// Mensagem de boas vindas
console.log('Bem vindo ao jogo de Blackjack! - Desafio')
// Loop principal do jogo
while(confirm('Quer iniciar uma nova rodada ? - Desafio')){
   // Aqui eu declarei dentro do loop, qual será que usa menos memória ?
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
   // Compra novamente se algum jogador tirar dois A
   }while(pontuacaoUsuario === 22 || pontuacaoComputador === 22)

   // Usuário comprando cartas
   // Não pode comprar se a pontuação for maior que 19, pois vai perder já que o valor mínimo é 2
   while(pontuacaoUsuario <= 19 && confirm(`Suas cartas são ${cartasUsuario.join(" ")}. A carta revelada do computador é ${cartasComputador[0]}\n`+
                                           `Deseja comprar mais uma carta ?`)){
      novaCompra = comprarCarta()
      cartasUsuario.push(novaCompra.texto)
      pontuacaoUsuario += novaCompra.valor
   }
   // Pontuação do usuário extrapolou 21
   if(pontuacaoUsuario > 21){
      alert(`Suas cartas são ${cartasUsuario.join(" ")}. Sua pontuação é ${pontuacaoUsuario}.\n`+
            `As cartas do computador são ${cartasComputador.join(" ")}. A pontuação do computador é ${pontuacaoComputador}.\n`+
            `O computador ganhou!`)
   }else{
      // Loop do computador comprando cartas
      while(pontuacaoComputador < pontuacaoUsuario){
         novaCompra = comprarCarta()
         cartasComputador.push(novaCompra.texto)
         pontuacaoComputador += novaCompra.valor
      }
      // Checando o vencedor        (Segunda condicão é irrelevante, mas acho que ajuda a entender o código)
      if(pontuacaoComputador > 21 || pontuacaoUsuario > pontuacaoComputador){
         alert(`Suas cartas são ${cartasUsuario.join(" ")}. Sua pontuação é ${pontuacaoUsuario}.\n`+
               `As cartas do computador são ${cartasComputador.join(" ")}. A pontuação do computador é ${pontuacaoComputador}.\n`+
               `O usuário ganhou!`)
      }else
      if(pontuacaoComputador > pontuacaoUsuario){
         alert(`Suas cartas são ${cartasUsuario.join(" ")}. Sua pontuação é ${pontuacaoUsuario}.\n`+
               `As cartas do computador são ${cartasComputador.join(" ")}. A pontuação do computador é ${pontuacaoComputador}.\n`+
               `O computador ganhou!`)
      }else{
         alert(`Suas cartas são ${cartasUsuario.join(" ")}. Sua pontuação é ${pontuacaoUsuario}.\n`+
               `As cartas do computador são ${cartasComputador.join(" ")}. A pontuação do computador é ${pontuacaoComputador}.\n`+
               `Empate!`)
      } // Fim da checagem de vencedor - linha 48
   } // Fim do if-else - linha 36 (fim da rodada)
} // Fim do loop princial - linha 4
// Término do jogo
console.log('O jogo acabou')