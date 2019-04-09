"use strict";
let mostrar_datos = () => {
    let tabla = document.querySelector("#tbl_material tbody");
    let material = listar_materiales();


    for (let index = 0; index < material.length; index++){
        let fila = tabla.insertRow();
        let nombre_de_la_institucion = fila.insertCell();
        let descripcion = fila.insertCell();

        nombre_de_la_institucion.innerHTML = padre[index]["nombre_de_la_institucion"];
        descripcion.innerHTML = padre[index]["descripcion"];
    }
}
mostrar_datos();
