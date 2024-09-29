document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el bloque de texto de la fecha
    const fecha = document.querySelector('.fecha');

    // Función para verificar si el elemento está en el viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Agrega el evento scroll para verificar cuando el elemento está en pantalla
    window.addEventListener('scroll', function () {
        if (isInViewport(fecha)) {
            fecha.classList.add('visible'); // Añade la clase "visible" cuando el elemento es visible
        }
    });
});


const frase = "Para siempre es un río que fluye sin detenerse y sin embargo permanece - Mario Benedetti";
const fraseContainer = document.getElementById("frase-benedetti");

const palabras = frase.split(" ");
palabras.forEach((palabra, index) => {
    const span = document.createElement("span");
    span.textContent = palabra;  // Agregar solo la palabra
    span.classList.add("word");
    span.style.animationDelay = `${index * 0.3}s`; // Cada palabra se retrasa 0.5s
    fraseContainer.appendChild(span);

    // Agregar un espacio después de cada palabra
    fraseContainer.appendChild(document.createTextNode(" "));

    // Agregar salto de línea después de las palabras "río", "detenerse", y "permanece"
    if (palabra === "río" || palabra === "detenerse" || palabra === "permanece") {
        const br = document.createElement("br");
        fraseContainer.appendChild(br);
    }
});



