// See https://aka.ms/new-console-template for more information
using ConsoleApp1;

Console.WriteLine("Hello, World!");
// Una biblioteca quiere llevar el control de los libros disponibles, los socios que los retiran y el historial de préstamos.

// Construccion de los objetos
try
{
    Biblioteca biblioteca = new Biblioteca();
    Libro libro1 = new Libro("Nombre", 021256985475852365, "Autor", "Crimen", 740);
    Libro libro2 = new Libro("Nombre1", 021256758502, "Autor1", "Comedia", 240);

    biblioteca.Agregar(libro1);
    //if (biblioteca.Existe(libro1) == false)
    //{
        biblioteca.Agregar(libro1);
    //}
    biblioteca.Agregar(libro2);
    Socio socio1 = new Socio("Socio 1", 3829382);
    Socio socio2 = new Socio("Socio 2", 2901);


    biblioteca.RetirarLibro(021256985475852365, socio1);
    biblioteca.RetirarLibro(021256758502, socio2);
    var disponibles = biblioteca.ObtenerLibrosDisponibles();

    biblioteca.Devolver(libro1);
    disponibles = biblioteca.ObtenerLibrosDisponibles();
    Console.Write(disponibles.ToString());
}
catch (ElLibroYaExisteException ex)
{
    Console.Write(ex.Message);
}
catch (Exception ex)
{
    Console.Write(ex.Message);
}