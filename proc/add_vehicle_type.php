<?php

$id="conn";
$connect = true;
include "../classes/r_main.php";


$fields 	= array('title');
$expected 	=  $fields;

//Check if all the expected values are filled in
foreach( $expected as $k => $v ){

    if(@$_REQUEST[$v] == ""){
        header("Content-Type:application/json");
        echo $connection->wrap( $connection->makeResponse( "ERROR", "Failed to get the vehicle  ".str_replace('_', ' ',$v )."", "", true ) );
        exit;
    }

}


$query = "INSERT INTO vehicle_type ( ".implode(",", $fields )."  ) VALUES (";
foreach( $fields as $field ){
    $query .= "'".@$_REQUEST[$field]."',";
}
$query = rtrim($query, ',').")";

header("Content-Type:application/json");
echo $connection->aQuery( $query, true, "SUccessfully added vehicle type.", "Failed to add vehicle type." );
exit;

?>