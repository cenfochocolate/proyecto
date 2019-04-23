let latitud = '0';
let longitud = '0';

function listar_mapa(plongitud, platitud){
  latitud = platitud;
  longitud = plongitud;

  let map = new mapboxgl.Map({
    container: 'mapa',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-84.1483645,9.9356124],
    zoom: 8
  });

  marker = new mapboxgl.Marker({
    draggable:true
  })
  setLngLat([longitud, latitud])
  .addTo(map);

  function onDragEnd(){
    let lngLat = Marker.getLngLat();

    latitud = lngLat.lat;
    longitud = lngLat.lng;
  }
  marker.on('dragend', onDragEnd);
}

function retornar_ubicacion (){
  let ubicacion = `${longitud}, ${latitud}`;
  return ubicacion;
}
