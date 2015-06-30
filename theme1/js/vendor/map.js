var myCenter=new google.maps.LatLng(51.50250,-0.10142);


var styles = [
  {
    stylers: [
      { hue: "#F57F49" },
      { saturation: -20 }
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: 100 },
      { visibility: "simplified" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
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

	//if('ontouchstart' in window || navigator.msMaxTouchPoints){
		//map.setOptions({draggable: false}); 
		map.setOptions({
			scaleControl: false, 
			draggable:false,
			scrollwheel: false,
			styles: styles,
    		mapTypeControl: false,
			zoomControl: true,
    		zoomControlOptions: {
       			style: google.maps.ZoomControlStyle.LARGE,
        		position: google.maps.ControlPosition.LEFT_CENTER
    		},	
			streetViewControl: true,
   			streetViewControlOptions: {
        		position: google.maps.ControlPosition.RIGHT_CENTER
    		},
			panControl:false,
			//disableDefaultUI: true,
		});
	//}

	var marker=new google.maps.Marker({
		position:myCenter,
		animation:google.maps.Animation.BOUNCE
		//icon:'/img/icons/gmap_pin.svg'
	});

	marker.setMap(map);
	


infowindow.open(map,marker);

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
