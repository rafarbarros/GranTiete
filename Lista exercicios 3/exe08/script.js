function verificarPrimo() {
    let numero = parseInt(document.getElementById("numero").value);

    if (numero <= 1 || isNaN(numero)) {
        document.getElementById("resultado").textContent = "Por favor, digite um número inteiro positivo maior que 1.";
        return;
    }

    let ePrimo = true;

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            ePrimo = false;
            break;
        }
    }

    if (ePrimo) {
        document.getElementById("resultado").textContent = numero + " é um número primo.";
    } else {
        document.getElementById("resultado").textContent = numero + " não é um número primo.";
    }
}