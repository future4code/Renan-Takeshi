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
   // Iniciando variaveis
   // Aqui faz mais sentido iniciar dentro do loop!
   let cartasUsuario = []
   let cartasComputador = []
   let pontuacaoUsuario = 0
   let pontuacaoComputador = 0
   let novaCompra = null
   // Comprando cartas iniciais
   // Tô me sentindo meio trapaceiro por usar do-while =/
   do{
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
   alert(`Suas cartas são ${cartasUsuario}. A carta revelada do computador é ${cartasComputador[0]}`)
   
   // Usuario comprando cartas
   while(pontuacaoUsuario <= 21 && confirm('Deseja comprar mais uma carta ?')){
      novaCompra = comprarCarta()
      cartasUsuario.push(novaCompra.texto)
      pontuacaoUsuario += novaCompra.valor
      alert(`Suas cartas são ${cartasUsuario}. A carta revelada do computador é ${cartasComputador[0]}`)
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