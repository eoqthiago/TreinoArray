


public int[] criarSequencia (int limite){
    int[] x = new int[limite];
    for (int i = 0; i < limite; i++) {
        x[i] = i;
        
    }

    return x;
}

public void repetir (int[] n){
    for(int i = 0; i < limite; i++){
        Console.WriteLine(n[i]);
    }
}

int[] x = criarSequencia(5);
repetir(x);