var map, infoWindow, marker;

function initMap(){
    
    var pos = {lat: 50.449241, lng: 30.513511};
    var options = {
        center: new google.maps.LatLng(pos.lat, pos.lng),
        zoom: 12
    }
    
    var map = new google.maps.Map(document.getElementById("map"), options);
    
    /*if (navigator.geolocation){
        alert("Geolocation is supported");
    }
    else{
        alert("Geolocation is not supported");
    }*/
    
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function (position){
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
            
            map.setCenter(pos);
            /*infoWindow = new google.maps.InfoWindow;
            infoWindow.setPosition(pos);
            infoWindow.setContent("You are here");
            infoWindow.open(map);*/
            
            marker = new google.maps.Marker({position: pos, map: map, title: "You are here"});
        })
    }
    else{
        alert("Geolocation failed!");
    }
    
    
}