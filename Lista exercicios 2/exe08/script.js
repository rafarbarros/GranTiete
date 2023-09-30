function ordenarValores() {
    
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);
    let valor3 = parseInt(document.getElementById("valor3").value);

    
    let valores = [valor1, valor2, valor3];
    valores.sort(function(a, b) {
        return a - b;
    });

    
    document.getElementById("resultado").innerHTML = "Valores em ordem crescente: " + valores.join(", ");
}