
// console.log(typeof (typeof 1));

// console.log(parseInt("a"));

// if (1 === parseInt("1")) {
//     console.log("mismo tipo de datos");
// }

// let diaDeLaSemana = 9;
// switch (diaDeLaSemana) {
//     case 1:
//         console.log("El día es domingo");
//         break;
//     case 2:
//         console.log("El día es lunes");
//         break;
//     case 3:
//         console.log("El día es martes");
//         break;
//     case 4:
//         console.log("El día es miércoles");
//         break;
//     case 5:
//         console.log("El día es jueves");
//         break;
//     case 6:
//         console.log("El día es viernes");
//         break;
//     case 7:
//         console.log("El día es sábado");
//         break;
//     default:
//         console.log("El día es incorrecto");
// }


function operar(operacion, a, b) {
    console.log("a continuación se va a proceder a realizar la operación");
    return operacion(a, b);
}

const multiplicar = function (x, y) {
    console.log("multiplicando...");
    return x * y;
};

const sumar = function (x, y) {
    console.log("sumando...");
    return x + y;
};

const restar = function (x, y) {
    console.log("restando...");
    return x - y;
}

const dividir = function (x, y) {
    console.log("dividiendo...");
    return x / y;
}

// console.log(operar(restar, 4, 5));
console.log(operar((a, b) => a + b, 3, 4));

function operar1(a, b, operacion) {
    console.log("a continuación se va a proceder a realizar la operación");
    switch (operacion) {
        case "sumar":
            return a + b;
            break;
        case "multiplicar":
            return a * b;
            break;
        case "restar":
            return a - b;
            break;
        default:
            break;
    }
}

// Nominal
function cuadrado4(x) {
    return x * x;
}

// Anónima
const cuadrado3 = function (x) {
    return x * x;
}

// Flecha
const cuadrado2 = (x) => {
    return x * x;
}

// Flecha con 1 sentencia
const cuadrado1 = (x) => x * x;
const suma = (a, b) => a + b;

// Flecha con 1 sentencia sin () porque tiene 1 solo parámetro
const cuadrado = x => x * x;

console.log(cuadrado1(3)); // 9