<?php

$id="conn";
$connect = true;
include "../classes/r_main.php";


$fields 	= array('officer_name','officer_id','officer_password','officer_email','officer_telephone','officer_station','actif');
$expected 	= array('officer_name','officer_id','officer_station','actif');


//Check if all the expected values are filled in
foreach( $expected as $k => $v ){

    if(@$_REQUEST[$v] == ""){
        header("Content-Type:application/json");
        echo $connection->wrap( $connection->makeResponse( "ERROR", "Failed to get the ".str_replace('_', ' ',$v )."", "", true ) );
        exit;
    }

}


$query = "INSERT INTO officers ( ".implode(",", $fields )."  ) VALUES (";
foreach( $fields as $field ){
    $query .= "'".@$_REQUEST[$field]."',";
}
$query = rtrim($query, ',').")";

header("Content-Type:application/json");
echo $connection->aQuery( $query, true, "Officer Successfully registered.", "Failed to add officer." );
exit;

?>