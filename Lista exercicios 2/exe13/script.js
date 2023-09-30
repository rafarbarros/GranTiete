function verificarTriangulo() {
    // Obtém os valores de entrada
    let a = parseFloat(document.getElementById("valorA").value);
    let b = parseFloat(document.getElementById("valorB").value);
    let c = parseFloat(document.getElementById("valorC").value);


    if (a + b > c && a + c > b && b + c > a) {

        if (a == b && b == c) {
            document.getElementById("resultado").innerHTML = "Triângulo Equilátero";
        } else if (a == b || a == c || b == c) {
            document.getElementById("resultado").innerHTML = "Triângulo Isósceles";
        } else {
            document.getElementById("resultado").innerHTML = "Triângulo Escaleno";
        }
    } else {
        document.getElementById("resultado").innerHTML = "Não é um triângulo";
    }
}