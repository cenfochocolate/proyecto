'use strict';
const tablaNoticias = document.querySelector('#tbl_noticias tbody');
const inputFiltro = document.querySelector('#buscar_noticia_institucion');

let noticias = listar_noticias();

mostrar_datos();

inputFiltro.addEventListener('keyup' , mostrar_datos);

function mostrar_datos(){
  let noticias = listar_noticias();
  let filtro = inputFiltro.value;
  tablaNoticias.innerHTML='';

  for(let i = 0; i < noticias.length; i++){
    if(noticias[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){
    let fila = tablaNoticias.insertRow();

    fila.insertCell().innerHTML = noticias[i]['nombre'];
    fila.insertCell().innerHTML = noticias[i]['descripcion'];
    let imagen = document.createElement('img');
    imagen.classList.add('imagentablaNoticias');
    if(noticias[i]['imagen']){
      imagen.src = noticias[i]['imagen'];
    }else{
      imagen.src = './imgs/imgph.jpg';
    }
    fila.insertCell().appendChild(imagen);
    }
  };
};

mostrar_datos();
