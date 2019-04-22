'use strict';
const tabla = document.querySelector('#tbl_pcomercial tbody');
const id_institucion = sessionStorage.getItem('id_lugar');

let pcomercial = listar_pcomercial();

function mostrar_datos ()  {
  

  for (let i = 0; i < pcomercial.length; i++) {
    let pcomercial = listar_pcomercial();

    if (id_institucion == pcomercial[i]['id_institucion']) {

      let fila = tabla.insertRow();

      fila.insertCell().innerHTML = pcomercial[i]['pcomercial'];

      let celda_configuracion = fila.insertCell();

      let boton_editar = document.createElement('a');
      boton_editar.textContent = 'Editar';
      boton_editar.href = `actualizar_pagina_comercial.html?id_pagina=${pcomercial[i]['_id']}`;

      celda_configuracion.appendChild(boton_editar);
    }
  };
};

mostrar_datos();
