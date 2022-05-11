





public int[] decre (int n) {
    int[] x = new int [n];
    for (int i = 1; i <= n; i++) {
        x[i] = n - i + 1;
        
    }
    return x;
}


public void imprimir (int[] n) {
    foreach(int item in n){
        Console.WriteLine(item);
    }
}

int[] x = decre(5);
imprimir(x);