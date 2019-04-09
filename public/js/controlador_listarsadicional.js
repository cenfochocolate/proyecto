'use strict';
const tabla = document.querySelector('#tbl_sadicional tbody');
const inputFiltro = document.querySelector('#buscar_sadicional_institucion');
const id_institucion = sessionStorage.getItem('id_lugar');

let sadicional = listar_sadicional();

mostrar_datos();

inputFiltro.addEventListener('keyup' , mostrar_datos);

function mostrar_datos(){
  let sadicional = listar_sadicional();
  let filtro = inputFiltro.value;
  tabla.innerHTML='';

  for(let i = 0; i < sadicional.length; i++){
    if(sadicional[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){
      if(id_institucion == sadicional[i]['id_institucion']){
        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = sadicional[i]['nombre'];
        fila.insertCell().innerHTML = sadicional[i]['descripcion'];
        let imagen = document.createElement('img');
        imagen.classList.add('imagenTabla');
        if(sadicional[i]['imagen']){
          imagen.src = sadicional[i]['imagen'];
        }else{
          imagen.src = './imgs/imgph.jpg';
        }
        fila.insertCell().appendChild(imagen);


      }
    }

  };
};

mostrar_datos();
