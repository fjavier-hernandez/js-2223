'use strict'
// Ej604.

//a)
let articleImages = document.querySelector("#featuredartists");
let images = articleImages.querySelectorAll('img');
console.log(images);
images.item(1).src = 'images/artists/Barot_Bellingham_tn.jpg';
images.item(0).src = 'images/artists/Constance_Smith_tn.jpg';

//b)
let titulosH2 = document.querySelectorAll('h2');
console.log(titulosH2);
for (let i = 0; i < titulosH2.length; i++) {
    titulosH2[i].translate = 'yes';
    titulosH2[i].style.color = '#FEAB34';
}

//c)
images.item(6).parentNode.removeChild(images.item(6));
images.item(7).parentNode.removeChild(images.item(7));
images.item(8).parentNode.removeChild(images.item(8));
