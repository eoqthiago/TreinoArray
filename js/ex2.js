

function criarSequencia (limite){
    let x = [];
    for (let i = 0; i < limite; i++) {
        x[i] = i;
        
    }

    return x;
}

function repetir (n){
    for(let item of n){
        console.log(item);
    }
}

let x = criarSequencia(5);
repetir(x);