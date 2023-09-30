function calcularEquacao() {
    
    let a = parseFloat(document.getElementById("valorA").value);
    let b = parseFloat(document.getElementById("valorB").value);
    let c = parseFloat(document.getElementById("valorC").value);

    
    let delta = b * b - 4 * a * c;

    if (delta < 0) {
    
        document.getElementById("resultado").innerHTML = "Delta é negativo, não é possível calcular x' e x''.";
    } else {
    
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById("resultado").innerHTML = "Delta =  " + delta + "<br><br>x' = " + x1 + "<br><br>x'' = " + x2;
    }
}