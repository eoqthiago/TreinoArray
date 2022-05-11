

function decre (n) {
    let x = [];
    for (let i = 1; i <= n; i++) {
        x[i] = n - i + 1;
        
    }
    return x;
}


function imprimir () {
    x.forEach((n => {
        console.log(n);
    }));
}

let x = decre([5]);
imprimir(x);