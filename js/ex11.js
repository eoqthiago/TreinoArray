function soma (n) {
    let x = 0;
    for (let i = 0; i < n.length; i++) {
        x += n[i] / 3;
        
    }
    return x ;
}



let x = soma([2,5,8]);
console.log(x);