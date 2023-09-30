function calcularParImpar() {

    let numero1 = parseFloat(document.getElementById("numero1").value);
    

    let resultadoElement = document.getElementById("resultado");

    if (numero1 % 2 == 0) {
        resultadoElement.textContent = "Esse número é par"
    } else {
        resultadoElement.textContent = "Esse número é ímpar"
    }
}