function calcularSomaQuadrados() {
    let numeroN = parseInt(document.getElementById("numeroN").value);
    
    if (numeroN <= 0 || isNaN(numeroN)) {
        alert("Por favor, digite um número inteiro positivo.");
    } else {
        let somaQuadrados = 0;
        for (let i = 1; i <= numeroN; i++) {
            somaQuadrados += i * i;
        }
        document.getElementById("numeroDigitado").textContent = numeroN;
        document.getElementById("resultado").textContent = somaQuadrados;
    }
}