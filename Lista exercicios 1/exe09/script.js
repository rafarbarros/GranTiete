document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    // Valores inseridos pelo usuário
    let cotacaoDolar = parseFloat(document.getElementById('cotacaoDolar').value);
    let quantidadeDolares = parseFloat(document.getElementById('quantidadeDolares').value);

    // Calculo do valor em reais
    let valorEmReais = cotacaoDolar * quantidadeDolares;

    // Exiba o resultado
    let resultado = "Valor Total em Reais: R$ " + valorEmReais.toFixed(2);
    document.getElementById('resultado').textContent = resultado;
});