'use strict';

const tabla = document.querySelector('#tbl_idiomas tbody');
const input_filtro = document.querySelector('#txtfiltro');
let idiomas=listar_idiomas();

let mostrar_datos = () => {
    let filtro=input_filtro.value;
    tabla.innerHTML='';

    for (let i = 0; i< idiomas.length; i++) {
     if (idiomas[i]['idioma'].toLowerCase().includes(filtro.toLowerCase())) {
       let fila=tabla.insertRow();

       fila.insertCell().innerHTML =idiomas[i]['idioma'];
       fila.insertCell().innerHTML = idiomas[i]['codigo_iso'];
       

       let imagen=document.createElement('img');
       imagen.classList.add('imgtabla');
       if (idiomas[i]['imagen']) {
           imagen.src=idiomas[i]['imagen']
       } else {
           imagen.src='./imgs/imgph.jpg';
       }
       fila.insertCell().appendChild(imagen);

       let celda_configuracion = fila.insertCell();

       // Creación del botón de editar
       let boton_editar = document.createElement('a');
       boton_editar.textContent = 'Editar';
       boton_editar.href = `actualizar_idioma.html?id_idioma=${idiomas[i]['_id']}`;

       celda_configuracion.appendChild(boton_editar);
    }    
    }
    


}
mostrar_datos();     
input_filtro.addEventListener('keyup',mostrar_datos);