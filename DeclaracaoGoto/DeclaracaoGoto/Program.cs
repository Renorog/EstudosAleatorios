using System.Diagnostics;



Inicio:
Console.Write("Escolha uma opção: ");

int op = int.Parse(Console.ReadLine());
int valor = 0;

switch (op)
{
    default:
        goto Inicio;
    case 1:
        valor += 100;
        break;
    case 2:
        valor += 50;
        goto case 1;
    case 3:
        valor += 10;
        goto case 2;
}

Console.WriteLine("Valor final " + valor);
Console.ReadKey();