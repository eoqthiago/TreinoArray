

public int[] limite (int[] n)
{
    int[] x =new int[n];
    for(int i = 1; i < n; i++){
        x[i] = i;
    }
    return x;
}

public void Retornar (int[] n)
{
    foreach(int item in n)
    {
        Console.WriteLine(item);
    }
}
int[] x = limite(new int[5]);
Retornar(x);