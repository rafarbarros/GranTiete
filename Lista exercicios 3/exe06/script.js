function calcularSomaPares() {
    let numero = parseInt(document.getElementById("numero").value);
    
    if (numero <= 0 || isNaN(numero)) {
        alert("Por favor, digite um número inteiro positivo.");
    } else {
        let somaPares = 0;
        for (let i = 2; i <= numero; i += 2) {
            somaPares += i;
        }
        document.getElementById("numeroDigitado").textContent = numero;
        document.getElementById("resultado").textContent = somaPares;
    }
}