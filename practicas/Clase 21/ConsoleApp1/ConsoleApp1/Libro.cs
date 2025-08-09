using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    internal class Libro
    {
        public Libro(string nombre, long isbn, string autor, string genero, int paginas)
        {
            Nombre = nombre;
            ISBN = isbn;
            Autor = autor;
            Genero = genero;
            Paginas = paginas;
        }

        public string Nombre { get; init; }
        public long ISBN { get; init; }
        public string Autor { get; init; }
        public string Genero { get; init; }
        public int Paginas { get; init; }
    }
}