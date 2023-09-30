document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtenha a temperatura em graus Fahrenheit inserida pelo usuário
    let tempFahrenheit = parseFloat(document.getElementById('tempFahrenheit').value);

    // Converta de Fahrenheit para Celsius usando a fórmula
    let tempCelsius = (tempFahrenheit - 32) * 0.555555;

    // Exiba o resultado
    let resultado = "Temperatura em Celsius: " + tempCelsius.toFixed(2) + " °C";
    document.getElementById('resultado').textContent = resultado;
});