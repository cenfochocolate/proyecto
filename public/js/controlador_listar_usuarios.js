'use strict';

const tabla = document.querySelector('#tbl_usuarios tbody');
const inputFiltro = document.querySelector ('#txtfitro');
const slt_tusuario = document.querySelector('#slt_tipo_usuario');

let usuarios = listar_instituciones();

mostrar_usuarios();

slt_tusuario.addEventListener('change', mostrar_usuarios);
inputFiltro.addEventListener('keyup', mostrar_usuarios);


function mostrar_usuarios(){
	let usuarios = listar_instituciones();
	let filtro = inputFiltro.value;
	let tusuario = slt_tusuario.value;
	tabla.innerHTML='';

	for (let i = 0; i < usuarios.length; i++) {
		if (usuarios[i]['nombre'].toLowerCase().includes(filtro.toLowerCase()) && usuarios[i]['tipo']!= "admin" && tusuario == "null" && usuarios[i]['aprobada']== true) {
			let fila = tabla.insertRow();
			let celdaNombre = fila.insertCell();

			celdaNombre.innerHTML= usuarios[i]['nombre'];
			celdaNombre.classList.add('botonid');
			celdaNombre.addEventListener('click', function(){
					sessionStorage.setItem('id_lugar', usuarios[i]['_id']);
					if (usuarios[i]['tipo'] == 'institucion') {
						window.location.href='perfil_institucion.html'
					}else if(usuarios[i]['tipo']=='padre'){
						window.location.href='perfil_padre.html'
					}
				}
			);
			fila.insertCell().innerHTML = usuarios[i]['estado'];
			fila.insertCell().innerHTML = usuarios[i]['correo'];

			let imagen = document.createElement('img');
			imagen.classList.add('imagentablainstituciones');
			if (usuarios[i]['url_foto']) {
				imagen.src = usuarios[i]['url_foto'];
			} else {
				imagen.src = './imgs/imgph.jpg';
			}
			fila.insertCell().appendChild(imagen);

			fila.insertCell().innerHTML = usuarios[i]['telefono'];
			let celda_eliminar = fila.insertCell();

      let boton_eliminar = document.createElement('a');
      boton_eliminar.innerHTML= '<i class="fas fa-trash-alt"></i>';
      boton_eliminar.dataset.id= usuarios[i]['_id'];
      boton_eliminar.addEventListener('click', confirmar_borrado);
      celda_eliminar.appendChild(boton_eliminar);

			let celda_deshabilitar = fila.insertCell();
			let boton_deshabilitar = document.createElement('a');
			boton_deshabilitar.innerHTML= '<i class="fas fa-eye-slash"></i>';
			boton_deshabilitar.dataset.id = usuarios[i]['_id'];
			boton_deshabilitar.addEventListener('click', confirmar_deshabilitar);
			celda_deshabilitar.appendChild(boton_deshabilitar);

			let celda_habilitar = fila.insertCell();
			let boton_habilitar = document.createElement('a');
			boton_habilitar.innerHTML= '<i class="fas fa-eye"></i>';
			boton_habilitar.dataset.id = usuarios[i]['_id'];
			boton_habilitar.addEventListener('click', confirmar_habilitar);
			celda_habilitar.appendChild(boton_habilitar);

		} else {
			if (usuarios[i]['nombre'].toLowerCase().includes(filtro.toLowerCase()) && usuarios[i]['tipo'].includes(tusuario)){
				let fila = tabla.insertRow();
				let celdaNombre = fila.insertCell();

				celdaNombre.innerHTML= usuarios[i]['nombre'];
				celdaNombre.classList.add('botonid');
				celdaNombre.addEventListener('click', function(){
						sessionStorage.setItem('id_lugar', usuarios[i]['_id']);
						if (usuarios[i]['tipo'] == 'institucion') {
							window.location.href='perfil_institucion.html'
						}else if(usuarios[i]['tipo']=='padre'){
							window.location.href='perfil_padre.html'
						}
					}
				);
				fila.insertCell().innerHTML = usuarios[i]['aprobada'];
				fila.insertCell().innerHTML = usuarios[i]['correo'];

				let imagen = document.createElement('img');
				imagen.classList.add('imagentablainstituciones');
				if (usuarios[i]['url_foto']) {
					imagen.src = usuarios[i]['url_foto'];
				} else {
					imagen.src = './imgs/imgph.jpg';
				}
				fila.insertCell().appendChild(imagen);

				fila.insertCell().innerHTML = usuarios[i]['telefono'];

				let celda_eliminar = fila.insertCell();

	      let boton_eliminar = document.createElement('a');
	      boton_eliminar.innerHTML= '<i class="fas fa-trash-alt"></i>';
	      boton_eliminar.dataset.id= usuarios[i]['_id'];
	      boton_eliminar.addEventListener('click', confirmar_borrado);
	      celda_eliminar.appendChild(boton_eliminar);

				let celda_deshabilitar = fila.insertCell();
				let boton_deshabilitar = document.createElement('a');
				boton_deshabilitar.innerHTML= '<i class="fas fa-eye-slash"></i>';
				boton_deshabilitar.dataset.id = usuarios[i]['_id'];
				boton_deshabilitar.addEventListener('click', confirmar_deshabilitar);
				celda_deshabilitar.appendChild(boton_deshabilitar);

				let celda_habilitar = fila.insertCell();
				let boton_habilitar = document.createElement('a');
				boton_habilitar.innerHTML= '<i class="fas fa-eye"></i>';
				boton_habilitar.dataset.id = usuarios[i]['_id'];
				boton_habilitar.addEventListener('click', confirmar_habilitar);
				celda_habilitar.appendChild(boton_habilitar);
			}
		}
	};
};

function confirmar_borrado(){
	let id= this.dataset.id;
	Swal.fire({
		title:'¿Está seguro que desea eliminar este usuario?',
		type: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Sí, estoy seguro.'
}).then((result)=>{
	if(result.value){
	 eliminar_institucion(id);
		usuarios = listar_instituciones();
		mostrar_usuarios();
		Swal.fire({
			title:'¡usuario eliminado!',
			text:'El usuario fue eliminada con éxito.',
			type:'success'
		})
	}
})

};

function confirmar_deshabilitar(){
  let id= this.dataset.id;
  Swal.fire({
    title:'¿Está seguro que desea deshabilitar el usuario?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, estoy seguro.'
}).then((result)=>{
  if(result.value){
   deshabilitar_usuario(id);
    usuarios = listar_instituciones();
    mostrar_usuarios();
    Swal.fire({
      title:'¡Usuario deshabilitado!',
      text:'El usuario fue deshabilitado con éxito.',
      type:'success'
    })
  }
})
};


function confirmar_habilitar(){
  let id= this.dataset.id;
  Swal.fire({
    title:'¿Está seguro que desea habilitar el usuario?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, estoy seguro.'
}).then((result)=>{
  if(result.value){
   habilitar_usuario(id);
    usuarios = listar_instituciones();
    mostrar_usuarios();
    Swal.fire({
      title:'¡Usuario habilitado!',
      text:'El usuario fue habilitado con éxito.',
      type:'success'
    })
  }
})
};
mostrar_usuarios();
