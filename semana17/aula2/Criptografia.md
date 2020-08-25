### Exercício 1

a) Salt é uma string aleatória usada para aumentar o tempo necessário para comparação. Dificultando que a mensagem seja quebrada por força-bruta.
Rounds são quantas passagens serão executadas para gerar a Salt.
O valor recomendado é baseado no tempo que o servidor vai demorar para fazer a checagem, sendo ~250ms considerado adequado. Usei 12 rounds, pois na minha máquina levou ~275ms.

### Exercício 2

a) Primeiro o cadastro, para que as senhas sejam guardadas encriptografadas. E tabmém porque o cadastro é feito antes do login.

d) Não, pois o endpoint não lê/manipula a senha, utilizando somente o token para autenticação.
