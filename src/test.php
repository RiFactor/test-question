<?php
$thisArray = array("apple", "orange", "apple", "grape", "pen", "cherry", "apple");
$thisArrayLength = count($thisArray);

foreach( $thisArray as $key=> $value ){
	$string = "";
	if ($value === "apple") {
    	$string = $value;
	} if ($key%2 === 0) {
		// $string.= " equal";
		($string === "") ? $string = "equal" : $string.= " equal";
	} if ($key === ($thisArrayLength - 1)) {
		$string .= " last";
	} 
    	echo $string."\n";
}
?>
