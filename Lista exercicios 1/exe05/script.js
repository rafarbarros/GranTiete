document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    // Valores inseridos pelo usuário
    let totalPrestacoes = parseInt(document.getElementById('totalPrestacoes').value);
    let prestacoesPagas = parseInt(document.getElementById('prestacoesPagas').value);
    let valorPrestacao = parseFloat(document.getElementById('valorPrestacao').value);

    // Calcular o total pago 
    let totalPago = prestacoesPagas * valorPrestacao;

    // Calcular saldo devedor
    let saldoDevedor = (totalPrestacoes - prestacoesPagas) * valorPrestacao;

    // Exiba o resultado
    let resultado = "Total pago : R$ " + totalPago.toFixed(2) + "<br>";
    resultado += "Saldo devedor: R$ " + saldoDevedor.toFixed(2);
    document.getElementById('resultado').innerHTML = resultado;
});