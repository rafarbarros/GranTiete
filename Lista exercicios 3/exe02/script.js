function calcularSoma() {
    // Obtém o número informado pelo usuário
    let numero = parseInt(document.getElementById('numero').value);

    // Verifica se o número é um inteiro positivo
    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, informe um número inteiro positivo.");
        return;
    }

    // Calcula a soma dos números antecessores
    let soma = 0;
    for (let i = 1; i <= numero; i++) {
        soma += i;
    }
    
    // Exibe o resultado
    let resultado = document.getElementById('resultado') ;
    resultado.innerHTML = "A soma dos números antecessores de " + numero + " é igual a: " + soma + ".";
}