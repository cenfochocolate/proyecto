const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoidHJpY2tlcmVkNG1lIiwiYSI6ImNqdXQ5b3l2YzA1cWgzeW5yeW96MnJtZ3UifQ.fDvMOAViMZcglVBy0MFunQ';
let map = new mapboxgl.Map({
  container: 'mapa',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-84.1483645,9.9356124],
  zoom: 8
});

let marker = new mapboxgl.marker({
  draggable:true
})

.setLngLat([-84.1483645,9.9356124])
.addTo(map);

function onDragEnd(){
  let lngLat = marker.getLngLat();
  let ubicacion = `${lngLat.lng},${lngLat.lat}`;
  return ubicacion;
}

marker.on('dragend', onDragEnd);
