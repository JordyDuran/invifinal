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
