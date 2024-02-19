function init() {
    
}

function comprobarContrasenya() {
    const min = 8;
    const max = 20;
    const caracterEspeciales = ["!", "#", "$", "%", "&", "¡", "*", "-", "_"];

    let divresultado = document.getElementById("resultado");
    let pass = document.getElementById("pass").value;

    if (comprobarLongitud(pass, min, max) && comprobarMayusculas(pass, caracterEspeciales) && comprobarMinusculas(pass, caracterEspeciales) && comprobarDigitos(pass) && comprobarCaracterEspecial(pass, caracterEspeciales) && comprobarEspacios(pass) && comprobarCaracteresRepetidos(pass)) {
        divresultado.innerHTML = "";
        CrearDiv(divresultado, "Contraseña correcta", "correcto");
    } else {
        divresultado.innerHTML = "";
        if (!comprobarLongitud(pass, min, max)) {
            CrearDiv(divresultado, "La contraseña debe tener entre 8 y 20 caracteres", "restricciones");
        }
        if (!comprobarMayusculas(pass, caracterEspeciales)) {
            CrearDiv(divresultado, "La contraseña debe tener al menos una mayúscula", "restricciones");
        }
        if (!comprobarMinusculas(pass, caracterEspeciales)) {
            CrearDiv(divresultado, "La contraseña debe tener al menos dos minúsculas", "restricciones");
        }
        if (!comprobarDigitos(pass)) {
            CrearDiv(divresultado, "La contraseña debe tener al menos un dígito", "restricciones");
        }
        if (!comprobarCaracterEspecial(pass, caracterEspeciales)) {
            CrearDiv(divresultado, "La contraseña debe tener al menos un caracter especial (!,#,$,%,¡,*,-,_)", "restricciones");
        }
        if (!comprobarEspacios(pass)) {
            CrearDiv(divresultado, "La contraseña no puede tener espacios", "restricciones");
        }
        if (!comprobarCaracteresRepetidos(pass)) {
            CrearDiv(divresultado, "La contraseña no puede tener tres caracteres iguales seguidos", "restricciones");
        }
    }
}

function comprobarLongitud(pass, min, max) {
    if (pass.length >= min && pass.length <= max) {
        return true;
    } else {
        return false;
    }
}

function comprobarMayusculas(pass, caracterEspeciales) {
    let count = 0;
    for (let i = 0; i < pass.length; i++) {
        if (pass.charAt(i) == pass.charAt(i).toUpperCase() && !(comprobarDigitos(pass.charAt(i))) && !(comprobarCaracterEspecial(pass.charAt(i), caracterEspeciales))) {
            count++;
        }
    }
    if (count >= 1) {
        return true;
    }
    return false;
}

function comprobarMinusculas(pass, caracterEspeciales) {
    let count = 0;
    for (let i = 0; i < pass.length; i++) {
        if (pass.charAt(i) == pass.charAt(i).toLowerCase() && !(comprobarDigitos(pass.charAt(i))) && !(comprobarCaracterEspecial(pass.charAt(i), caracterEspeciales))) {
            count++;
        }
    }
    if (count >= 2) {
        return true;
    }
    return false;
}

function comprobarDigitos(pass) {
    let count = 0;
    for (let i = 0; i < pass.length; i++) {
        if (!isNaN(pass.charAt(i))) {
            count++;
        }
    }
    if (count >= 1) {
        return true;
    }
    return false;
}

function comprobarCaracterEspecial(pass, caracterEspeciales) {
    for (let i = 0; i < pass.length; i++) {
        for (let j = 0; j < caracterEspeciales.length; j++) {
            if (pass.charAt(i) == caracterEspeciales[j]) {
                return true;
            }
        }
    }
    return false;
}

function comprobarEspacios(pass) {
    for (let i = 0; i < pass.length; i++) {
        if (pass.charAt(i) == " ") {
            return false;
        }
    }
    return true;
}

function comprobarCaracteresRepetidos(pass) {
    for (let i = 0; i < pass.length - 2; i++) {
        if (pass.charAt(i) == pass.charAt(i + 1) && pass.charAt(i) == pass.charAt(i + 2)) {
            return false;
        }
    }
    return true;
}

function CrearDiv(divcontenedor, Texto, className) {
    let div = document.createElement("div");
    let textnum = document.createTextNode(Texto);
    div.appendChild(textnum);
    div.className = className;
    div.style.width = 260 + "px";
    divcontenedor.appendChild(div);
}