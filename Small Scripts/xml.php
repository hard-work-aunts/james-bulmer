<?php

// This script takes in the xml data and outputs usable code

$xml = simplexml_load_file('http://econym.org.uk/gmap/states.xml');

foreach ($xml->state as $state) {
	foreach ($state->point as $point) {
		echo "[" . $point->attributes() ->lat->__toString() . ", " . $point->attributes() ->lng->__toString() . "],";
	}
	echo "<br><br>";
}
