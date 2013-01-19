<?php

// This script takes in the xml data and outputs usable code

header("Content-type: application/x-javascript");

$xml = simplexml_load_file('http://econym.org.uk/gmap/states.xml');

foreach ($xml->state as $state) {
	echo "\t". str_replace(' ', '_', strtolower($state->attributes() ->name)) ." = new google.maps.Polygon({\n";
	echo"\t\tpaths: [\n";
	foreach ($state->point as $point) {
		echo "\t\t\tnew google.maps.LatLng(" . $point->attributes() ->lat->__toString() . ", " . $point->attributes() ->lng->__toString() . "),\n";
	}
	echo "\t\t],\n";
	echo "\t\tfillColor: '#0099cc',\n";
	echo "\t\tfillOpacity: 0.66,\n";
	echo "\t\tstrokeWeight: 1,\n";
	echo "\t\tclickable: true\n";
	echo "\t});\n";
	echo "\t\n";
	echo "\t" . str_replace(' ', '_', strtolower($state->attributes() ->name)) . ".setMap(map);\n";
	echo "\t\n";
}
