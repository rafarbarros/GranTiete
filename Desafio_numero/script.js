function gerarNumeroInteiroAleatorio(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function Enviar() {
    let inputUsuario = Number(document.getElementById("numero").value)
    let diferenca = Math.abs(inputUsuario - valorAleatorio)

    botaoReset.disabled = false

    if (inputUsuario <= 0 || inputUsuario > 100) {
        h2.innerHTML = `ERRO! O valor digitado não está entre 1 e 100.`

    } else if (inputUsuario == valorAleatorio) { //caso acerte
        quantidadeTentativas++

        h2.innerHTML = `Parabéns! ${inputUsuario} é o valor secreto.`
        h3.innerHTML = `Número de Tentativas: ${quantidadeTentativas}`

        atualizarTentativas(inputUsuario)

        botaoEnviar.disabled = true;
        
    } else if (inputUsuario < valorAleatorio) { //caso erre - valor secreto é maior
        quantidadeTentativas++
        
        if (diferenca >= 20) { //caso o valor seja muito menor
            h2.innerHTML = `Falhou! O valor secreto está muito a cima do inserido.`
        } else {
            h2.innerHTML = `Falhou! O valor secreto é maior que o inserido.` //caso o valor seja menor
        }
        
        h3.innerHTML = `Número de Tentativas: ${quantidadeTentativas}`
        
        atualizarTentativas(inputUsuario)
        
    } else if (inputUsuario > valorAleatorio) { //caso erre - valor secreto é menor
        quantidadeTentativas++
        
        if (diferenca >= 20) { //caso o valor seja muito maior
            h2.innerHTML = `Falhou! O valor secreto está muito a baixo do inserido.`
        } else {
            h2.innerHTML = `Falhou! O valor secreto é menor que o inserido.` //caso o valor seja maior
        }
        
        h3.innerHTML = `Número de Tentativas: ${quantidadeTentativas}`
        
        atualizarTentativas(inputUsuario)
        
    } else {
        h2.innerHTML = `ERRO! Não foi possivel estabeler relação com o valor inserido.`
        
    }
}

function Reset() {
    valorAleatorio = gerarNumeroInteiroAleatorio(1, 100)
    quantidadeTentativas = 0
    
    historicoTentativas = []
    h2.innerHTML = ``
    document.getElementById("historicoTentativas").innerHTML = `Histórico de Tentativas`
    h3.innerHTML = `Número de Tentativas: ${quantidadeTentativas}`

    botaoEnviar.disabled = false
    botaoReset.disabled = true
}

var historicoTentativas = []
function atualizarTentativas(numero) {
    historicoTentativas.push(numero)
    
    let contador = 0
    let numeroTentivas = historicoTentativas.length
    
    let htmlHistoricoTentativas = "" 
    historicoTentativas.forEach(function (tentativa) {
        contador++
        
        if (numeroTentivas == contador) {
            htmlHistoricoTentativas += `${tentativa}`
        } else {
            htmlHistoricoTentativas += `${tentativa} - `
        }
        
    })
    document.getElementById("historicoTentativas").innerHTML = `` + htmlHistoricoTentativas
}

//Primeira Execução
let botaoEnviar = document.getElementById("enviar")
let botaoReset = document.getElementById("reset")

var h2 = document.querySelector("h2")
var h3 = document.querySelector("h3")
var valorAleatorio = gerarNumeroInteiroAleatorio(1, 100)
var quantidadeTentativas = 0