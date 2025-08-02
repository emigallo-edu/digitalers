using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConectandoASql
{
    internal class PedidoOriginal
    {
        public int Id { get; set; }
        public DateTime Fecha { get; set; }
        public string ClienteNombre { get; set; }
        public string Producto { get; set; }

        public Cliente Cliente { get; set; }
    }
}
