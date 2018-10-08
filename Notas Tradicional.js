const btnTeste = document.getElementById('teste');

var lines = {
    shift : function() {
        return prompt("Digite um valor");
    }
  }

btnTeste.addEventListener('click',msg => {

    let valor = parseFloat(lines.shift());
    let notas = valor + "\n"
    //calculo notas de 100
    let resto = valor % 100;
    const n100 = (valor - resto) / 100;
    notas += n100 + " nota(s) de R$ 100,00\n"
    valor = resto

    //calculo notas de 50
    resto = valor % 50;
    const n50 = (valor - resto) / 50;
    notas += n50 + " nota(s) de R$ 50,00\n"
    valor = resto

    //calculo notas de 20
    resto = valor % 20;
    const n20 = (valor - resto) / 20;
    notas += n20 + " nota(s) de R$ 20,00\n"
    valor = resto

    //calculo notas de 10
    resto = valor % 10;
    const n10 = (valor - resto) / 10;
    notas += n10 + " nota(s) de R$ 10,00\n"
    valor = resto

    //calculo notas de 5
    resto = valor % 5;
    const n5 = (valor - resto) / 5;
    notas += n5 + " nota(s) de R$ 5,00\n"
    valor = resto

    //calculo notas de 2
    resto = valor % 2;
    const n2 = (valor - resto) / 2;
    notas += n2 + " nota(s) de R$ 2,00\n"
    
    //calculo notas de 1
    notas += resto + " nota(s) de R$ 1,00\n"

    console.log(notas);
    
} );