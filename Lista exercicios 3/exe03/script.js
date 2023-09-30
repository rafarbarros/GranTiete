function exibirTabuada() {
    // Obtém o número digitado pelo usuário
    let numero = parseInt(document.getElementById("numero").value);
    
    // Limpa a lista de tabuada
    document.getElementById("tabuada").innerHTML = "";
    
    // Exibe o número digitado
    document.getElementById("numeroDigitado").textContent = numero;
    
    // Calcula e exibe a tabuada de 0 a 10
    for (let i = 0; i <= 10; i++) {
        let resultado = numero * i;
        let itemLista = document.createElement("li");
        itemLista.textContent = numero + " x " + i + " = " + resultado;
        document.getElementById("tabuada").appendChild(itemLista);
    }
}