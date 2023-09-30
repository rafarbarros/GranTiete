function calcularFatorial() {
    let numero = parseInt(document.getElementById("numero").value);
    
    if (numero < 0 || isNaN(numero)) {
        alert("Por favor, digite um número inteiro positivo.");
        return;
    }
    
    let fatorial = 1;
    
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    
    document.getElementById("numeroDigitado").textContent = numero;
    document.getElementById("resultado").textContent = fatorial;
}