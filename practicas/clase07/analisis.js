/* dd/mm/aaaa
aaaa/mm/dd
mm/dd/aaaa
dd-mm-aaaa
ddaammaa
*/

// Pruebas
// let fechas = ["algo", "15/06/2024", "12/01/2023", "01/03/2022", "31/01/2020", "2021/11/05",
//     "29/02/2020", "1999/07/15", "14/08/2023", "2024-04-30", "2024/15/06", "31/02/2024",
//     "99/99/9999", "abc-def-ghi", "12-13-2021", "2020/00/10","17/a/2024"]

let fechas = ["29/02/2020"];
for (let fecha of fechas) {
    console.log(fecha + " - " + validarFecha(fecha))
}

// dd/MM/yyyy, MM/dd/yyyy
function validarFecha(fecha) {
    const componentes = fecha.split("/");
    if (verificarQueLaFechaTengaTodosLosComponentes(componentes) != "") {
        return verificarQueLaFechaTengaTodosLosComponentes(componentes);
    }

    if (verificarQueLosComponentesSeanNumeros(componentes) != "") {
        return verificarQueLosComponentesSeanNumeros(componentes);
    }

    if (verificarPosicionesDeCadaComponente(componentes) != "") {
        return verificarPosicionesDeCadaComponente(componentes);
    }

    return "La fecha está correcta";
}

function verificarQueLaFechaTengaTodosLosComponentes(componentes) {
    // Verificamos que tenga todos los componentes (dd mm aaaa)
    if (componentes.length != 3) {
        return "La fecha no tiene las 3 componentes";
    }
    return "";
}

function verificarQueLosComponentesSeanNumeros(componentes) {
    // Que cada componente sea numérico
    let indice = 0;
    let isNumerico = false;
    do {
        isNumerico = esNumero(componentes[indice]);
        indice++;
    } while (indice < componentes.length && isNumerico);

    if (isNumerico == false) {
        return "Al menos uno de los componentes no es un número";
    }

    return "";
}

function verificarPosicionesDeCadaComponente(componentes) {
    // Que sea dd/MM o MM/dd y que el año esté en la 3ra posición
    if (verificarAnioTieneValorValido(componentes[2]) == "") {
        // Si entra es porque el año es válido

        // Verificamos si es dd/MM
        if (verificarDiaTieneValorValido(componentes[0]) == "" && verificarMesTieneValorValido(componentes[1]) == "") {
            // Si entra es porque es dd/MM
            return "";
        }

        // Verificamos si es MM/dd
        if (verificarDiaTieneValorValido(componentes[1]) == "" && verificarMesTieneValorValido(componentes[0]) == "") {
            // Si entra es porque es MM/dd
            return "";
        }
        return "El día o el mes no son válidos";
    }
    return "El año no es válido";
}

function verificarDiaTieneValorValido(anio, mes, dia) {
    // dd entre 1 y 31 (considerar el año biciesto y los meses que tienen 30 días)
    let diasFebrero = 28;
    if (esBiciesto(anio)) {
        diasFebrero = 29;
    }
    const diasPorMes = [31, diasFebrero, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const diasDelMesSeleccionado = diasPorMes[mes - 1];
    if (dia > 0 && dia <= diasDelMesSeleccionado) {
        return "";
    }
    return "El día del mes tiene un valor no esperado";
}

function verificarMesTieneValorValido(mes) {
    // MM entre 1 y 12
    if (mes >= 1 && mes <= 12) {
        return "";
    }
    return "El mes tiene un valor no esperado";
}

function verificarAnioTieneValorValido(anio) {
    // YYYY > 1000
    if (anio >= 1000 && anio <= 3000) {
        return "";
    }
    return "El año tiene un valor no esperado";
}

// Función auxiliar para validar si un string es numérico
function esNumero(cadena) {
    for (let i = 0; i < cadena.length; i++) {
        const c = cadena[i];
        if (c < '0' || c > '9') {
            return false;
        }
    }
    return cadena.length > 0;
}

function esBiciesto(anio) {
    return (anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0;
}

// console.log(verificarDiaTieneValorValido(2025, 4, 31));