const btnTeste = document.getElementById('teste');

var lines = {
    shift : function() {
        return prompt("Digite um valor");
    }
}

btnTeste.addEventListener('click', msg => {

    const val = lines.shift().split(" ").map(e => parseInt(e));
    
    if (val[1] > val[2] && val[3] > val[0] && (val[2]+val[3]) > (val[0]+val[1]) && val[2] > 0 && val[3] > 0 && (val[0] % 2) == 0 ){
        console.log ("Valores aceitos");
    }else{
        console.log ("Valores nao aceitos");
    }

} );