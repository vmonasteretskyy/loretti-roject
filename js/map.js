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
        zoom: 5.5,
        center: myLatLng,
        // disableDefaultUI: true,
        styles: stylemap,
    });


    // my local
    // const locationButton = document.getElementById("button-loc");
    // locationButton.addEventListener("click", () => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(
    //             (position) => {
    //                 const pos = {
    //                     lat: position.coords.latitude,
    //                     lng: position.coords.longitude,
    //                 };
    //                 map.setZoom(12);
    //                 map.setCenter(pos);
    //                 var marker = new google.maps.Marker({
    //                     position: pos,
    //                     map: map,
    //                 });
    //             },
    //         );
    //     }
    // });





    // TEST MARKERS














    // COUNTRY TEST
    // function newLocation(newLat, newLng) {
    //     map.setCenter({
    //         lat: newLat,
    //         lng: newLng,
    //     });

    // }
    // $('#country-select').change(function () {
    //     console.log('test')
    //     if ($('#country-select option:selected').val() == 0) {
    //         newLocation(46.8302317, 12.2224921);
    //         map.setZoom(5.5);
    //         // $('#type').val('0');

    //     }
    //     if ($('#country-select option:selected').val() == 1) {
    //         // $('#type').val('0');
    //         newLocation(48.317773, 30.9366666);
    //         map.setZoom(6.5);


    //     }
    //     if ($('#country-select option:selected').val() == 2) {
    //         // $('#type').val('0');
    //         newLocation(48.668859, 18.5786351);
    //         map.setZoom(6.5);

    //     }
    //     if ($('#country-select option:selected').val() == 3) {
    //         // $('#type').val('0');
    //         newLocation(46.1390888, 2.4336308);
    //         map.setZoom(6.5);

    //     }

    // });






}