

function limite (n){
    const x = [];
    for(let i = 1; i <= n; i++){
        x[i] =  i;
    }

    return x;
}


function imprimir (){
    x.forEach((n => {
        console.log(n);
    }));
}

let x = limite([5]);
imprimir(x);