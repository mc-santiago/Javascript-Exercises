// Parte 1 con solo crear marker de 3 ciudades españolas.

// // Sirve para eliminar el recuadro de atribuciones... logo de leaflet en la esquina inferior derecha
// let options = {attributionControl: false}

// let map = L.map('container', options)

// // Fondo al mapa... http://leaflet-extras.github.io/leaflet-providers/preview/index.html
// let tileLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
// 	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
// 	maxZoom: 16
// }).addTo (map)

// // Centralizar el mapa a la Península Ibérica
// map.setView(new L.LatLng(40.416775, -3.703790), 6)


// let ciudades=[
//     ['Madrid, Spain', 40.416775, -3.703790],
//     ['Barcelona, Spain', 41.3851, 2.1734],
//     ['Valencia, Spain', 39.46975, -0.37739]
// ]
// for (let i=0; i<ciudades.length; i++) {
//     // Sirve para añadir marcadores a nuestro mapa
//     marker = new L.marker([ciudades[i][1], ciudades[i][2]])
//     // Asignar un Popup al marcador... para personalizar https://leafletjs.com/reference-1.4.0.html
//     .bindPopup(ciudades[i][0])
//     .addTo(map);
// }