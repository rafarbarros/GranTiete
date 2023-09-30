document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();
   
     // Valores inseridos pelo usuário
    let nome = document.getElementById('nome').value;
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);

    // Calcule a média aritmética
    let media = (nota1 + nota2 + nota3) / 3;

    // Exiba o resultado
    let resultado = "O(A) aluno(a) " + nome + " obteve média de " + media.toFixed(2);
    document.getElementById('resultado').textContent = resultado;
});