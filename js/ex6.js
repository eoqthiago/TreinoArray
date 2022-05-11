

function doisNum (n, y) {
    let x = [];
    for (let i = n; i <= y; i++) {
        x[i] = i;
        
    }
    return x;
}


function imprimir () {
    x.forEach((element => {
        console.log(element);
    }));
}

let x = doisNum(3,8);
imprimir(x);
