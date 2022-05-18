


function jogoDaVelha (n){

    const jogo = [[1,2,3],
                 [4,5,6],
                 [7,8,9]
    ];
    let x = jogo[n];

    

    for (let i = 0; i < 3; i++) { // lin
        for(let j = 0; j < 3; j++){
            
            if(jogo[i][j] == jogo[n]){
                jogo[n] = 'x'
                
            }
        } // col

    
            
    
        
    }
    
    return x;

}

let x = jogoDaVelha([[1][2]]);
console.log(x)