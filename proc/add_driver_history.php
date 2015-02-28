<?php

$id="conn";
$connect = true;
include "../classes/r_main.php";


$fields 	= array('driver_id','event_date','officer_id','officer_comment');
$expected 	=  $fields;

//Check if all the expected values are filled in
foreach( $expected as $k => $v ){

    if(@$_REQUEST[$v] == ""){
        header("Content-Type:application/json");
        echo $connection->wrap( $connection->makeResponse( "ERROR", "Failed to get the  ".str_replace('_', ' ',$v )."", "", true ) );
        exit;
    }

}


$query = "INSERT INTO driver_history ( ".implode(",", $fields )."  ) VALUES (";
foreach( $fields as $field ){
    $query .= "'".@$_REQUEST[$field]."',";
}
$query = rtrim($query, ',').")";

header("Content-Type:application/json");
echo $connection->aQuery( $query, true, "Comment Successfully registered on the driver's record.", "Failed to add comment." );
exit;

?>


