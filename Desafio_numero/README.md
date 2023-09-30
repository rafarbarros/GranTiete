
# Adivinhe o número

O projeto consiste em um desafio simples para o usuário tentar adivinhar um número gerado aleatóriamente na menor quantidade de tentativas.

## Autores

- [@ViniciusCN9](https://github.com/ViniciusCN9)
- [@Guilherme-Zamboni](https://github.com/Guilherme-Zamboni)
- [@rafarbarros](https://github.com/rafarbarros)
- [@DS-Matheus](https://github.com/DS-Matheus)
- [@MauricioVoltolin](https://github.com/MauricioVoltolin)

## Explicações

### Interface

O desafio consiste em uma única página web que contém 3 principais elementos:
- Elementos textuais explicando a intenção do desafio
- Um campo para inserção de dados, onde deverá ser digitado um valor inteiro para tentar adivinhar o número secreto
- 2 botões, sendo um para envio (confirmação da tentativa) e outro para "resetar" o desafio, isto é, para gerar outro número aleatório e zerar as tentativas atuais, em outras palavras, é a forma de se iniciar um novo jogo.

### Como os números são gerados

A maneira mais eficaz encontrada foi utilizando o método random() do objeto Math, pois assim não é necessário a instalação ou importação de nenhuma biblioteca fora das que já são nativas do javascript.

### Lógica

- A cada tentativa o script irá verificar primeiramente se o valor digitado é valido, isto é, se ele se encontra entre 1 e 100 (o intervalo definido no desafio para os números serem gerados).
- Após a verificação, o script deverá validar se o número de "chute" (se o número informado pelo usuário) é o mesmo que foi gerado pelo algoritmo. Independente se o valor digitado estar correto ou não,
o contador de tentativas será incrementado e o histórico constará esse novo número que foi digitado.
- A diferença de um acerto está na mensagem de parabenização que será exibida e o botão de enviar novos números que será desativado para prevenir a contagem errônea de novas tentativas.
- Já no caso do teste acusar um valor diferente do número secreto, uma mensagem ao usuário será apresentada informando se ele deverá tentar números menores ou maiores e
o jogo continuará desta forma até que o usuário finalmente acerte o número secreto.
