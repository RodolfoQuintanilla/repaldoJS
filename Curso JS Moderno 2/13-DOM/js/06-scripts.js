const tulo = document.querySelector('.contenido-hero h1');
console.log(tulo);

//console.log(tulo.innerText);
//console.log(tulo.textContent);
//console.log(tulo.innerHTML);

const nuevohi = 'nuevo hu'
document.querySelector('.contenido-hero h1').textContent = nuevohi;

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';