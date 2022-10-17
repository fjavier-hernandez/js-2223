/* (ej711spinner) :
Antes de cargar la imagen grande, cargar la imagen spinner.gif con clase CSS spinner
- Añadir un evento load a la imagen grande, para que al dispararse elimine el spinner. */

function spinner() {
    let capa = document.querySelector('.overlay');
    capa.innerHTML="<img class='spinner' src='spinner.gif'>";
    evt.stopPropagation();
}


function altaResolucion(e) {
    let capa = document.querySelector('.overlay');
    let spinner = document.querySelector('.spinner');
    spinner.parentNode.removeChild(spinner);
    capa.innerHTML="<img class='bgImg' src='" + e.target.src + "'>";
    capa.style.display = "block";
}

window.onload = function () {
    document.querySelector('.preview').addEventListener('click', spinner,false);
    document.querySelector('.preview').addEventListener('click', altaResolucion,false);
}