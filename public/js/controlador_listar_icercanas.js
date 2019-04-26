'use strict';

const tabla = document.querySelector('#tbl_ubicacion tbody');
const inputFiltro= document.querySelector('#buscar_institucion');
const provincia = sessionStorage.getItem('provincial');
let usuarios = listar_instituciones();

mostrar_instituciones();

inputFiltro.addEventListener('keyup', mostrar_instituciones);

function mostrar_instituciones(){
  let usuarios = listar_instituciones();
  let filtro=inputFiltro.value;
  tabla.innerHTML='';

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i]['tipo'].includes('institucion') && usuarios[i]['nombre_comercial'].toLowerCase().includes(filtro.toLowerCase()) && usuarios[i]['provincia'].includes(provincia) ) {
      let fila = tabla.insertRow();
      let celdaNombre = fila.insertCell();

      celdaNombre.innerHTML = usuarios[i]['nombre_comercial'];
      celdaNombre.classList.add('botonid');
      celdaNombre.addEventListener('click', function(){

      sessionStorage.setItem('id_lugar', usuarios[i]['_id']);

      window.location.href = 'perfil_institucion.html'
        })

      fila.insertCell().innerHTML = usuarios[i]['grado'];
      fila.insertCell().innerHTML = usuarios[i]['provincia'];
      fila.insertCell().innerHTML = usuarios[i]['canton'];
      fila.insertCell().innerHTML = usuarios[i]['distrito'];


      let imagen = document.createElement('img');
      imagen.classList.add('imagentablainstituciones');
      if (usuarios[i]['url_foto']) {
        imagen.src = usuarios[i]['url_foto'];
      } else {
        imagen.src = './imgs/imgph.jpg';
      }

      fila.insertCell().appendChild(imagen);




    }
  };
};

mostrar_instituciones();
