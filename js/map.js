function initMap() {
    var stylemap = [{
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "color": "#87cbdb"
        }]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
            "color": "#b8cb93"
        },
        {
            "lightness": 20
        }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#ffffff"
        },
        {
            "lightness": 17
        }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#ffffff"
        },
        {
            "lightness": 29
        },
        {
            "weight": 0.1
        }
        ]
    },
    ];
    const myLatLng = {
        lat: 46.8302317,
        lng: 12.2224921
    };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: myLatLng,
        // disableDefaultUI: true,
        styles: stylemap,
    });


    // my local
    const locationButton = document.getElementById("button-loc");
    locationButton.addEventListener("click", () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    map.setZoom(12);
                    map.setCenter(pos);
                    var marker = new google.maps.Marker({
                        position: pos,
                        map: map,
                    });
                },
            );
        }
    });









    // COUNTRY TEST
    function newLocation(newLat, newLng) {
        map.setCenter({
            lat: newLat,
            lng: newLng,
        });

    }
    $('#country-select').change(function () {
        console.log('test')
        if ($('#country-select option:selected').val() == 0) {
            newLocation(46.8302317, 12.2224921);
            map.setZoom(5.5);
            // $('#type').val('0');

        }
        if ($('#country-select option:selected').val() == 1) {
            // $('#type').val('0');
            newLocation(48.317773, 30.9366666);
            map.setZoom(6.5);


        }
        if ($('#country-select option:selected').val() == 2) {
            // $('#type').val('0');
            newLocation(48.668859, 18.5786351);
            map.setZoom(6.5);

        }
        if ($('#country-select option:selected').val() == 3) {
            // $('#type').val('0');
            newLocation(46.1390888, 2.4336308);
            map.setZoom(6.5);

        }

    });





    // TEST MARKERS
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const markers = locations.map((location, i) => {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
        });
    });
    // Add a marker clusterer to manage the markers.
    mcOptions = {
        styles: [{
            textColor: 'white',
            height: 57,
            url: "img/cluster.png",
            width: 57
        },
        {
            textColor: 'white',
            height: 57,
            url: "img/cluster.png",
            width: 57
        },
        {
            textColor: 'white',
            height: 57,
            url: "img/cluster.png",
            width: 57
        },
        {
            textColor: 'white',
            height: 57,
            url: "img/cluster.png",
            width: 57
        },
        {
            textColor: 'white',
            height: 57,
            url: "img/cluster.png",
            width: 57
        }]
    }

    //init clusterer with your options
    var mc = new MarkerClusterer(map, markers, mcOptions);


}


const locations = [
    { lat: 49.8225468, lng: 24.1133993 },
    { lat: 49.8431884, lng: 24.0248358 },
    { lat: 49.2355752, lng: 23.883286 },
    { lat: 47.4194646, lng: 18.9927268 },
    { lat: 47.4799668, lng: 19.0507386 },
    { lat: 47.5264903, lng: 18.9879709 },
    { lat: 47.1786219, lng: 18.3942966 },
    { lat: 47.1152602, lng: 18.3633095 },
    { lat: 48.856977, lng: 2.3472257 },
    { lat: 48.7543441, lng: 2.3215783 },
    { lat: 48.7802642, lng: 1.9642106 },
    { lat: 48.4532931, lng: 2.5041298 },
    { lat: 47.1380951, lng: -1.5821305 },
    { lat: 43.2949381, lng: 5.3581403 },
    { lat: 47.1824894, lng: -1.5391631 },
    { lat: 43.351406, lng: 5.351537 },
    { lat: 51.5185603, lng: -0.1156527 },
    { lat: 51.4925911, lng: -0.086658 },
    { lat: 50.9786252, lng: 10.3120153 },
    { lat: 52.5168731, lng: 13.3776729 },
    { lat: 52.5092491, lng: 13.3505341 },
    { lat: 52.4973137, lng: 13.4149179 },
    { lat: 52.5632244, lng: 13.4197571 },
    { lat: 52.5492239, lng: 13.0597026 },
    { lat: 52.3209228, lng: 9.7925675 },
    { lat: 52.2539811, lng: 9.9992756 },
    { lat: 52.6222289, lng: 13.4672432 },
];