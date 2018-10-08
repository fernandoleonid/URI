const btnTeste = document.getElementById('teste');

var lines = {
    shift : function() {
        return prompt("Digite um valor");
    }
  }

btnTeste.addEventListener('click',msg => {


    let segundos = parseInt(lines.shift());

    const tempo = [3600,60,1];
        
    function hora (i, seg){
        if (i >= 2) {
            return seg;
        }else
        {
            const qtd = Math.trunc (seg / tempo [i]);
            return qtd + ":" + hora (i+1, seg - qtd * tempo [i]);
        }     
    }

    console.log (hora(0, segundos))

} );