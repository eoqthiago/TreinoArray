




public int[] criarSequenciaReverse (int limite){
    int[] x = new int [limite];
    for(int i = limite - 1; i >= 0; i--){
        x[i] = limite - i - 1 ;
    }

    return x;
}

public void imprimir (int[] n){
    foreach(int item in n){
        Console.WriteLine(item);
    }
}

int[] x = criarSequenciaReverse(5);
imprimir(x);