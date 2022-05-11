

function criarSequenciaReverse (limite){
    let x = [];
    for(let i = limite - 1; i >= 0; i--){
        x[i] = limite - i - 1 ;
    }

    return x;
}

function imprimir (n){
    for(let item of n){
        console.log(item);
    }
}

let x = criarSequenciaReverse(5);
imprimir(x);