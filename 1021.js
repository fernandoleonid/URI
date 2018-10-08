const btnTeste = document.getElementById('teste');

var lines = {
    shift : function() {
        return prompt("Digite um valor");
    }
}

btnTeste.addEventListener('click',msg => {

    let valorInicial = parseInt(parseFloat(lines.shift())*100);

    const notas = [10000,5000,2000,1000,500,200,100,50,25,10,5,1];


    notas.map(function(e,i){
        const qtd = Math.trunc (valorInicial / e);
        valorInicial = valorInicial - qtd * e;
        if (i == 0){
            console.log("NOTAS:");
        }
        if (i == 6){
            console.log("MOEDAS:");
        }
        const texto = i<6 ? " nota(s) de R$ " : " moeda(s) de R$ "
        console.log( qtd + texto + (e/100).toFixed(2));
    })

            
    // const saque = function (i, valor) {
    //     if (i >= notas.length-1) {
    //         return valor;
    //     }else {
    //         const qtd = Math.trunc (valor / notas [i]);
    //         return qtd + ":" + saque (i+1, valor - qtd * notas [i]);
    //     }     
    // }

    //console.log (saque);
    //console.log (saque(0, valorInicial));

} );