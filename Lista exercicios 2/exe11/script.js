function calcularCredito() {

    let saldoMedio = parseFloat(document.getElementById("saldoMedio").value);

    let percentual = 0;
    let valorCredito = 0;

    if (saldoMedio >= 0 && saldoMedio <= 200) {
        percentual = 0 
        
    } else if (saldoMedio >= 201 && saldoMedio <= 400) {
        percentual = 20;
    } else if (saldoMedio >= 401 && saldoMedio <= 600) {
        percentual = 30;
    } else if (saldoMedio > 600) {
        percentual = 40;
    }

    valorCredito = (percentual / 100) * saldoMedio;


    document.getElementById("resultado").innerHTML = "Saldo Médio: R$" + saldoMedio.toFixed(2) + "<br><br>Valor do Crédito: R$" + valorCredito.toFixed(2);
}