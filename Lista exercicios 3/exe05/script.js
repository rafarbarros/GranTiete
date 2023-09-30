// Exibir os múltiplos de três de 1 a 100
function exibirMultiplosDeTres() {
    let listaMultiplosDeTres = document.getElementById("multiplosDeTres");
    listaMultiplosDeTres.innerHTML = ''; // Limpa a lista
    
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) { // Verifica se é múltiplo de três
            let itemLista = document.createElement("li");
            itemLista.textContent = i;
            listaMultiplosDeTres.appendChild(itemLista);
        }
    }
}

// Chama a função ao carregar a página
window.onload = exibirMultiplosDeTres;