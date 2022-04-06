//Variables 
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
let articuloCarrito = [];

//Eventos
cargarEventListeners();

function cargarEventListeners() {
    listaCursos.addEventListener('click', agregarCurso);


    //Elimina cursos de carrito
    carrito.addEventListener('click', eleminaCurso);

    //Vaciar carrito
    vaciarCarrito.addEventListener('click', () => {
        articuloCarrito = [];
        limpiarHTML();
    });
}

//Funciones
function agregarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }

}

//Elimina un curso de carrito
function eleminaCurso(e) {

    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        //Elimina del arreglo
        articuloCarrito = articuloCarrito.filter(curso => curso.id !== cursoId);

        carritoHTML();
    }
}

//Leer el contenid de html
function leerDatosCurso(curso) {
    // console.log(curso);

    //Crear Un Objeto
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //Revisa si ya existe
    const existe = articuloCarrito.some(curso => curso.id === infoCurso.id);
    if (existe) {
        const cursos = articuloCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        });
        articuloCarrito = [...cursos];
    } else {
        //agregar datos al carrito
        articuloCarrito = [...articuloCarrito, infoCurso];

    }
    console.log(articuloCarrito);

    carritoHTML();
}



function carritoHTML() {
    limpiarHTML();

    articuloCarrito.forEach(curso => {
        const row = document.createElement('tr');
        const { imagen, titulo, precio, id, cantidad } = curso;
        row.innerHTML = `
        <td>
        <img src="${imagen}" width="100">
        </td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
          <a href="#" class="borrar-curso" data-id="${id}">X</a>
        </td>
         
`

        contenedorCarrito.appendChild(row);
    });
}

function limpiarHTML() {
    // contenedorCarrito.innerHTML = '';

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}