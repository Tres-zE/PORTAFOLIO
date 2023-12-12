/*=========================== toggler style switcher =========================== */
//escribimos la variable, recordemos que las clases estan el index y las llamamos en el js
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
//agregamos el evento click al boton para abrir y cerrar el menu de opciones del tema
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

//ocultar style - switcher en desplazamiento o en scroll- 
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }  
})

/*=========================== theme colors =========================== */
//escribimos la variable, recordemos que las clases estan el index y las llamamos en el js
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) =>{
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled","true");
        }
    })
}

/*=========================== theme light and dark =========================== */
//lo que vamos a hacer es borrar el fa-moon del index
//escribimos la variable, recordemos que las clases estan el index y las llamamos en el js
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    //cambiamos los iconos
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load", () => {
    //cambiamos el color por defecto, agregamos la clase "dark" en el body del index solo para prueba
    if(document.body.classList.contains("dark")){
        //si esta activo el modo oscuro lo desactivamos, "i" es la etiqueta
        dayNight.querySelector("i").classList.add("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})