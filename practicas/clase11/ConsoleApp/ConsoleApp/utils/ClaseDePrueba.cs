using System.Text.RegularExpressions;

namespace ConsoleApp.Utils
{
    internal class ClaseDePrueba
    {
        private string nombre;

        public void LeerNombre()
        {
            Console.WriteLine("Ingresá tu nombre");
            string n;
            bool esValido = false;

            do
            {
                n = Console.ReadLine();
                n = NormalizarNombre(n);
                if (EsNombreValido(n))
                {
                    nombre = n;
                    esValido = true;
                }
                else
                {
                    Console.WriteLine("El nombre ingresado no es válido");
                }
            }
            while (esValido == false);
        }

        public void LeerEmail()
        {
            Console.WriteLine("Ingresá tu correo");
            string mail = Console.ReadLine();
            if (EsMailValido(mail) == false)
            {
                Console.WriteLine("El correo ingresado no es válido");
            }
        }

        private bool EsNombreValido(string n)
        {
            return n.Trim() != ""
                && n.Length > 3
                && n.Length < 30
                && EmpiezaConMayuscula(n)
                && StartWith(n, "Em");
        }

        private bool StartWith(string text, string match)
        {
            // text = "esto es un texto";
            // match = "ek";

            string textComparableConMatch = text.Substring(0, match.Length);
            return textComparableConMatch == match;
        }

        private string NormalizarNombre(string nombre)
        {
            string p = "abcd";
            int bloque = 6;
            int cantidadDeBloques = (int)(p.Length / bloque);
            for (int i = 0; i < cantidadDeBloques; i++)
            {
                string resultado = p.Substring(bloque * i, bloque);
            }



            // nehuen carlos gonzalez
            // Nehuen Carlos Gonzalez

            // Separamos por palabra
            string[] palabras = nombre.Split(" ");

            for (int i = 0; i < palabras.Length; i++)
            {
                string palabra = palabras[i];
                palabra = palabra.Substring(0, 1).ToUpper() + palabra.Substring(1);
                palabras[i] = palabra;
            }
            return string.Join(" ", palabras);
        }

        private bool EmpiezaConMayuscula(string texto)
        {
            foreach (string palabra in texto.Split(" "))
            {

                string primeraLetra = palabra.ElementAt(0).ToString();

                if (primeraLetra != primeraLetra.ToUpper())
                {
                    return false;
                }
            }
            return true;
        }

        private bool EsMailValido(string email)
        {
            if (Regex.IsMatch(email, @"^[^@\s]+@[^@\s]+\.[^@\s]+$"))
            {
                return true;
            }
            return false;
        }
    }
}