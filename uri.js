const btnTeste = document.getElementById('teste');

var lines = {
    shift : function() {
        return prompt("Digite um valor");
    }
  }

btnTeste.addEventListener('click',() => {


    let dias = parseInt(lines.shift());

    const tempo = [365,30,1];
    const msg = [" ano(s)\n"," mes(es)\n"," dia(s)"];
        
    function idade (i, total){
        if (i >= 2) {
            return total + msg[i];
        }else
        {
            const qtd = Math.trunc (total / tempo [i]);
            return qtd + msg[i] + idade (i+1, total - qtd * tempo [i]);
        }     
    }

    console.log (idade(0, dias))

} );