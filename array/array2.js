

//ARRAY

let carros = [
    'palio',
    'corola',
    'gol',
    'ferrari'
];

//OBJETO

let carro = {
    nome: 'fiat',
    modelo: 'uno',
    peso: '800kg',
    ligado:false,
    ligar:function(){
        this.ligado = true;
        console.log('ligado')
    },
    acelerar:function () {
        if(this.ligado == true){
            console.log('vrummmmm');
        } else{
            console.log(this.nome + ' ' + this.modelo + ' não ligou')
        }
    }
};

carro.ligar()
carro.acelerar()

