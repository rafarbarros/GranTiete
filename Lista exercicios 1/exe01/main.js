//Variavel GLobal
// var numero1 = 1;
// let numero2 = 1;
// let numero3= 2;
// let resultado = (numero1 + numero2) * numero3;
// console.log("O resultado é: ", resultado)

//Variavel Local

function Calcular() {
let numero1 = Number(document.getElementById('numero1').value);
let numero2 = Number(document.getElementById('numero2').value);
let numero3 = Number(document.getElementById('numero3').value);
let resultado = (numero1 + numero2) * numero3;
document.getElementById("resultado").innerHTML ="O resultado é: " + resultado;
//console.log("O resultado é: ", resultado);
}