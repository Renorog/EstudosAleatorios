using System;

namespace OperadorTernario {
    internal class Program {
        static void Main(string[] args) {
            int numero = 10;
            string mensagem = "";

            //estrutura do operador ternário
            // condição ? true : false;

            mensagem = numero > 5 ? "Maior que 5" : "Menor que 5";
            // a mensagem maior ou menor que 5 vai ser atribuida a variável mensagem depois de verificada se é verdadeira ou falsa

            Console.WriteLine(mensagem);
            Console.ReadKey();
        }
    }
}
