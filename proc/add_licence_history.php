<?php

$id="conn";
$connect = true;
include "../classes/r_main.php";


$fields 	= array('driver_data','renewal_date','expiry_date','amount','transaction_id');
$expected 	=  $fields;

//Check if all the expected values are filled in
foreach( $expected as $k => $v ){

    if(@$_REQUEST[$v] == ""){
        header("Content-Type:application/json");
        echo $connection->wrap( $connection->makeResponse( "ERROR", "Failed to get the licence ".str_replace('_', ' ',$v )."", "", true ) );
        exit;
    }

}


$query = "INSERT INTO licence_history ( ".implode(",", $fields )."  ) VALUES (";
foreach( $fields as $field ){
    $query .= "'".@$_REQUEST[$field]."',";
}
$query = rtrim($query, ',').")";

header("Content-Type:application/json");
echo $connection->aQuery( $query, true, "Licence Renewed Successfully.", "Failed to renew licence." );
exit;

?>