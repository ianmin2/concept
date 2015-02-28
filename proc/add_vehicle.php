<?php

$id="conn";
$connect = true;
include "../classes/r_main.php";


$fields 	= array('owner_id','owner_licence','model', 'make', 'year', 'color', 'weight', 'chasis_number', 'number_plate', ' type' );
$expected 	=  $fields;

//Check if all the expected values are filled in
foreach( $expected as $k => $v ){

    if(@$_REQUEST[$v] == ""){
        header("Content-Type:application/json");
        echo $connection->wrap( $connection->makeResponse( "ERROR", "Failed to get the vehicle ".str_replace('_', ' ',$v )."", "", true ) );
        exit;
    }

}


$query = "INSERT INTO vehicles ( ".implode(",", $fields )."  ) VALUES (";
foreach( $fields as $field ){
    $query .= "'".@$_REQUEST[$field]."',";
}
$query = rtrim($query, ',').")";

header("Content-Type:application/json");
echo $connection->aQuery( $query, true, "Successfully registered vehicle.", "Failed to register vehicle." );
exit;

?>