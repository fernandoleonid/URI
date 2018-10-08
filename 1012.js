const btnTeste = document.getElementById('teste');

let lines = {
    shift : function() {
        return prompt("Digite um valor");
    }
}

const valores = lines.shift().split(" ");

const a = parseFloat(valores[0]);
const b = parseFloat(valores[1]);
const c = parseFloat(valores[2]);
const pi = 3.14159;

const triangulo = (a * c) / 2;
const circulo = pi * c * c;
const trapezio = ((a + b) * c) / 2;
const quadrado = b * b;
const retangulo = a * b;

console.log ("TRIANGULO: " + triangulo.toFixed(3) + "\nCIRCULO: " + circulo.toFixed(3) + "\nTRAPEZIO: " + trapezio.toFixed(3) + "\nQUADRADO: " + quadrado.toFixed(3) + "\nRETANGULO: " + retangulo.toFixed(3));