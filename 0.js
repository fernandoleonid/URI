const btnTeste = document.getElementById('teste');

var lines = {
    shift : function() {
        return prompt("Digite um valor");
    }
}

btnTeste.addEventListener('click', msg => {

    const n = lines.shift().split(" ");
    const codigo = n[0];
    const qtd = n[1];
    
    const tabela = {
        codigo: ["1","2","3","4","5"],
        especificacao: ["Cachorro Quente","X-Salada", "X-Bacon","Torrada simples", "Refrigerante"],
        preco: ["4.00","4.50","5.00","2.00","1.50"]
    }
    const pos = tabela.codigo.indexOf(codigo);
    const total = tabela.preco[pos] * qtd
    

    console.log ("Total: R$ " + total.toFixed(2));
  
} );