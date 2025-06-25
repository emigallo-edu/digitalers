document.addEventListener("DOMContentLoaded", (event) => {
    const parrafo = document.getElementById('parrafo');
    parrafo.innerText = "Esto es una prueba desde JS";
    crearTabla();
});

function cambiarTexto(idParrafo) {
    const parrafo = document.getElementById(idParrafo)
    parrafo.innerText = "Nuevo valor";
}

function cambiarColor(idParrafo) {
    const parrafo = document.getElementById(idParrafo)
    parrafo.style.color = "red";
}

function agregarItem(idLista) {
    // creamos el nuevo elemento
    const elemento = document.createElement('li');

    // le asignamos un texto al nuevo elemento
    elemento.innerText = "Nuevo ítem";

    // obtener el contenedor donde vamos a agregar el nuevo elemento
    const contenedor = document.getElementById(idLista);

    // agregamos el nuevo elemento al contenedor
    contenedor.appendChild(elemento);
}

let contador = 0;
function incrementar(idParrafo) {
    contador++;
    document.getElementById(idParrafo).innerText = contador;
}

function reiniciar(idParrafo) {
    contador = 0;
    document.getElementById(idParrafo).innerText = contador;
}

function cambiarColor() {
    const botones = document.getElementsByTagName("button");
    for (const btn of botones) {
        btn.style.color = "green";
    }
}

const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 30 },
    { nombre: "María", edad: 22 },
    { nombre: "Carla", edad: 27 }
];

function crearTabla() {
    const tabla = document.createElement("table");
    tabla.border = "1";

    // Crear encabezados
    const encabezado = tabla.insertRow();
    const celdaNombre = encabezado.insertCell();
    celdaNombre.innerText = "Nombre";
    const celdaEdad = encabezado.insertCell();
    celdaEdad.innerText = "Edad";
    const vacio = encabezado.insertCell();
    vacio.innerText = "vacio";

    // Agregar filas con datos
    personas.forEach(persona => {
        const fila = tabla.insertRow();
        const celdaNombre = fila.insertCell();
        celdaNombre.innerText = persona.nombre;
        const celdaEdad = fila.insertCell();
        celdaEdad.innerText = persona.edad;
        celdaEdad.style.backgroundColor = "red";
    });

    // Insertar tabla al body
    document.body.appendChild(tabla);
}

