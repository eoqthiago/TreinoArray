


function maiorValor (n) {
    let num = 0;
    let x = [];
    for (let i = 0; i < n.length; i++) {
        x[i] = n[i];
        if(n[i] > num){
           num = n[i] ;
        }

    }
    return num;
    
}

 let x = maiorValor([8,2,10,5]);
 console.log(x);
