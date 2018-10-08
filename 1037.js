const btnTeste = document.getElementById('teste');

var lines = {
    shift : function() {
        return prompt("Digite um valor");
    }
}

btnTeste.addEventListener('click', msg => {

    const n = parseFloat(lines.shift());
    
    let texto = "Fora de intervalo";
    
    if (n >= 0 && n <= 25){
        texto = "Intervalo [0,25]";
    }else if (n > 25 && n <= 50){
        texto = "Intervalo (25,50]"
    }else if (n > 50 && n <= 75){
        texto = "Intervalo (50,75]"
    }else if (n > 75 && n <= 100){
        texto = "Intervalo (75,100]"
    }
    
    console.log (texto);
} );