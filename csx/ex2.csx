


public int[] criarSequencia (int limite){
    int[] x = new int[limite];
    for (int i = 0; i < limite; i++) {
        x[i] = i;
        
    }

    return x;
}

public void repetir (int[] n){
    foreach(int item in n){
        Console.WriteLine(item);
    }
}

int[] x = criarSequencia(5);
repetir(x);