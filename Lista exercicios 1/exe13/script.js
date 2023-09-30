function calcularRaizes() {
    var a = parseFloat(document.getElementById('coeficienteA').value);
    var b = parseFloat(document.getElementById('coeficienteB').value);
    var c = parseFloat(document.getElementById('coeficienteC').value);

    var discriminante = b * b - 4 * a * c;

    var raiz1, raiz2;

    if (discriminante > 0) {
        raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        var resultado = "Raiz 1: " + raiz1.toFixed(2) + "<br>";
        resultado += "Raiz 2: " + raiz2.toFixed(2);
    } else if (discriminante === 0) {
        raiz1 = -b / (2 * a);
        var resultado = "Raiz única: " + raiz1.toFixed(2);
    } else {
        var resultado = "Não há raízes reais.";
    }

    document.getElementById('resultado').innerHTML = resultado;
}