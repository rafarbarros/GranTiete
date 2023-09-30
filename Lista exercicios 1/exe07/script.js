document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    // Valor inserido pelo usuário do custo de fábrica
    let custoFabrica = parseFloat(document.getElementById('custoFabrica').value);

    // Porcentagem do revendedor - 25% do custo de fábrica
    let percentagemRevendedor = 0.25 * custoFabrica;

    // Custo dos impostos - 45% do custo de fábrica
    let custoImpostos = 0.45 * custoFabrica;

    // Preço final - custo ao consumidor
    let precoFinal = custoFabrica + percentagemRevendedor + custoImpostos;

    // Exiba o resultado
    let resultado = "O preço final do automóvel ao consumidor é R$ " + precoFinal.toFixed(2);
    document.getElementById('resultado').textContent = resultado;
});