var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

fetch('objets.php?id=1')
.then(result => result.json())
.then(result => {

    result = result[0];

    var keyIcon = L.icon({
        iconUrl: 'images/key.png',
    
        iconSize:     [60, 95], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    var keyMarker = L.marker([result.latitude, result.longitude], {icon: keyIcon});

    var Markers = new L.FeatureGroup();
    
    Markers.addLayer(keyMarker);
    
    map.on('zoomend', function() {
        if (map.getZoom() <result.zoom_min){
                map.removeLayer(Markers);
        }
        else {
                map.addLayer(Markers);
            }
    });
})

fetch('objets.php?id=2')
.then(result => result.json())
.then(result => {
  result = result[0];
  var codeIcon = L.icon({
    iconUrl: 'images/parchemin-ancien.png',

    iconSize:     [60, 75], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    function onClick(){
        alert("hello");
    }

    var codeMarker = L.marker([result.latitude, result.longitude], {icon: codeIcon}).addTo(map).on('click',onClick);

    var Markers = new L.FeatureGroup();
    
    Markers.addLayer(codeMarker);
    
    map.on('zoomend', function() {
        if (map.getZoom() <10){
                map.removeLayer(Markers);
        }
        else {
                map.addLayer(Markers);
            }
    });

})