'use strict';

const tabla = document.querySelector('#tbl_contacto tbody');
const inputFiltro = document.querySelector('#buscar_contacto');
const id_institucion = sessionStorage.getItem('id_lugar');
const idlog = sessionStorage.getItem('idu');

let contacto = listar_contacto();

mostrar_datos();

inputFiltro.addEventListener('keyup' , mostrar_datos);

function mostrar_datos(){
  let contacto = listar_contacto();
  let filtro = inputFiltro.value;
  tabla.innerHTML='';

  for(let i = 0; i <contacto.length; i++){
    if(contacto[i]['nombre'].toLowerCase().includes(filtro.toLowerCase()) && id_institucion == contacto[i]['id_institucion']){
    let fila = tabla.insertRow();

      fila.insertCell().innerHTML = contacto[i]['nombre'];
      fila.insertCell().innerHTML = contacto[i]['id'];
      fila.insertCell().innerHTML = contacto[i]['departamento'];
      fila.insertCell().innerHTML = contacto[i]['telefono'];
      fila.insertCell().innerHTML = contacto[i]['correo'];
      fila.insertCell().innerHTML = contacto[i]['extension'];
      let imagen = document.createElement('img');
      imagen.classList.add('imagenTabla');
      if(contacto[i]['imagen']){
        imagen.src = contacto[i]['imagen'];
      }else{
        imagen.src = './imgs/imgph.jpg';
      }
      fila.insertCell().appendChild(imagen);

      let celda_configuracion = fila.insertCell();

      let boton_editar = document.createElement('a');
      boton_editar.textContent ='Editar';
      boton_editar.href=`actualizar_contacto.html?id_contacto=${contacto[i]['_id']}`

      celda_configuracion.appendChild(boton_editar);


      }

    };
  };

  mostrar_datos();
