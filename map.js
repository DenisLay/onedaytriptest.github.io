var map, marker, pos;

window.onload = function(){
    initMap();
}

function initMap(){
    pos = {lat: 50.449241, lng: 30.513511};
    opt = {
        center: new google.maps.LatLng(pos.lat, pos.lng),
        zoom: 14
    }
    
    map = new google.maps.Map(document.getElementById("map"), opt);
    navigator.geolocation.watchPosition(geoSuccess, geoError);
}

function geoSuccess(position){
    pos = {lat: position.coords.latitude, lng: position.coords.longitude};
    map.setCenter(pos);
    marker = new google.maps.Marker( {position: pos, map: map} );
}

function geoError(position){
    console.log("error");
}