function geturl() {
    return window.location.href
}
console.log("Hello World");
console.warn("Hello World");
console.error("Hello World");
/*alert("Cuidado");
let patata = confirm("Quieres jugar?");
console.log(patata);

let nombre = prompt("Cual es tu nombre?");
console.log("El nombre del usuario es:" + nombre);*/

console.log(geturl())

resultado = document.getElementById("Hola");
console.log(resultado.textContent)
resultado.style.color = 'red';
resultado.style.textTransform = "uppercase";

paragrafo = document.getElementById("paragrafo")
paragrafo.innerHTML += "<p>Esto es un parágrafo añadido dentro del parafo</p>"
paragrafo.style.backgroundColor = "black";
paragrafo.style.color = "white";
paragrafo.style.padding = "1rem";
