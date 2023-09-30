function calcularValor() {
    
    let codigoItem = parseInt(document.getElementById("codigoItem").value);
    let quantidade = parseInt(document.getElementById("quantidade").value);

    let preco;
    switch (codigoItem) {
        case 100:
            preco = 1.20;
            break;
        case 101:
            preco = 1.30;
            break;
        case 102:
            preco = 1.50;
            break;
        case 103:
            preco = 1.20;
            break;
        case 104:
            preco = 1.30;
            break;
        case 105:
            preco = 1.00;
            break;
        default:
            preco = 0; 
    }

    
    let valorTotal = preco * quantidade;

    
    if (preco === 0) {
        document.getElementById("resultado").innerHTML = "Código inválido.";
    } else {
        document.getElementById("resultado").innerHTML = "Valor a pagar: R$" + valorTotal.toFixed(2);
    }
}