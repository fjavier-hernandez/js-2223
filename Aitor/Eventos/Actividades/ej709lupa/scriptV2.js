/* document.querySelector('.grid').addEventListener('mouseover', function(e) {
  if (e.target.tagName === 'IMG') {


  } // check to see that I clicked on IMG only
}, false); // click event */

function lupa(e) {
  let sourceImg = e.target.src;
  console.log(sourceImg);
  //sourceImg = sourceImg.replace('_tn','');
}

document.getElementsByClassName('grid').addEventListener('mouseover', lupa);



/* window.onload=function(){
  document.querySelectorAll('img').addEventListener("mouseover", (e) =>{
      let sourceImg = e.target.src;
      console.log(sourceImg);
      sourceImg = sourceImg.replace('_tn','');
  }, false);
} */