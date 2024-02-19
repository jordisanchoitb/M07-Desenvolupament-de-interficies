function init() {
    // Pruebas funciones todos
    let arrayTodosString = ["Hola", "Adios", "Buenos dias"];
    let arrayTodosPares = [2, 4, 6, 8, 10];
    monstrarResultado("result_todos1", "Todos string array utilizada:<br> " + arrayTodosString, todosString(arrayTodosString));
    monstrarResultado("result_todos2", "Todos pares array utilizada:<br> " + arrayTodosPares, todosPares(arrayTodosPares));

    let arrayTodosString2 = ["Hola", "Adios", "Buenos dias", 1];
    let arrayTodosPares2 = [2, 4, 6, 8, 10, 11];
    monstrarResultado("result_todos1", "Todos string array utilizada:<br> " + arrayTodosString2, todosString(arrayTodosString2));
    monstrarResultado("result_todos2", "Todos pares array utilizada:<br> " + arrayTodosPares2, todosPares(arrayTodosPares2));

    // Pruebas funciones al menos uno
    let arrayAlMenosUnoMayorDos = ["Hola", "Adios", "Buenos dias"];
    let arrayAlMenosUnoPar = [2, 4, 6, 8, 10];
    monstrarResultado("result_almenosuno1", "Al menos uno mayor dos array utilizada:<br> " + arrayAlMenosUnoMayorDos, alMenosUnoMayorDos(arrayAlMenosUnoMayorDos));
    monstrarResultado("result_almenosuno2", "Al menos uno par array utilizada:<br> " + arrayAlMenosUnoPar, alMenosUnoPar(arrayAlMenosUnoPar));

    let arrayAlMenosUnoMayorDos2 = ["Hola", "Adios", "Buenos dias", 1];
    let arrayAlMenosUnoPar2 = [2, 4, 6, 8, 10, 11];
    monstrarResultado("result_almenosuno1", "Al menos uno mayor dos array utilizada:<br> " + arrayAlMenosUnoMayorDos2, alMenosUnoMayorDos(arrayAlMenosUnoMayorDos2));
    monstrarResultado("result_almenosuno2", "Al menos uno par array utilizada:<br> " + arrayAlMenosUnoPar2, alMenosUnoPar(arrayAlMenosUnoPar2));

    // Pruebas funciones transforma
    let arrayLongitudString = ["Hola", "Adios", "Buenos dias"];
    let arrayMultiplica = [2, 4, 6, 8, 10];
    monstrarResultado("result_transforma1", "Longitud string array utilizada:<br> " + arrayLongitudString, longitudString(arrayLongitudString));
    monstrarResultado("result_transforma2", "Multiplica array utilizada:<br> " + arrayMultiplica, multiplica(arrayMultiplica, 2));

    // Pruebas funciones filtro
    let arrayEmpiezaZ = ["Zapato", "Adios", "Buenos dias"];
    let arrayMultiplosCinco = [2, 4, 6, 8, 10];
    monstrarResultado("result_filtro1", "Empieza Z array utilizada:<br> " + arrayEmpiezaZ, empiezaZ(arrayEmpiezaZ));
    monstrarResultado("result_filtro2", "Multiplos cinco array utilizada:<br> " + arrayMultiplosCinco, multiplosCinco(arrayMultiplosCinco));

    // Pruebas funciones busca
    let arrayMayorCinco = ["Zapato", "Adios", "Buenos dias"];
    let arrayEmpiezaP = ["Zapato", "Adios", "Buenos dias"];
    let arrayEmpiezaT = ["Zapato", "Adios", "Buenos dias"];
    let arrayUltimoPar = [2, 4, 6, 8, 10];

    monstrarResultado("result_busca1", "Mayor cinco array utilizada:<br> " + arrayMayorCinco, mayorCinco(arrayMayorCinco));
    monstrarResultado("result_busca2", "Empieza P array utilizada:<br> " + arrayEmpiezaP, empiezaP(arrayEmpiezaP));
    monstrarResultado("result_busca3", "Empieza T array utilizada:<br> " + arrayEmpiezaT, empiezaT(arrayEmpiezaT));
    monstrarResultado("result_busca4", "Ultimo par array utilizada:<br> " + arrayUltimoPar, ultimoPar(arrayUltimoPar));

    // Pruebas funciones acumula
    let arraySuma = [2, 4, 6, 8, 10];
    let arrayResta = [2, 4, 6, 8, 10];
    let arrayRestaUltimo = [2, 4, 6, 8, 10];
    
    monstrarResultado("result_acumula1", "Suma array utilizada:<br> " + arraySuma, suma(arraySuma));
    monstrarResultado("result_acumula2", "Resta array utilizada:<br> " + arrayResta, resta(arrayResta));
    monstrarResultado("result_acumula3", "Resta ultimo array utilizada:<br> " + arrayRestaUltimo, restaUltimo(arrayRestaUltimo));

}

