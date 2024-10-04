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

document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el bloque de texto de la fecha
    const padres = document.querySelector('.padres');

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
        if (isInViewport(padres)) {
            padres.classList.add('visible'); // Añade la clase "visible" cuando el elemento es visible
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

document.getElementById("musica-fondo").volume = 0.2; 


// Selecciona el botón y el audio
const playButton = document.getElementById("playMusicBtn");
const audio = document.getElementById("musica-fondo");

// Evento para reproducir o pausar la música cuando se hace clic en el botón
playButton.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();  // Reproducir música
        playButton.textContent = "💌"; 
    } else {
        audio.pause();  // Pausar música
        playButton.textContent = "💌";  
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector(".fondo-img");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            image.classList.add("show"); // Añade la clase para el fade in
          }
        });
      },
      {
        threshold: 0.1, // Ajusta según cuánto quieres que se vea la imagen antes de empezar el fade in
      }
    );
  
    observer.observe(image); // Observa la imagen
  });
  

  // Función para detectar si un elemento es visible al hacer scroll
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Aplicar la animación cuando los elementos sean visibles
function handleScroll() {
    const items = document.querySelectorAll('.evento');
    items.forEach(item => {
        if (isElementInViewport(item)) {
            item.classList.add('visible');
        }
    });
}

// Detectar el scroll
window.addEventListener('scroll', handleScroll);

// Llamar a la función para la primera carga de la página
handleScroll();
