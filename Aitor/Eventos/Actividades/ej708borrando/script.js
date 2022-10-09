// (ej708borrando) :
/* -Añade un evento a la lista de modo que al pulsar sobre una imagen, ésta se elimine
  - TIP → con el atributo target podemos acceder al nodo que lanza el evento
  - TIP → para borrar un nodo → removeChild
  - Hay que comprobar que no suceda nada al pulsar entre dos imágenes */

document.querySelector('.grid').addEventListener("click", (e) =>{
  if (e.target.tagName === 'IMG') {
    e.target.parentNode.removeChild(e.target);
  } else{
    e.preventDefault();
  }
}, false);