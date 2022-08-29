var chico = document.querySelector("");
var chica = document.querySelector("");

// Guardamos las rutas de las imagenes
var rutaChico = chico.src;
var rutaChica = chica.src;
// Las intercambiamos
chico.src = rutaChica;
chica.src = rutaChico;
