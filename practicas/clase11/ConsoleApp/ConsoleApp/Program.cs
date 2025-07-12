using ConsoleApp.Utils;

namespace ConsoleApp
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Bienvenidos a la aplicación");
            ClaseDePrueba claseDePrueba = new ClaseDePrueba();
            claseDePrueba.LeerNombre();
            claseDePrueba.LeerEmail();
        }
    }
}