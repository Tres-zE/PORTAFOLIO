/*=========================== toggler style switcher =========================== */
//escribimos la variable, recordemos que las clases estan el index y las llamamos en el js
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
//agregamos el evento click al boton para abrir y cerrar el menu de opciones del tema
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})