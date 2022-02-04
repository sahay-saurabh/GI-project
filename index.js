var map = L.map('map').setView([20.593683,78.962883], 4.5);
// map.locate({setView: true, maxZoom: 16});


// L.marker.bindPopup(popupContent).openPopup();

// 

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2FoYXktc2F1cmFiaCIsImEiOiJja3o3OWl0N3owamZpMm5uOXB0ajh4MzVhIn0.ILZccnn56j_cYHWwSijPhQ'
}).addTo(map);

var geojsonLayer = new L.GeoJSON.AJAX("Admin2.json");       
geojsonLayer.addTo(map);

var temp;
async function mapdata(){
    fetch('geo.geojson.txt').then(response=>{
        return response.json();
    })
    .then(data=>temp=data);
}



map.on('click',function(e){
    var latlon=e.latlng;
    var popup = L.popup()
    .setLatLng([latlon.lat,latlon.lng])
    .setContent(latlon.lat+'°N '+latlon.lng+'°E')
    .openOn(map);
    
})

