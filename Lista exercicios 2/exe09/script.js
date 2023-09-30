function ordenarValores() {
    
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);
    let valor3 = parseInt(document.getElementById("valor3").value);

    
    let valores = [valor1, valor2, valor3];
    valores.sort(function(a, b) {
        return b - a; 
    });

    // Exibe os valores ordenados
    document.getElementById("resultado").innerHTML = "Valores em ordem decrescente: " + valores.join(", ");
}