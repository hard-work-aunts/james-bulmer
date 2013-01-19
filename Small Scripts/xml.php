<?php

// This script takes in the xml data and outputs usable code

error_reporting(E_ALL);
ini_set('error_reporting', E_ALL);

$xml = simplexml_load_file('http://econym.org.uk/gmap/states.xml');

foreach ($xml->state as $state) {
	foreach ($state->point as $point) {
		echo "[" . $point->attributes() ->lat->__toString() . ", " . $point->attributes() ->lng->__toString() . "],";
	}
	echo "<br><br>";
}
