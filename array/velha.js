const readline = require('prompt-sync')();
let tabela = {
    casa1: '', casa2: '', casa3: '',
    casa4: '', casa5: '', casa6: '',
    casa7: '', casa8: '', casa9: ''

};

let vez = '';
let vencedor = '';

let jogando = false;


function limpar(n){
    vencedor = '';
    let aleatorio = Math.floor(Math.random() * 2);
    if(aleatorio === 0){
        vez = 'x';
    } else {
        vez ='o';
    }
    for( i in tabela.length) {
        if(tabela[i] == tabela[n]){
            tabela[i] += tabela[n]
        }

        console.log(tabela);
    }

    jogando = true;
    vertabela();

}

function vertabela(){
    console.log('na onde quer marcar o x');
    let a = readline();

    let x = limpar(a);
    return x;

}

limpar();

