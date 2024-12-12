let peso = prompt("digite o seu peso");
let altura = prompt("digite a sua altura");

let imc = peso / (altura + altura);

document.body.innerHTML = '<h1>Seu imc é de $(imc) </h1>';