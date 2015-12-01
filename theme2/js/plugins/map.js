var myCenter=new google.maps.LatLng(51.508067,-0.106959);

var styles = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#54c99a"
            },
            {
                "visibility": "on"
            }
        ]
    }
];

function initialize() {
	
	var mapProp = {
		center:myCenter,
		zoom:14,
		mapTypeId:google.maps.MapTypeId.ROADMAP,
		
	};

	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);


		map.setOptions({
			scaleControl: true, 
			draggable:true,
			scrollwheel: false,
			styles: styles,
    		mapTypeControl: true,
			zoomControl: true,
			streetViewControl: true,
			panControl:false,
			//disableDefaultUI: true,
		});
		
	if('ontouchstart' in window || navigator.msMaxTouchPoints){
		map.setOptions({draggable: false});
	}		
	

	var marker=new google.maps.Marker({
		position:myCenter,
		animation:google.maps.Animation.BOUNCE,
		icon:'/img/icons/marker.png'
	});

	marker.setMap(map);
	




	zoom = false;
	google.maps.event.addListener(marker,'click',function() {
		if (zoom) {
			map.setZoom(14);
			zoom = false;
		} else {
			map.setZoom(18);
			zoom = true;
		}
		
		map.setCenter(marker.getPosition());
	});

	google.maps.event.addListener(map,'center_changed',function() {
		// 1 seconds after the center of the map has changed, pan back to the marker
		window.setTimeout(function() {
			//map.panTo(marker.getPosition());
		},1000);
	});
	
	$(window).resize(function() {
		window.setTimeout(function() {
			map.panTo(marker.getPosition());
		},1000);		  
	});	
	
  
}
google.maps.event.addDomListener(window, 'load', initialize);
