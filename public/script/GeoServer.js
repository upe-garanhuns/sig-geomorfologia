wmsLayer = L.Geoserver.wms("http://localhost:8080/geoserver/wms", {
    layers: "topp:states",
});
wmsLayer.addTo(map);

layerLegend = L.Geoserver.legend("http://localhost:8080/geoserver/wms", {
    layers: "topp:states",
});
layerLegend.addTo(map);

// O layer padrão é o do mapa dos Estados Unidos