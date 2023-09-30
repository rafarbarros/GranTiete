function verificarMultiplos() {

    let a = parseInt(document.getElementById("valorA").value);
    let b = parseInt(document.getElementById("valorB").value);


    if (a % b == 0 || b % a == 0) {
        document.getElementById("resultado").innerHTML = "São múltiplos";
    } else {
        document.getElementById("resultado").innerHTML = "Não são múltiplos";
    }
}