
    var popup = L.popup(); // "retagulo" que atrelado a um ponto ou marcador, circulo, poligono
    var latlng; // receberá as coordenadas ao clicar no mapa
    var nome; // nome que aparecerá no popup

    // ativa a opção de adicionar um marcador
    function addMarcador(){
        document.getElementById("mensagem").textContent = "Clique no mapa para adicionar um marcador";
        map.on('click', onMapClick);
    }

    // pega as coordenadas no local criado e abre um espaço para colocar o nome do marcador que será criado.
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("<input placeholder = 'Nome do marcador' id='nome'></input><br><button onclick='criarMarcador()'> Adicionar pin </button></form>")
            .openOn(map);
        latlng = e.latlng;
    }
    
    // com as coordenadas e o nome definido no popup, é criado um marcador com essas informações.
    function criarMarcador() {
        nome = document.getElementById('nome').value;
        L.marker(latlng, {draggable: 'true'}).bindPopup(nome).addTo(map);
        document.getElementById("mensagem").textContent = "";
        map.off('click', onMapClick); // apos criar o marcador, o onMapClick é desativado
    }
    