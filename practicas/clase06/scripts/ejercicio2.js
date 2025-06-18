// Una profesora guarda las notas de sus alumnos en un array.
// Cada nota es un número entre 0 y 10.
// Necesitás escribir un programa que:
// Calcule el promedio de las notas.
// Cuente cuántos alumnos aprobaron (nota mayor o igual a 6).
// Encuentre la nota más alta y la más baja.

const notas = [7, 5, 3, 7, 8, 9, 6, 10];
const NOTA_MINIMA_PARA_APROAR = 6;

function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}

function contarAprobados(notas) {
    let contador = 0;
    for (let i = 0; i < notas.length; i++) {
        let nota = notas[i];
        if (nota >= NOTA_MINIMA_PARA_APROAR) {
            contador++;
        }
    }
    return contador;
}

function obtenerNotaMasBaja(notas) {
    let min = notas[0];
    for (let i = 1; i < notas.length; i++) {
        if (notas[i] < min) {
            min = notas[i];
        }
    }
    return min;
}

function obtenerNotaMasAlta(notas) {
    let max = notas[0];
    for (let i = 1; i < notas.length; i++) {
        if (notas[i] > max) {
            max = notas[i];
        }
    }
    return max;
}

function obtenerElIndiceDelPrimerNumeroPar(notas) {
    let i = 0;
    let encontreNotaPar = false;
    do {
        let nota = notas[i];
        encontreNotaPar = nota % 2 == 0;
        i++;
    } while (encontreNotaPar == false && i < notas.length);
    return i;
}


function obtenerElIndiceDelPrimerNumeroPar(notas) {
    for (let i = 1; i < notas.length; i++) {
        let nota = notas[i];
        if (nota % 2 == 0) {
            return i;
        }
    }
    return -1;
}

console.log("El promedio es: " + calcularPromedio(notas));
console.log("Las notas aprobadas son: " + contarAprobados(notas));
console.log("La nota mas baja es: " + obtenerNotaMasBaja(notas));
console.log("La nota mas alta es: " + obtenerNotaMasAlta(notas));