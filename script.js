var map, pos, marker;

window.onload = function (){
    initMap();
}

function initMap(){
    
    pos = {lat: 50.449241, lng: 30.513511};
    var options = {
        center: new google.maps.LatLng(pos.lat, pos.lng),
        zoom: 12
    }
    
    map = new google.maps.Map(document.getElementById("map"), options);
    
    if (navigator.geolocation)
        navigator.geolocation.getCurrentPosition(geoloactionSuccess, geolocationFailure, {enableHighAccuracy: true});
    
}

function geoloactionSuccess(position){
    pos = {lat: position.coords.latitude, 
           lng: position.coords.longitude};
    
    map.setCenter(pos);
    marker = new google.maps.Marker({position: pos, map: map, title: "You are here"});
}

function geolocationFailure(positionError){
    alert(positionError)
}