
//ej601
let mainDom = document.getElementById("main");
let enlacesDom = document.getElementsByTagName("a");
let enlacesMainDom = mainDom.getElementsByTagName("a");
console.log(mainDom);
console.log(enlacesDom);
console.log(enlacesMainDom[0]);

//ej602
//a)
let parrafosArticle = mainDom.getElementsByTagName("p");
let primerParrafoArticle1 = parrafosArticle[0];
let primerParrafoArticle2 = mainDom.childNodes[3];
console.log(primerParrafoArticle1);
console.log(primerParrafoArticle2);
//b)
let menu = document.getElementsByClassName("group");
let listaMenu = menu[0].getElementsByTagName("li");
let artistas = listaMenu[1].firstChild;
//let artistas2 = document.header.nav.ol.childNodes[1];
console.log(artistas);
//console.log(artistas2);
//c)
let nodosParrafo2Main = parrafosArticle[1].childNodes;
console.log(nodosParrafo2Main[2]);

//ej603
let mainJQuery = document.querySelector('#main');
let enlacesJQuery = document.querySelectorAll('a');
let enlacesMainJQuery = mainJQuery.querySelectorAll('a');
let enlacesMainJQuery2 = document.querySelector('p > a');
console.log(mainJQuery);
console.log(enlacesJQuery);
console.log(enlacesMainJQuery[0]);
console.log(enlacesMainJQuery2);
let parrafosArticleJQuery = mainJQuery.querySelectorAll('p');
console.log(parrafosArticleJQuery[0]);
let artistasJQuery = enlacesJQuery.item(1);
console.log(artistasJQuery);
let nodoParrafo2MainJQuery = parrafosArticleJQuery[1].childNodes;
console.log(nodoParrafo2MainJQuery[2]);
