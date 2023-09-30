document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    // Valores de altura e raio inseridos
    let altura = parseFloat(document.getElementById('altura').value);
    let raio = parseFloat(document.getElementById('raio').value);

    // Constante Pi 
    let Pi = 3.14;

    // Área da base
    let areaBase = Pi * Math.pow(raio, 2);

    // Área lateral
    let areaLateral = 2 * Pi * raio * altura;

    // Área total
    let areaTotal = areaBase + areaLateral;

    // Quantidade total de litros de tinta
    let litrosTinta = areaTotal * 2 / 3;

    // Quantidade de latas de tinta necessárias 
    let quantidadeLatas = Math.ceil(litrosTinta / 5);

    // Custo total
    let custoTotal = quantidadeLatas * 40.00;

    // Exiba o resultado
    let resultado = "Área Total do Cilindro: " + areaTotal.toFixed(2) + " metros quadrados<br><br>";
    resultado += "Quantidade Total de Litros de Tinta: " + litrosTinta.toFixed(2) + " litros<br><br>";
    resultado += "Quantidade de Latas de Tinta Necessárias: " + quantidadeLatas + " latas<br><br>";
    resultado += "Custo Total: R$ " + custoTotal.toFixed(2);
    document.getElementById('resultado').innerHTML = resultado;
});