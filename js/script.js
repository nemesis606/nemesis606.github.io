/**
 * Created by nemesis on 09/08/15.
 */

$(document).ready(function(){
    $("mz-link").easyAudioEffects(
        {
            ogg : "assets/sounds/pi.ogg",
            mp3 : "assets/sounds/pi.mp3",
            eventType : "hover", // or "click"
            playType : "oneShotPolyphonic"
        }
    );

    $(".mz-profile-image").easyAudioEffects(
        {
            ogg: "assets/sounds/chime.ogg",
            mp3: "assets/sounds/chime.mp3",
            eventType: "hover", // or "click"
            playType: "oneShotPolyphonic"
        }
    );

   navigator.geolocation.getCurrentPosition(local);

    function local(c) {
        var lat = c.coords.latitude;
        var lon = c.coords.longitude;

    var directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();

    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 18,
        disableDefaultUI: true,
        center: {lat: lat,lng: lon}
    });

    var styles = [
        {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [
                { color: "#009688" }
            ]
        },{
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [
                { visibility: "off" }
            ]
        },{
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [
                { color: "#EEEEEE" }
            ]
        },{
            featureType: "road",
            elementType: "geometry.fill",
            stylers:[
                {color: "#FFFFFF"}
            ]
        },{
            featureType: "landscape.man_made",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        },{
            featureType: "poi.business",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]},{
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers:[
                {color: "#f1c40f"}
            ]
        },{
            featureType: "water",
            elementType: "geometry.fill",
            stylers:[
                {color: "#3498db"}
            ]
        },{
            featureType: "water",
            elementType: "labels.text.fill",
            stylers:[
                {color: "#ecf0f1"}
            ]
        },{
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers:[
                {visibility: "off"}
            ]
        },{
            featureType: "landscape",
            elementType: "geometry.stroke",
            stylers:[
                {color: "#FFFFFF"}
            ]
        },{
            featureType: "landscape",
            elementType: "geometry.fill",
            stylers:[
                {color: "#EEEEEE"}
            ]
        },{
            featureType: "landscape.natural.terrain",
            elementType: "geometry.fill",
            stylers:[
                {color: "#CCCCCC"}
            ]
        },{
            featureType: "landscape",
            elementType: "labels",
            stylers:[
                { visibility: "on" }
            ]
        },{
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
                { color: "#009688" }
            ]
        },{
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers:[
                {color: "#FFFFFF"}
            ]
        },{
            featureType: "road.highway",
            elementType: "labels.text.stroke",
            stylers:[
                {visibility: "off"}
            ]
        },{
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [
                { color: "#9de945" }
            ]
        },{
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
                { color: "#34495e" }
            ]
        },{
            featureType: "poi.park",
            elementType: "labels.text.stroke",
            stylers: [
                { visibility: "off" }
            ]
        },{
            featureType: "transit.station.airport",
            elementType: "geometry.fill",
            stylers: [
                { color: "#4169E1" }
            ]
        }
    ];

    map.setOptions({styles: styles});

    $("#address").click(function(){
        directionsDisplay.setMap(map);
        var rota = {
            origin: {lat: lat,lng: lon},
            destination: {lat: -23.461301,lng: -46.434944},
            travelMode: google.maps.TravelMode.WALKING
        };
        directionsService.route(rota, function(result,status){
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(result);
            }
        });
    });

    //directionsDisplay.setMap(map);
    //var rota = {
    //    origin: {lat: lat,lng: lon},
    //    destination: {lat: -23.461301,lng: -46.434944},
    //    travelMode: google.maps.TravelMode.WALKING
    //};
    //directionsService.route(rota, function(result,status){
    //    if (status == google.maps.DirectionsStatus.OK) {
    //        directionsDisplay.setDirections(result);
    //    }
    //});
    }
});