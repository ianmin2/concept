<?php

$id="conn";
$connect = true;
include "../classes/r_main.php";


$fields 	= array('id','officer_password', 'officer_email', 'officer_telephone');
$expected 	=  array('id','officer_password','officer_telephone');

//Check if all the expected values are filled in
foreach( $expected as $k => $v ){

    if(@$_REQUEST[$v] == ""){
        header("Content-Type:application/json");
        echo $connection->wrap( $connection->makeResponse( "ERROR", "Failed to get the  ".str_replace('_', ' ',$v )."", "", true ) );
        exit;
    }

}

$oValid = $connection->num_rows("SELECT id FROM officers WHERE id='".$_REQUEST['id']."' LIMIT 1 ");

if( $oValid === 1 ){

	$query = "UPDATE officers SET officer_password='".$_REQUEST['officer_password']."', officer_email='".@$_REQUEST['officer_email']."', 
			officer_telephone='".$_REQUEST['officer_telephone']."' WHERE id='".$_REQUEST['id']."' LIMIT 1";
	
	header("Content-Type:application/json");
	echo $connection->aQuery( $query, true, "Application Successfully Activated", "Failed to activate the application.\n\nPlease try again" );
	exit;
	
}else{
	
	header("Content-Type:application/json");
	echo $connection->wrap( $connection->makeResponse("ERROR", "Failed to activate account. \n\n Please make sure that you provided a valid startup code", "") );
	exit;
	
}


?>