const btnTeste = document.getElementById('teste');

var lines = {
    shift : function() {
        return prompt("Digite um valor");
    }
}

btnTeste.addEventListener('click', msg => {

    const val = lines.shift().split(" ").map(e => parseFloat(e+0));
    
    const delta = Math.pow(val[1],2) - 4 * val[0] * val[2];
    
    if (delta < 0  || val[0] === 0){
        console.log("Impossivel calcular");
    }else{
        const r1 = (-val[1] + Math.sqrt(delta))/(2 * val[0]);
        const r2 = (-val[1] - Math.sqrt(delta))/(2 * val[0]);
        console.log("R1 = " + r1.toFixed(5));
        console.log("R2 = " + r2.toFixed(5));
    }

} );