// Sirve para eliminar el recuadro de atribuciones... logo de leaflet en la esquina inferior derecha
let options = {attributionControl: false}

let map = L.map('container', options)

// Fondo al mapa... http://leaflet-extras.github.io/leaflet-providers/preview/index.html
let tileLayer = L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> | Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo (map);

// Centralizar el mapa a la Península Ibérica
map.setView(new L.LatLng(40.416775, -3.703790), 12)

let events

let url = 'https://raw.githubusercontent.com/d-antesque/wcs-exercises/master/madrid/data/actividades.json'
fetch(url)
    .then(res => res.json())
    .then(drawMarkers)

let icons = [
    {img: 'musica-baile-danza-fiesta.png', word:'Music'},
    {img: 'musica-baile-danza-fiesta.png', word:'Baile'},
    {img: 'musica-baile-danza-fiesta.png', word:'Danza'},

    {img: 'cursos-talleres-conferencias.png', word:'Curso'},
    {img: 'cursos-talleres-conferencias.png', word:'Taller'},
    {img: 'cursos-talleres-conferencias.png', word:'Conferencia'},

    {img: 'deporte.png', word:'Deporte'},

    {img: 'arte-exposicion.png', word:'Arte'},
    {img: 'arte-exposicion.png', word:'Exposici'},
    
    {img: 'campamentos-circo-titeres.png', word:'Campamento'},
    {img: 'campamentos-circo-titeres.png', word:'Circo'},
    {img: 'campamentos-circo-titeres.png', word:'Titere'},

    {img: 'performance-teatro-cine-audiovisual.png', word:'Performance'},
    {img: 'performance-teatro-cine-audiovisual.png', word:'Teatro'},
    {img: 'performance-teatro-cine-audiovisual.png', word:'Cine'},
    {img: 'performance-teatro-cine-audiovisual.png', word:'Audiovisual'},
]

function getIcon(event){
    let icon = icons.find(icon => event['@type'] && event['@type'].includes(icon.word)) // [{img: 'danza.png', word: 'Danza'}]
    if(icon){
        return L.icon({
            iconUrl: icon.img,
            iconSize: 32,
        })
    }
}

function drawMarkers(data){
    let events = data['@graph'].filter(x => x.location).slice(0, 50)

    events.forEach(event => {
        if(event.location){

            let options = {}

            icon = getIcon(event)
            if(icon) options.icon = icon

            let marker = L.marker([event.location.latitude, event.location.longitude], options)
            marker.bindPopup(event.title)
            marker.on('mouseover', function (e) {
                this.openPopup();
                
            });
            marker.on('mouseout', function (e) {
                this.closePopup();
            });
            marker.addTo(map)
        }
    })
}

