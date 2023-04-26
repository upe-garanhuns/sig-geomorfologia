L.control.locate({
    strings: {
       popup: "Você está dentro de um raio de {distance} metros deste ponto."
    }
}).addTo(map);

function onLocationError(e) {
    alert("Para utilizar essa função, é necessário permitir a localização.");
}

map.on('locationerror', onLocationError);