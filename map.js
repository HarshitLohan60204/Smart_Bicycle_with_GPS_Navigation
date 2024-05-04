var map = L.map('map');
map.setView([ 30.739775, 76.775266], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
 maxZoom: 20,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var hybridLayer = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
maxZoom: 23,
subdomains:['mt0','mt1','mt2','mt3']
});

// Optionally, you can add other layers like streets or satellite
var streetsLayer = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3']
});

var satelliteLayer = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
maxZoom: 20,
attribution: 'Google'
});

// Create layer control
var baseLayers = {
"Streets": streetsLayer,
"Satellite": satelliteLayer,
"Hybrid": hybridLayer,
};
L.control.layers(baseLayers).addTo(map);