"use strict";


const input_filtro = document.querySelector('#txtfitro');
let padre = listar_padres();




let mostrar_datos = () => {
    let tabla = document.querySelector("#tbl_padres tbody");
    let filtro=input_filtro.value;
    tabla.innerHTML='';

    for (let index = 0; index < padre.length; index++) {
        if (padre[index]['nombre'].toLowerCase().includes(filtro.toLowerCase())) {
             let fila = tabla.insertRow();
        let nombre = fila.insertCell();
        let primer_apellido = fila.insertCell();
        let segundo_apellido = fila.insertCell();
        let identificacion = fila.insertCell();
        let nacionalidad = fila.insertCell();
        let provincia = fila.insertCell();
        let canton = fila.insertCell();
        let distrito = fila.insertCell();
        let cantidad_hijos = fila.insertCell();
        let correo = fila.insertCell();

        nombre.innerHTML = padre[index]["nombre"];
        primer_apellido.innerHTML = padre[index]["primer_apellido"];
        segundo_apellido.innerHTML = padre[index]["segundo_apellido"];
        identificacion.innerHTML = padre[index]["identificacion"];
        nacionalidad.innerHTML = padre[index]["nacionalidad"];
        provincia.innerHTML = padre[index]["provincia"];
        canton.innerHTML = padre[index]["canton"];
        distrito.innerHTML = padre[index]["distrito"]
        cantidad_hijos.innerHTML = padre[index]["cantidad_de_hijos"];
        correo.innerHTML = padre[index]["correo"];
        };
       
    }
};

mostrar_datos();
input_filtro.addEventListener('keyup',mostrar_datos);