

function doisNum (n, y) {
    let x = [];
    for (let i = y; i >= n; i--) {
        x[i] = y - i + 3 ;
        
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