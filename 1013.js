let lines = {
    shift : function() {
        return prompt("Digite um valor");
    }
}

const valores = lines.shift().split(" ");

const a = parseFloat(valores[0]);
const b = parseFloat(valores[1]);
const c = parseFloat(valores[2]);

const maiorAB = (a + b + Math.abs(a - b)) / 2 ;
const maiorABC = (maiorAB + c + Math.abs(maiorAB - c)) / 2 ;

console.log (maiorABC + " eh o maior");