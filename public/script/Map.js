
var map = L.map('map').setView([-8.887240773326587, -36.48660625446342], 14);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

// marcadores com as Universidades
var upe = L.marker([-8.883365292551355, -36.496307445598866]).bindPopup("UPE - Campus Garanhuns");
var ufape = L.marker([-8.906746985723792, -36.49430465779773]).bindPopup("UFAPE - Universidade do Agreste Pernambucano");
var ifpe = L.marker([-8.876669397903788, -36.46299928402741]).bindPopup("IFPE - Campus Garanhuns");

// cria um variável que contem um layergroup dos marcadores
var universidades = L.layerGroup([upe, ufape, ifpe]);

// marcadores com os pontos turísticos
var relogioFlores = L.marker([-8.88162340797237, -36.47694076226887]).bindPopup("Relógio das Flores");
var cristoMagano = L.marker([-8.878126900850619, -36.518370171507364]).bindPopup("Cristo do Magano");
var pauPombo = L.marker([-8.892893127714736, -36.49137605179187]).bindPopup("Pau Pombo");

// cria um variável que contem um layergroup dos marcadores
var pontosTuristicos = L.layerGroup([relogioFlores, cristoMagano, pauPombo]);

// cria um objeto que contem as layers de overlay
var overlayMaps = {
    "Universidades": universidades,
    "Pontos Turisticos": pontosTuristicos
}

// cria uma tile layer opcional
var mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/johnmichel/ciobach7h0084b3nf482gfvvr/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam9obm1pY2hlbCIsImEiOiJjaW9iOW1vbHUwMGEzdnJseWNranhiMHpxIn0.leVOjMBazNl6v4h9MT7Glw',
    {
        id: 'MapID',
        tileSize: 512,
        zoomOffset: -1,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
    });

// cria uma tile layer de satélite
googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    attribution: 'Google Maps'
});

// cria um objeto que contem as layers de base
var baseMaps = {
    "Padrão": osm,
    "Mapbox": mapbox,
    "Satélite": googleSat
}

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

// adiciona a escala atual do mapa na tela
L.control.scale().addTo(map);
