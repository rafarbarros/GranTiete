function gerarFibonacci() {
    let numeroN = parseInt(document.getElementById("numeroN").value);
    
    if (numeroN <= 0 || isNaN(numeroN)) {
        alert("Por favor, digite um número inteiro positivo.");
        return;
    }
    
    let fibonacciList = [];
    
    for (let i = 0; i < numeroN; i++) {
        if (i <= 1) {
            fibonacciList.push(i);
        } else {
            let proximoNumero = fibonacciList[i - 1] + fibonacciList[i - 2];
            fibonacciList.push(proximoNumero);
        }
    }
    
    document.getElementById("numeroDigitado").textContent = numeroN;
    
    let listaNumeros = document.getElementById("fibonacciList");
    listaNumeros.innerHTML = "";
    
    for (let i = 0; i < fibonacciList.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.textContent = fibonacciList[i];
        listaNumeros.appendChild(itemLista);
    }
}