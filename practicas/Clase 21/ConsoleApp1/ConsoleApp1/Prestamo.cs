namespace ConsoleApp1
{
    internal class Prestamo
    {
        public const int VIGENCIA_PRESTAMOS = 30;

        public Prestamo(Libro libro, Socio socio)
        {
            Libro = libro;
            Socio = socio;
            FechaPrestamo = DateTime.Today;
            Vigencia = VIGENCIA_PRESTAMOS;
        }

        public Libro Libro { get; init; }
        public Socio Socio { get; init; }
        public DateTime FechaPrestamo { get; init; }
        public int Vigencia { get; init; }
        public bool EstaDevuelto { get; set; }
    }
}