function iniciarContagemRegressiva() {
    // Obtém o número informado 
    let numero = parseInt(document.getElementById('numero').value);

    // Verifica se o número é inteiro positivo
    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, informe um número inteiro positivo.");
        return;
    }

    // Inicia o contador
    let contador = document.getElementById('contador');
    contador.innerHTML = "";

    // Inicia a contagem regressiva
    for (let i = numero; i >= 0; i--) {
        contador.innerHTML += i + "<br>";
    }
}