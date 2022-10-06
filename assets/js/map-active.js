var map;
var latlng = new google.maps.LatLng(-37.814, 144.96332);
var stylez = [{
    featureType: "all",
    elementType: "all",
    stylers: [{
        saturation: -30
            }]
        }];
var mapOptions = {
    zoom: 14,
    center: latlng,
    scrollwheel: false,
    scaleControl: false,
    disableDefaultUI: true,
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'gMap']
    }
};
