function menorValor (n) {
    let num = n.length;
    let x = [];
    for (let i = 0; i < n.length; i++) {
        x[i] = n[i];
        if(num > n[i]){
           num = n[i] ;
        }

    }
    return num;
    
}

 let x = menorValor([8,2,10,5]);
 console.log(x);