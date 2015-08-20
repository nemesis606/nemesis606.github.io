/**
 * Created by nemesis on 09/08/15.
 */

$(document).ready(function(){
    $("#up").click(function(e){
        $("body").animate({scrollTop: 0}, '1000');
    });
    $(".mz-profile-image").easyAudioEffects(
        {
            ogg: "assets/sounds/chime.ogg",
            mp3: "assets/sounds/chime.mp3",
            eventType: "hover", // or "click"
            playType: "oneShotPolyphonic"
        }
    );

    $("mz-link").easyAudioEffects(
        {
            ogg: "assets/sounds/chime.ogg",
            mp3: "assets/sounds/chime.mp3",
            eventType: "hover", // or "click"
            playType: "oneShotPolyphonic"
        }
    );

    $(".mail").easyAudioEffects(
        {
            ogg: "assets/sounds/chime.ogg",
            mp3: "assets/sounds/chime.mp3",
            eventType: "hover", // or "click"
            playType: "oneShotPolyphonic"
        }
    );

    $("button").easyAudioEffects(
        {
            ogg: "assets/sounds/chime.ogg",
            mp3: "assets/sounds/chime.mp3",
            eventType: "hover", // or "click"
            playType: "oneShotPolyphonic"
        }
    );

    $(".flex-icons-star").easyAudioEffects(
        {
            ogg: "assets/sounds/pi.ogg",
            mp3: "assets/sounds/pi.mp3",
            eventType: "hover", // or "click"
            playType: "oneShotPolyphonic"
        }
    );

   navigator.geolocation.getCurrentPosition(local,erro);

    function local(c) {
        var lat = c.coords.latitude;
        var lon = c.coords.longitude;

    var directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers : true});

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
                { color: "#FFFFFF" }
            ]
        }
    ];

    map.setOptions({styles: styles});

    var markInitial = new google.maps.Marker({
        position: {lat: lat, lng: lon},
        map: map,
        icon: "/assets/img/circular28.png"
    });

    $("#address").click(function(){
        map.setOptions({zoom: 8});
        window.location.assign("#map");
        markInitial.setMap(null);
        directionsDisplay.setMap(map);
        var rota = {
            origin: {lat: lat,lng: lon},
            destination: {lat: -23.461301,lng: -46.434944},
            travelMode: google.maps.TravelMode.WALKING
        };

        var contentBoxDestiny ='<div class="mz-box-map">'+
            '<figure class="mz-profile-image-map animated">'+
            '<img src="/assets/img/bsIaPEiM.jpeg" alt=""/>'+
            '</figure>'+
            '</div>';

        var icons = {
            start: new google.maps.MarkerImage(

                '/assets/img/circular28.png',

                new google.maps.Size( 24, 24 ),

                new google.maps.Point( 0, 0 ),

                new google.maps.Point( 14, 7)
            ),
            end: new google.maps.MarkerImage(

                '/assets/img/location56.png',

                new google.maps.Size( 24, 24 ),

                new google.maps.Point( 0, 0 ),

                new google.maps.Point( 10, 23 )
            )
        };

        directionsService.route(rota, function(result,status){
            if (status == google.maps.DirectionsStatus.OK) {

                directionsDisplay.setDirections(result);

                var leg = result.routes['0'].legs['0'];

                makeMarker( leg.start_location, icons.start, "title", false );

                makeMarker( leg.end_location, icons.end, 'title', contentBoxDestiny );

            }
        });
    });

        function makeMarker( position, icon, title, infowindowcode ) {
            var mark = new google.maps.Marker({
                position: position,
                map: map,
                draggable: false,
                icon: icon,
                title: title
            });

            if (infowindowcode) {
                var infowindow = new google.maps.InfoWindow({
                    content: infowindowcode
                });

                infowindow.open(map, mark);
            }
            mark.addListener('click', function(){

                infowindow.open(map, mark);

            });
        }
    }

    function erro () {
        var contentWarning = '<p class="mz-text-center">'+
            '<i class="flex-icons-error-contorn"></i>'+
            'Você precisa ceder sua localização para que o mapa lhe seja útil.'+
            '</p>';

        $("#alert_header").addClass("mz-social-media");
        $("#alert_header").addClass("animated");
        $("#alert_header").addClass("bounce");
        $("body").css("overflow-x","hidden");
        $("#alert_header").html(contentWarning);
    }
});
