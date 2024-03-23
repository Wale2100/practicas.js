const TOGGLE = document.getElementById("toggleList");
const LIST = document.querySelector(".list");

const input = document.querySelector("input");
const p = document.querySelector("p.pixelpro");
const button = document.querySelector("button");

TOGGLE.addEventListener("click", () => {

    if (LIST.style.display == "none") {
        TOGGLE.textContent = "oculta la lista"
        LIST.style.display = "block";
    } else {
        TOGGLE.textContent = "Muestra el contenido"
    LIST.style.display = "none";
    }
});

button.addEventListener("click", () => {
    p.textContent = input.value + ":";
});