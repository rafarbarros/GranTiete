function calcularPesoIdeal() {
    
    let idade = parseInt(document.getElementById("idade").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let sexo = document.getElementById("sexo").value;

    
    let pesoIdeal;

    if (sexo == 'M') {
        if (altura > 1.70) {
            if (idade <= 20) {
                pesoIdeal = (72.7 * altura) - 58;
            } else if (idade >= 21 && idade <= 39) {
                pesoIdeal = (72.7 * altura) - 53;
            } else {
                pesoIdeal = (72.7 * altura) - 45;
            }
        } else {
            if (idade <= 40) {
                pesoIdeal = (72.7 * altura) - 50;
            } else {
                pesoIdeal = (72.7 * altura) - 58;
            }
        }
    } else if (sexo == 'F') {
        if (altura > 1.50) {
            if (idade >= 35) {
                pesoIdeal = (62.1 * altura) - 45;
            } else {
                pesoIdeal = (62.1 * altura) - 49;
            }
        } else {
            pesoIdeal = (62.1 * altura) - 44.7;
        }
    } else {
        document.getElementById("resultado").innerHTML = "Sexo inválido.";
        return;
    }

    
    document.getElementById("resultado").innerHTML = "Peso Ideal: " + pesoIdeal.toFixed(2) + " kg";
}