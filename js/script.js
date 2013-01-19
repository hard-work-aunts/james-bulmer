$(document).ready(function() {
	
	var mapOptions = {
		center: new google.maps.LatLng(38, -97),
		zoom: 4,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	
	var map = new google.maps.Map(document.getElementById('map_canvas'),  mapOptions);
	
	var coloradoPath = [
		new google.maps.LatLng(37.0004, -109.0448),
		new google.maps.LatLng(36.9949, -102.0424),
		new google.maps.LatLng(41.0006, -102.0534),
		new google.maps.LatLng(40.9996, -109.0489),
		new google.maps.LatLng(37.0004, -109.0448)
	];
	
	colorado = new google.maps.Polygon({
		paths: coloradoPath,
		fillColor: '#ffffff',
		fillOpacity: 0.66,
		strokeWeight: 1,
		clickable: true
	});
	
	colorado.setMap(map);
	
	colorado.fillColor = '#0099cc';
});