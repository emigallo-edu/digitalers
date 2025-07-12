namespace ZooPoo.Entidades
{
    // El Perro es un Mamifero
    internal class Perro : Mamifero
    {
        private string _juegueteFavorito;

        public Perro(string nombre, DateTime nacimiento, string raza, string juegueteFavorito)
            : base(nombre, nacimiento, raza)
        {
            _juegueteFavorito = juegueteFavorito;
        }

        public void Caminar()
        {
            Console.WriteLine("Estoy caminando");
        }

        public void Olfatear()
        {
            Console.WriteLine("Estoy olfateando");
        }

        public void Jugar()
        {
            Console.WriteLine($"Estoy jugando con un {_juegueteFavorito}");
        }

        public override void Comunicarse()
        {
            Console.WriteLine("Estoy ladrando");
        }

        public void MoverLaCola()
        {
        }

        public override void Presentarse()
        {
            int edad = (int)(DateTime.Today - _nacimiento).TotalDays / 365;
            Console.WriteLine($"Hola, soy {_nombre} y tengo {edad * 7} años");
        }
    }
}