// function maiorIdade (age) {
//     return 18 - age;
// }
// const checkAge = maiorIdade(15);
// console.log(checkAge);


function Maior (n){
    let num = 0;
    let a = 0;
    for (let i = 0 ; i < n.length; i++) {
        if(num < n[i]){
            a = num;
            num = n[i + i];
        }
        
    }
    return a;
}



let x = Maior([1,9,7,4,2]);
console.log(x);


//

// function maiorValor (n) {
//     let num = 0;
//     let x = [];
//     for (let i = 0; i < n.length; i++) {
//         x[i] = n[i];
//         if(n[i] > num){
//            num = n[i] ;
//         }

//     }
//     return num;
    
// }

//  let j = maiorValor([8,2,10,5]);
//  console.log(j);