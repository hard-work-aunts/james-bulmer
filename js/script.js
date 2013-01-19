$(document).ready(function() {
	$('#map_canvas').gmap3({
		map:{
			options:{
				center: [38, -97],
			     zoom: 4
			}
		},
		// Alabama
		polygon: {
			values: [{
				data: {
					state: "Alabama"
				},
				options: {
					strokeColor: "#000000",
					strokeOpacity: 1,
					strokeWeight: 1,
					fillColor: "#0099cc",
					fillOpacity: 0.35,
					paths: [
[35.0041, -88.1955],[34.9918, -85.6068],[32.8404, -85.1756],[32.2593, -84.8927],[32.1535, -85.0342],[31.7947, -85.1358],[31.5200, -85.0438],[31.3384, -85.0836],[31.2093, -85.1070],[31.0023, -84.9944],[30.9953, -87.6009],[30.9423, -87.5926],[30.8539, -87.6256],[30.6745, -87.4072],[30.4404, -87.3688],[30.1463, -87.5240],[30.1546, -88.3864],[31.8939, -88.4743],[34.8938, -88.1021],[34.9479, -88.1721],[34.9107, -88.1461]
					]
				}
			}],
			onces:{
				click: function(polygon, event, context){
					polygon.setOptions({
						fillColor: "#FFAF9F",
						strokeColor: "#FF512F"
					});
					console.log("Custome data: ", context.data);
				}
			}
		}
	});
 });