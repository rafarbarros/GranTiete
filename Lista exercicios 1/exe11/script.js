document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    // Valores inseridos pelo usuário
    let valorA = parseFloat(document.getElementById('valorA').value);
    let valorB = parseFloat(document.getElementById('valorB').value);
    let valorC = parseFloat(document.getElementById('valorC').value);

    // Calcule R e S
  
    let R = Math.pow(valorA + valorB, 2);
    let S = Math.pow(valorB + valorC, 2);

    // Calcule D
    let D = R + S / 2;

    // Exiba o resultado
    let resultado = "D = " + D.toFixed(2);
    document.getElementById('resultado').textContent = resultado;
});