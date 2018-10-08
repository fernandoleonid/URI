const btnTeste = document.getElementById('teste');

var lines = {
    shift : function() {
        return prompt("Digite um valor");
    }
  }

btnTeste.addEventListener('click',msg => {


    let valor = parseInt(lines.shift());

    const cedulas = [100,50,20,10,5,2,1];

    notas = cedulas.map(function (x) {
        const qtd = Math.trunc(valor / x);
        valor = valor - qtd * x;
        return qtd +  " nota(s) de R$ " + x + ",00";
    });

    console.log(notas.join("\n"));
    
} );