var LeafIcon = L.Icon.extend({
    options: {
        iconSize:[32, 32],
    }
});

var logoETECSA  = new LeafIcon({iconUrl: 'images/logotipo-etecsa-version-circular.jpg'});

    L.icon = function (options) {
    return new L.Icon(options);
    };

function onEachFeature(feature, layer) {
            var popupContent="";/* = "<p>I started out as a GeoJSON " +
                    feature.geometry.type + ", but now I'm a Leaflet vector!</p>";*/

            if (feature.properties && feature.properties.popupContent) {
                popupContent += feature.properties.popupContent;
            }

            layer.bindPopup(popupContent);
        }

var online = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
        {
            id: 'mapbox.light',
            maxZoom: 20,
            accessToken: 'your.mapbox.access.token',
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
        });

var nauta=L.geoJSON(nautatotal, {
            style: function (feature) {
                return feature.properties && feature.properties.style;
            },
            onEachFeature: onEachFeature,
        });

var nautaHogar= L.layerGroup([nauta]);
var map = L.map('map', {
    center: [21.38000821885673,-77.919845580547],
    zoom: 13,
    layers: [ online,nautaHogar],
})



        
var baseLayers = {

    
};


var overlayMaps = {
    "Nauta Hogar": nautaHogar,
    "Puntos de ETECSA": etecsa,
};
L.control.layers(baseLayers, overlayMaps).addTo(map);    

