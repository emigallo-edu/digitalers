// // 1. Definir la mayoría de edad
// const EDAD_MINIMA = 18;

// // 2. Saber que fecha es hoy
// const fechaHoy = new Date();

// // 3. Pedirle al usuario la fecha de nacimiento
// const dia = prompt("Ingresá el día del mes en el que naciste");
// const mes = prompt("Ingresá el mes del año en el que naciste");
// const año = prompt("Ingresá el año en el que naciste");

// // 4. Calcular la fecha de nacimiento
// const fechaNacimiento = new Date(año, mes - 1, dia);

// // 5. Comparar la fecha de nacimiento con la mayoría de edad
// const edadEnMilisegundos = fechaHoy - fechaNacimiento;
// const edadEnAñios = ((((edadEnMilisegundos / 1000) / 60) / 60) / 24) / 365.25;

// // 6. Mostrar un mensaje indicando si es mayor de edad o no
// if (edadEnAñios >= EDAD_MINIMA) {
//     alert("Estás habilitado para ingresar el sistema");
// } else {
//     alert("No estás habilitado para ingresar en el sistema");
// }

function pedirDatosNacimiento() {
    // 3. Pedirle al usuario la fecha de nacimiento
    const dia = prompt("Ingresá el día del mes en el que naciste");
    const mes = prompt("Ingresá el mes del año en el que naciste");
    const año = prompt("Ingresá el año en el que naciste");

    // 4. Calcular la fecha de nacimiento
    const fechaNacimiento = new Date(año, mes - 1, dia);
    return fechaNacimiento;
}

function calcularEdad(fechaNacimiento) {
    // 2. Saber que fecha es hoy
    const fechaHoy = new Date();

    // 5. Comparar la fecha de nacimiento con la mayoría de edad
    const edadEnMilisegundos = fechaHoy - fechaNacimiento;
    const edadEnAñios = ((((edadEnMilisegundos / 1000) / 60) / 60) / 24) / 365.25;
    return edadEnAñios;
}

function verificarEdad(edad_minima, edadEnAñios) {
    // 6. Mostrar un mensaje indicando si es mayor de edad o no
    if (edadEnAñios >= edad_minima) {
        alert("Estás habilitado para ingresar el sistema");
    } else {
        alert("No estás habilitado para ingresar en el sistema");
    }
}

const EDAD_MINIMA_PARA_INGRESAR = 18;
const fechaNacimiento = pedirDatosNacimiento();
const edadEnAñios = calcularEdad(fechaNacimiento);
verificarEdad(EDAD_MINIMA_PARA_INGRESAR, edadEnAñios);