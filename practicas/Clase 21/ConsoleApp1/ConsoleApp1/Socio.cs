using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    internal class Socio
    {
        public Socio(string nombre, int identificacion)
        {
            Nombre = nombre;
            Identificacion = identificacion;
        }

        public string Nombre { get; }
        public int Identificacion { get; }
    }
}
