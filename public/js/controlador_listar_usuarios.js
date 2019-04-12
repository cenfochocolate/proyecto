'use strict';

const tabla = document.querySelector('#tbl_usuarios tbody');
const inputFiltro = document.querySelector ('#txtfitro');

let usuarios = listar_instituciones();

mostrar_usuarios();

inputFiltro.addEventListener('keyup', mostrar_usuarios);

function mostrar_usuarios(){
	let usuarios = listar_instituciones();
	let filtro = inputFiltro.value;
	tabla.innerHTML='';

	for (let i = 0; i < usuarios.length; i++) {
		if (usuarios[i]['tipo'].includes('padre') && usuarios[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())) {
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
			fila.insertCell().innerHTML = usuarios[i]['provincia'];
			fila.insertCell().innerHTML = usuarios[i]['canton'];
			fila.insertCell().innerHTML = usuarios[i]['distrito'];
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
		}
	};
};

mostrar_usuarios();
