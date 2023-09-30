document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    // Valores inseridos
    let valorA = parseInt(document.getElementById('valorA').value);
    let valorB = parseInt(document.getElementById('valorB').value);

    // Trocar os valores de A e B 
    let temp = valorA;
    valorA = valorB;
    valorB = temp;

    // Exiba os valores trocados
    let resultado = "Valor de A após troca: " + valorA + "<br>";
    resultado += "Valor de B após troca: " + valorB;
    document.getElementById('resultado').innerHTML = resultado;
});