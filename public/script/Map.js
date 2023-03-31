
var map = L.map('map').setView([-8.887240773326587, -36.48660625446342], 14);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

// marcadores com as Universidades
var upe = L.marker([-8.883365292551355, -36.496307445598866], {
    title: "UPE"
}).bindPopup(
    "<h1>UPE - Campus Garanhuns</h1> <p>Universidade de Pernambuco em Garanhuns.</p> <img src='./public/img/locais/upe.jpeg' alt='UPE' width='250'</img>");
var ufape = L.marker([-8.906746985723792, -36.49430465779773], {
    title: "UFAPE"
}).bindPopup(
    "<h1>UFAPE - Universidade Federal do Agreste Pernambucano</h1> <p>Universidade Federal do Agreste Pernambucano em Garanhuns.</p> <img src='./public/img/locais/ufape.jpg' alt='UFAPE' width='250'</img>");
var ifpe = L.marker([-8.876669397903788, -36.46299928402741], {
    title: "IFPE"
}).bindPopup(
    "<h1>IFPE - Instituto Federal de Pernambuco</h1> <p>Instituto Federal de Pernambuco, Campus Garanhuns.</p> <img src='./public/img/locais/ifpe.jpg' alt='IFPE' width='250'</img>");

// cria um variável que contem um layergroup dos marcadores
var universidades = L.layerGroup([upe, ufape, ifpe]);

// marcadores com os pontos turísticos
var relogioFlores = L.marker([-8.88162340797237, -36.47694076226887], {
    title: "Relógio das Flores"
}).bindPopup(
    "<h1>Relógio das Flores</h1> <p>O famoso Relógio das Flores, ponto turístico muito querido de Garanhuns, no Agreste de Pernambuco.</p> <img src='./public/img/locais/relogio_das_flores.jpg' alt='Relógio das Flores' width='250'</img>");
var cristoMagano = L.marker([-8.878126900850619, -36.518370171507364], {
    title: "Cristo Magano"
}).bindPopup(
    "<h1>Cristo Magano</h1> <p>O mirante, em forma de fortaleza e instalado numa das sete colinas da cidade - a de Magano - fica a 1.030 metros de altitude e é pontuado por uma estátua de Cristo crucificado, esculpida pelo artista plástico Renato Pantaleão em 1954. A localidade oferece uma das mais belas vistas da cidade de Garanhuns.</p> <img src='./public/img/locais/cristo_magano.jpg' alt='Cristo Magano' width='250'</img>");
var pauPombo = L.marker([-8.892893127714736, -36.49137605179187], {
    title: "Parque Ruber van der Linden - Pau Pombo"
}).bindPopup(
    "<h1>Parque Ruber van der Linden - Pau Pombo</h1> <p>O Parque Ruber van der Linden é um dos lugares mais conhecidos e frequentados da cidade de Garanhuns. Apesar de ter esse nome, não homenageia um estrangeiro, mas uma personalidade nascida na terra, filho de um profissional da área de Contabilidade que nas horas vagas gostava de escrever textos pra teatro.</p> <img src='./public/img/locais/pau_pombo.jpg' alt='Pau Pombo' width='250'</img>");

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
