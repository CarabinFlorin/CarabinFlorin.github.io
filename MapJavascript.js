//Style of the map
{
var myStyles =[
{
	"elementType": "geometry",
	"stylers": [
		{"color": "#ebe3cd"}
	]
},
{
	"elementType": "labels",
	"stylers": [
		{"visibility": "off"}
	]
},
{
	"elementType": "labels.text.fill",
	"stylers": [
	{
		"color": "#523735"
	}
	]
},
{
	"elementType": "labels.text.stroke",
	"stylers": [
	{
		"color": "#f5f1e6"
	}
	]
},
{
	"featureType": "administrative",
	"elementType": "geometry.stroke",
	"stylers": [
	{
		"color": "#c9b2a6"
	}
	]
},
{
	"featureType": "administrative.land_parcel",
	"elementType": "geometry.stroke",
	"stylers": [
	{
		"color": "#dcd2be"
	}
	]
},
{
	"featureType": "administrative.land_parcel",
	"elementType": "labels.text.fill",
	"stylers": [
	{
		"color": "#ae9e90"
	}
	]
},
{
	"featureType": "landscape.natural",
	"elementType": "geometry",
	"stylers": [
	{
		"color": "#dfd2ae"
	}
	]
},
{
	"featureType": "poi",
	"elementType": "geometry",
	"stylers": [
	{
		"color": "#dfd2ae"
	}
	]
},
{
	"featureType": "poi",
	"elementType": "labels.text.fill",
	"stylers": [
	{
		"color": "#93817c"
	}
	]
},
{
	"featureType": "poi.attraction",
	"elementType": "labels",
	"stylers": [
	{
		"visibility": "off"
	}
	]
},
{
	"featureType": "poi.business",
	"elementType": "labels",
	"stylers": [
	{
		"visibility": "off"
	}
	]
},
{
	"featureType": "poi.government",
	"elementType": "labels",
	"stylers": [
	{
		"visibility": "off"
	}
	]
},
{
	"featureType": "poi.medical",
	"elementType": "labels",
	"stylers": [
	{
		"visibility": "off"
	}
	]
},
{
	"featureType": "poi.park",
	"elementType": "geometry.fill",
	"stylers": [
	{
		"color": "#a5b076"
	}
	]
},
{
	"featureType": "poi.park",
	"elementType": "labels.text.fill",
	"stylers": [
	{
		"color": "#447530"
	}
	]
},
{
	"featureType": "poi.place_of_worship",
	"elementType": "labels",
	"stylers": [
	{
		"visibility": "off"
	}
	]
},
{
	"featureType": "poi.school",
	"elementType": "labels",
	"stylers": [
	{
		"visibility": "off"
	}
	]
},
{
	"featureType": "poi.sports_complex",
	"elementType": "labels",
	"stylers": [
	{
		"visibility": "off"
	}
	]
},
{
	"featureType": "road",
	"elementType": "geometry",
	"stylers": [
	{
		"color": "#f5f1e6"
	}
	]
},
{
	"featureType": "road.arterial",
	"elementType": "geometry",
	"stylers": [
	{
		"color": "#fdfcf8"
	}
	]
},
{
	"featureType": "road.highway",
	"elementType": "geometry",
	"stylers": [
	{
		"color": "#f8c967"
	}
	]
},
{
	"featureType": "road.highway",
	"elementType": "geometry.stroke",
	"stylers": [
	{
		"color": "#e9bc62"
	}
	]
},
{
	"featureType": "road.highway.controlled_access",
	"elementType": "geometry",
	"stylers": [
	{
		"color": "#e98d58"
	}
	]
},
{
	"featureType": "road.highway.controlled_access",
	"elementType": "geometry.stroke",
	"stylers": [
	{
		"color": "#db8555"
	}
	]
},
{
	"featureType": "road.local",
	"elementType": "labels.text.fill",
	"stylers": [
	{
		"color": "#806b63"
	}
	]
},
{
	"featureType": "transit",
	"elementType": "labels",
	"stylers": [
	{
		"visibility": "off"
	}
	]
},
{
	"featureType": "transit.line",
	"elementType": "geometry",
	"stylers": [
	{
		"color": "#dfd2ae"
	}
	]
},
{
	"featureType": "transit.line",
	"elementType": "labels.text.fill",
	"stylers": [
	{
		"color": "#8f7d77"
	}
	]
},
{
	"featureType": "transit.line",
	"elementType": "labels.text.stroke",
	"stylers": [
	{
		"color": "#ebe3cd"
	}
	]
},
{
	"featureType": "transit.station",
	"elementType": "geometry",
	"stylers": [
	{
		"color": "#dfd2ae"
	}
	]
},
{
	"featureType": "water",
	"elementType": "geometry.fill",
	"stylers": [
	{
		"color": "#b9d3c2"
	}
	]
},
{
	"featureType": "water",
	"elementType": "labels.text.fill",
	"stylers": [
	{
		"color": "#92998d"
	}
	]
}
];
}

function initMap(){
	//Map options
	var options = {
		zoom:15,
		center:{lat:45.758513, lng:21.228861},
		styles: myStyles
	}
	//Create map
	var map = new google.maps.Map(document.getElementById('map'),options);
	
	//Piata Victoriei
	addMarker(
		{lat:45.75372, lng:21.2259}, 
		'Piata Unirii marker.png',
		'<h1>Piata Victoriei</h1><img src="Piata Victoriei sample.png">',
		'Piata Victoriei.html'
	);
	//Catedrala
	addMarker(
		{lat:45.750626, lng:21.224234}, 
		'Catedrala marker.png',
		'<h1>Catedrala Mitropolitană</h1><img src="Catedrala sample.jpg">',
		'Catedrala.html'
	);
	//Piata unirii
	addMarker(
		{lat:45.758028, lng:21.2293}, 
		'Piata Unirii marker.png',
		'<h1>Piata Unirii</h1><img src="Piata Unirii sample.jpg">',
		'Piata Unirii.html'
	);
	//Parcul Botanic
	addMarker(
		{lat:45.76055, lng:21.22548}, 
		'Parc marker.png',
		'<h1>Parcul Botanic</h1><img src="Parc sample.jpg">',
		'Parc.html'
	);
	//Muzeul Banatului
	addMarker(
		{lat:45.757038, lng:21.232469}, 
		'Muzeu marker.png',
		'<h1>Muzeul Banatului</h1><img src="Muzeu sample.jpg">',
		'Muzeu.html'
	);
	//Castelul Huniade
	addMarker(
		{lat:45.753056, lng:21.226944}, 
		'Castel marker.png',
		'<h1>Castelul Huniade</h1><img src="Castel sample.jpg">',
		'Castel.html'
	);
	
	function addMarker(coords, markerIcon, sliderInfo, link){
		//Create marker
		var marker = new google.maps.Marker({
			position: coords, 
			map: map,
			icon: markerIcon
		});
		
		//Create info slide
		var infoWindow = new google.maps.InfoWindow({
			content: sliderInfo
		});
		
		//Start Info Window
		marker.addListener('mouseover', function(){
			infoWindow.open(map, marker);
		});
		//Stop Info Window
		marker.addListener('mouseout', function(){
			infoWindow.close(map, marker);
		});
		//Redirect to another page
		marker.addListener('click', function(){
			window.location.replace(link);
		});
	}
}