function segundoMaior (n) {
    let num = 0;
    let mudar = 0;
    

    for (let i = 0; i < n.length; i++){
        if(num < n[i]){
            mudar = num;
            num = n[i];

        }
        

    }
    return mudar;

    
}

 let x = segundoMaior([8,2,10,5]);
 console.log(x);


