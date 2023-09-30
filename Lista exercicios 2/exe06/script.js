function encontrarMaiorValor() {
    
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);
    let valor3 = parseInt(document.getElementById("valor3").value);

    
    let maiorValor = (valor1 >= valor2 && valor1 >= valor3) ? valor1 :
                     (valor2 >= valor1 && valor2 >= valor3) ? valor2 : valor3;

    
    document.getElementById("resultado").innerHTML = "O maior valor é: " + maiorValor;
}