<?php

$id="conn";
$connect = true;
include "../classes/r_main.php";


$fields 	= array('ticket_comment','ticket_date','ticket_amount','driver_id');
$expected 	=  $fields;

//Check if all the expected values are filled in
foreach( $expected as $k => $v ){

    if(@$_REQUEST[$v] == ""){
        header("Content-Type:application/json");
        echo $connection->wrap( $connection->makeResponse( "ERROR", "Failed to get the  ".str_replace('_', ' ',$v )."", "", true ) );
        exit;
    }

}


$query = "INSERT INTO driver_history ( ".implode(",", $fields ).", ticket_id  ) VALUES (";
foreach( $fields as $field ){
    $query .= "'".@$_REQUEST[$field]."',";
}
$query = $query." '".substr( md5( $_REQUEST['ticket_comment'].$_REQUEST['driver_id'].$_REQUEST['ticket_date'] ), 5, 25 )."' )";

header("Content-Type:application/json");
echo $connection->aQuery( $query, true, "Ticket successfully recorded.", "Failed to record ticket.<br>Please try again" );
exit;

?>