function monstrarResultado(id, prueba, resultado) {
    document.getElementById(id).innerHTML += "<b>Prueba: </b>" + prueba + "<br><b>Resultado:</b> " + resultado + "<br><br>";
}

// Funcion 1 Todos
// Funcion que recibe un array y que comprueba si todos los elementos de una array son de tipo String. Si es que sí devuelve true en caso contrario false.
function todosString(array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "string") {
            return false;
        }
    }
    return true;
}

// Funcion 2 Todos
// Función que recibe un array y que comprueba que todos los elementos de una array son pares. Si es que sí devuelve true en caso contrario false.
function todosPares(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            return false;
        }
    }
    return true;
}

// Funcion 1 Al menos uno
// Función que recibe un array y que comprueba si al menos un elemento del array tiene una longitud mayor que dos. Si es que sí devuelve true en caso contrario false.
function alMenosUnoMayorDos(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > 2) {
            return true;
        }
    }
    return false;
}

// Funcion 2 Al menos uno
// Función que recibe un array y que comprueba si al menos un número es par. Si es que sí devuelve true en caso contrario false.
function alMenosUnoPar(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            return true;
        }
    }
    return false;
}

// Funcion 1 Transforma
// Función que recibe un array y que devuelve un nuevo array con la longitud de cada string que hay dentro del array.
function longitudString(array) {
    let arrayLongitud = [];
    for (let i = 0; i < array.length; i++) {
        arrayLongitud.push(array[i].length);
    }
    return arrayLongitud;
}

// Funcion 2 Transforma
// Función que recibe un array y un número y que devuelve todos los elementos del array multiplicado por dicho número pasado por  parámetro.
function multiplica(array, numero) {
    let arrayMultiplicado = [];
    for (let i = 0; i < array.length; i++) {
        arrayMultiplicado.push(array[i] * numero);
    }
    return arrayMultiplicado;
}

// Funcion 1 Filtro
// Función que recibe un array y que devuelve un nuevo array con solo los elementos que empiezan por Z.
function empiezaZ(array) {
    let arrayZ = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].charAt(0) === "Z") {
            arrayZ.push(array[i]);
        }
    }
    return arrayZ;
}

// Funcion 2 Filtro
// Función que recibe un array y que devuelve un nuevo array con solo los elementos que sean múltiplos de 5.
function multiplosCinco(array) {
    let arrayMultiplos = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 5 === 0) {
            arrayMultiplos.push(array[i]);
        }
    }
    return arrayMultiplos;
}

// Funcion 1 Busca
// Función que recibe un array y que devuelve el primer elemento cuyo tamaño sea superior o igual a 5.
function mayorCinco(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].length >= 5) {
            return array[i];
        }
    }
}

// Funcion 2 Busca
// Función que recibe un array y que devuelve el último elemento que empieza por P.
function empiezaP(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i].charAt(0) === "P") {
            return array[i];
        }
    }
}

// Funcion 3 Busca
// Función que recibe un array y que devuelve la posición del primer elemento que empieza por T.
function empiezaT(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].charAt(0) === "T") {
            return i;
        }
    }
}

// Funcion 4 Busca
// Función que recibe un array y que devuelve el último elemento par.
function ultimoPar(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] % 2 === 0) {
            return array[i];
        }
    }
}

// Funcion 1 Acumula
// Función que recibe un array y que devuelve la suma de todos sus elementos.
function suma(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

// Funcion 2 Acumula
// Función que recibe un array y que devuelve la resta del primer elemento menos el segundo y así sucesivamente.
function resta(array) {
    let resta = array[0];
    for (let i = 1; i < array.length; i++) {
        resta -= array[i];
    }
    return resta;
}

// Funcion 3 Acumula
// Función que recibe un array y que devuelve la resta del último elemento menos el penúltimo y así sucesivamente.
function restaUltimo(array) {
    let resta = array[array.length - 1];
    for (let i = array.length - 2; i >= 0; i--) {
        resta -= array[i];
    }
    return resta;
}

