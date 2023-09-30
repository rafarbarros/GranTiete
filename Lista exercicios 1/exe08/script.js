document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    // Valores inseridos pelo usuário
    let nome = document.getElementById('nome').value;
    let salarioFixo = parseFloat(document.getElementById('salarioFixo').value);
    let vendasMes = parseFloat(document.getElementById('vendasMes').value);

    // Comissão = 15% das vendas
    let comissao = 0.15 * vendasMes;

    // Salário final = salário fixo + comissão
    let salarioFinal = salarioFixo + comissao;

    // Exiba o resultado
    let resultado = "Nome do Vendedor(a): " + nome + "<br><br>";
    resultado += "Salário Fixo: R$ " + salarioFixo.toFixed(2) + "<br><br>";
    resultado += "Salário no final do mês: R$ " + salarioFinal.toFixed(2);
    document.getElementById('resultado').innerHTML = resultado;
});