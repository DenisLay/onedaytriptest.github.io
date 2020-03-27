var map, marker, pos;
var watchID;
var circle;
var radius = 0.01;

var butt = document.getElementById("bt");
var coordField = document.getElementById("coords");

function click(){
    coordField.innerText += pos.lat + " || " + pos.lng + "\n";
}

butt.onclick = click;

window.onload = function(){
    initMap();
}

function initMap(){
    pos = {lat: 50.449241, lng: 30.513511};
    opt = {
        center: new google.maps.LatLng(pos.lat, pos.lng),
        zoom: 14
    }
    var geoOptions = {
    enableHighAccuracy: true,
        maximumAge: 100,
        timeout: 100
  }
    
    map = new google.maps.Map(document.getElementById("map"), opt);
    watchID = navigator.geolocation.watchPosition(geoSuccess, geoError, geoOptions);
}

function geoSuccess(position){
    pos = {lat: position.coords.latitude, lng: position.coords.longitude};
    //var time = new Date().getTime() / 1000;
    //pos = {lat: position.coords.latitude + (Math.sin(time) * radius), lng: position.coords.longitude + (Math.cos(time) * radius)};
    map.setCenter(pos);
    marker = new google.maps.Marker( {position: pos, map: map} );
    
    if (circle != null)
        circle.setMap(null);
    drawCircle(circle, pos, position.coords.accuracy / 2);
}

function geoError(position){
    console.log("error");
}

function drawCircle(circle, center, radius){
    circle = new google.maps.Circle({
        strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.15,
      map: map,
      center: center,
      radius: radius
    });
}