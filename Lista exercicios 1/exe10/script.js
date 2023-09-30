document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    // Valores inseridos pelo usuário
    let valorPrestacao = parseFloat(document.getElementById('valorPrestacao').value);
    let taxaJuros = parseFloat(document.getElementById('taxaJuros').value);
    let diasAtraso = parseInt(document.getElementById('diasAtraso').value);

    // Calculo da prestação em atraso
    let prestacaoEmAtraso = valorPrestacao + (valorPrestacao * (taxaJuros / 100) * diasAtraso);

    // Exiba o resultado
    let resultado = "Prestação em Atraso: R$ " + prestacaoEmAtraso.toFixed(2);
    document.getElementById('resultado').textContent = resultado;
});