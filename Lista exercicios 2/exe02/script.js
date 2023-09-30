function calcularMedia() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);

    let media = (nota1 * 4 + nota2 * 3 + nota3 * 3) / 10;

    let resultadoElement = document.getElementById("resultado");

    if (media >= 7) {
        resultadoElement.textContent = "APROVADO";
    } else if (media >= 5 && media < 7) {
        resultadoElement.textContent = "RECUPERAÇÃO";
    } else {
        resultadoElement.textContent = "REPROVADO";
    }
}