using System;

namespace MultiplicandoMatrizes {
    public class Program {
        static void Main(string[] args) {
            int[,] numeros = new int[2,3];

            numeros[0,0] = 10;
            numeros[0,1] = 20;
            numeros[0,2] = 30;

            numeros[1,0] = 40;
            numeros[1,1] = 50;
            numeros[1,2] = 60;

           
            for(int i = 0; i < 2; i++) {
                for (int j = 0; j < 3; j++) {
                    Console.Write($"[{numeros[i, j]}]");
                }
                Console.WriteLine();
            }
        }
    }
}
