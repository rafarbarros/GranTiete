let numeros = [];
        
        function adicionarNumero() {
            let numero = parseInt(document.getElementById("numero").value);
            
            if (numero === -1) {
                calcularMedia();
            } else {
                numeros.push(numero);
                document.getElementById("numero").value = "";
                atualizarLista();
            }
        }
        
        function atualizarLista() {
            let listaNumeros = document.getElementById("numerosInseridos");
            listaNumeros.innerHTML = "";
            for (let i = 0; i < numeros.length; i++) {
                let itemLista = document.createElement("li");
                itemLista.textContent = numeros[i];
                listaNumeros.appendChild(itemLista);
            }
        }
        
        function calcularMedia() {
            if (numeros.length === 0) {
                alert("Nenhum número foi inserido.");
                return;
            }
            
            let soma = 0;
            for (let i = 0; i < numeros.length; i++) {
                soma += numeros[i];
            }
            
            let media = soma / numeros.length;
            document.getElementById("media").textContent = media.toFixed(2);
        }