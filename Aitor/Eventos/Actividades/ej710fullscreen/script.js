/* (ej710fullscreen) :
- Añade los manejadores mediante un evento de carga
- Añade un evento a la imagen para que al hacer click, cargue la imagen en alta resolución en la capa overlay.
- Al cargar la imagen, la capa overlay pondrá su atributo display a block
- La imagen tendrá la clase CSS bgImg */

function altaResolucion(e) {
    let capa = document.querySelector('.overlay');
    capa.innerHTML="<img class='bgImg' src='" + e.target.src + "'>";
    capa.style.display= "block";
}

window.onload = function () {
    document.querySelector('.preview').addEventListener('click', altaResolucion);
}