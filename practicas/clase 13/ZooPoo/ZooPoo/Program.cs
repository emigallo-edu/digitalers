// See https://aka.ms/new-console-template for more information
using ZooPoo.Entidades;


List<Animal> animales = new List<Animal>();
animales.Add(new Perro("Lola", new DateTime(2020, 4, 2), "Mestiza", "Soga"));
animales.Add(new Perro("Coco", new DateTime(2010, 4, 2), "Callejero", "Juegue"));
animales.Add(new Perro("Cheddar", new DateTime(2010, 4, 2), "Caniche", "Pelota"));

animales.Add(new Gato("Pita", new DateTime(2018, 3, 9), "Mestiza", "Ratoncito"));

animales.Add(new Cotorra(new DateTime(2018, 3, 9), "Verde"));

foreach (Animal animal in animales)
{
    animal.Comunicarse();
}