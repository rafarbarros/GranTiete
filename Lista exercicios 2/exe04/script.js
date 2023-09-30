function verificarAnoBissexto() {
    let ano = parseInt(document.getElementById('ano').value);

    if (!isNaN(ano)) {
        if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
            document.getElementById('resultado').innerHTML = ano + ' É um ano bissexto.';
        } else {
            document.getElementById('resultado').innerHTML = ano + ' Não é um ano bissexto.';
        }
    } else {
        document.getElementById('resultado').innerHTML = 'Por favor, insira um ano válido.';
    }
}