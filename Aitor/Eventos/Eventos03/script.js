/* (ej710fullscreen) :
- Añade los manejadores mediante un evento de carga
- Añade un evento a la imagen para que al hacer click, cargue la imagen en alta resolución en la capa overlay.
- Al cargar la imagen, la capa overlay pondrá su atributo display a block
- La imagen tendrá la clase CSS bgImg */

function altaResolucion(e) {
    console.log(e.target);
    let imagen = e.target;
    if (e.target.tagName === 'IMG') {
        e.target.parentNode.removeChild(e.target);
        console.log(document.querySelector('.overlay').innerHTML);
        document.querySelector('.overlay').innerHTML=imagen;
        console.log(document.querySelector('.overlay').innerHTML);
        // document.querySelector('.overlay').display='block';
        // e.target.class='bgImg';
    }

}

window.onload = function () {
    document.querySelector('.preview').addEventListener('click', altaResolucion);
}