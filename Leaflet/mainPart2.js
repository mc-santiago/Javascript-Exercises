Part 2 Hacer un fetch y mostrar los primero 50 eventos del API

// Sirve para eliminar el recuadro de atribuciones... logo de leaflet en la esquina inferior derecha
let options = {attributionControl: false}

let map = L.map('container', options)

// Fondo al mapa... http://leaflet-extras.github.io/leaflet-providers/preview/index.html
let tileLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16
}).addTo (map)

// Centralizar el mapa a la Península Ibérica
map.setView(new L.LatLng(40.416775, -3.703790), 12)

let events= 'https://raw.githubusercontent.com/d-antesque/wcs-exercises/master/madrid/data/actividades.json'
fetch(events)
    .then(res => res.json())
    .then(drawMarkers)

    function drawMarkers(data) {
        list= data['@graph']
        let first50 = 49               // To Show only first 50 with info on location
        for (let i=0; i<first50; i++) {
            if (list[i].location === undefined) {
                first50 += 1
            } else {
            // Sirve para añadir marcadores a nuestro mapa
            marker = new L.marker([list[i].location.latitude, list[i].location.longitude])
            // Asignar un Popup al marcador... para personalizar https://leafletjs.com/reference-1.4.0.html
            .bindPopup(list[i].title)
            .addTo(map);}
        }
    }

    // // Solucion utilizando forEach

    // funtion drawMarkers(data) {
    //     let events = data[@graph].filter(x => x.location).slice(0,50)

    //     events.forEach(event =>
    //         if(event.location{
    //            let marker = L.marker([events.location.latitude, events.location.longitude])
    //            .bindPopup(events.title)
    //            .addTo(map)
    //         }))
    // }