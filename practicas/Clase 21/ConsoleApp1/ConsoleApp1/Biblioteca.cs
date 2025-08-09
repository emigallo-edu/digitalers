namespace ConsoleApp1
{
    internal class Biblioteca
    {
        private List<Libro> _libros;
        private List<Prestamo> _prestamos;

        public Biblioteca()
        {
            _libros = new List<Libro>();
            _prestamos = new List<Prestamo>();
        }

        internal void Agregar(Libro libro)
        {
            if (Existe(libro))
            {
                throw new ElLibroYaExisteException();
            }
            _libros.Add(libro);
        }

        internal void Devolver(Libro libro)
        {
            Prestamo prestamo = _prestamos.Where(x => x.Libro.ISBN == libro.ISBN).First();
            prestamo.EstaDevuelto = true;
        }

        internal List<Prestamo> ObtenerHistorialPrestamos()
        {
            return _prestamos;
        }

        internal List<Prestamo> ObtenerHistorialPrestamos(Socio socio)
        {
            return _prestamos.Where(x => x.Socio.Identificacion == socio.Identificacion)
                .ToList();
        }

        internal List<Prestamo> ObtenerHistorialPrestamos(Libro libro)
        {
            return _prestamos.Where(x => x.Libro.ISBN == libro.ISBN)
                .ToList();
        }

        internal List<Libro> ObtenerLibrosDisponibles()
        {
            List<Libro> disponibles = new List<Libro>();
            foreach (Libro libro in _libros)
            {
                bool estaPrestado = _prestamos.Any(x => x.Libro.ISBN == libro.ISBN
                    && x.EstaDevuelto == false);
                if (!estaPrestado)
                {
                    disponibles.Add(libro);
                }
            }
            return disponibles;
        }

        internal Libro RetirarLibro(long isbn, Socio socio)
        {
            if (!Existe(isbn))
            {
                throw new Exception("El libro no existe");
            }
            Libro libro = _libros.Where(x => x.ISBN == isbn).First();
            Prestamo prestamo = new Prestamo(libro, socio);
            _prestamos.Add(prestamo);
            return libro;
        }

        public bool Existe(Libro libro)
        {
            return Existe(libro.ISBN);
        }

        public bool Existe(long isbn)
        {
            return _libros.Any(x => x.ISBN == isbn);
        }
    }
}