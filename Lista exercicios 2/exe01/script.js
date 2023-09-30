function encontrarMaiorNumero() {
    // Obtém os valores de entrada
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    // Verifica se os números são iguais
    if (num1 === num2) {
        document.getElementById("resultado").innerHTML = "Os números são iguais. O valor é: " + num1;
    } else if (num1 > num2) {
        document.getElementById("resultado").innerHTML = "O maior número é: " + num1;
    } else {
        document.getElementById("resultado").innerHTML = "O maior número é: " + num2;
    }
}