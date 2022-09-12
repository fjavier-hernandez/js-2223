document.querySelector('.grid').addEventListener('mouseover', function(e) {
  if (e.target.tagName === 'IMG') {


  } // check to see that I clicked on IMG only
}, false); // click event

document.querySelector('.grid').addEventListener("click", (e) =>{
  if (e.target.tagName === 'IMG') {
    e.target.parentNode.removeChild(e.target);
  } else{
    e.preventDefault();
  }
}, false);