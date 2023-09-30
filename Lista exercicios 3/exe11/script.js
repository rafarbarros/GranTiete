function contarVogais() {
    let palavra = document.getElementById("palavra").value.toLowerCase();
    
    if (!palavra.match(/^[a-zA-Z]+$/)) {
        alert("Por favor, insira uma palavra válida.");
        return;
    }
    
    let vogais = "aeiou";
    let contador = 0;
    
    for (let i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i])) {
            contador++;
        }
    }
    
    document.getElementById("palavraDigitada").textContent = palavra;
    document.getElementById("resultado").textContent = contador;
}