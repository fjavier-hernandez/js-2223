// (ej709lupa) Pg22 EventosAITOR:
/* Añade los manejadores mediante un evento descarga
- Añade un evento a la lista de modo que al pasar por encima de una imagen, en la capa cuya clase
es preview, se muestre la imagen en grande:
    - pequeña: acaba en _tn
    - grande: quitándole _tn a la pequeña */

function lupa(e) {
    let fuenteImagenes = e.target.src;
    if (e.target.tagName === 'IMG') {
        e.target.src= fuenteImagenes.replace('_tn','');;
      }
}

function quitaLupa(e) {
    let fuenteImagenes = e.target.src;
    if (e.target.tagName === 'IMG') {
        e.target.src= fuenteImagenes.replace('.jpg','_tn.jpg');;
      }
}

window.onload = function () {
    document.querySelector('.grid').addEventListener('mouseover', lupa);
    document.querySelector('.grid').addEventListener('mouseout', quitaLupa);
}