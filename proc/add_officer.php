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

$qry = $connection->query($query,true);

if($qry){
	
	/* Fetch the officer id from the "officers" table  */
	$aCode = $connection->printQueryResults("SELECT id FROM officers WHERE officer_id ='".$_REQUEST['officer_id']."' LIMIT 1", true, false);
	header("Content-Type:application/json");
	echo $connection->wrap( $connection->makeResponse("SUCCESS", "Officer Successfully Added. <br> The activation code is <code> ".$aCode[0]["id"]." </code> .", "") );
	exit;
	
}else{
	
	/* Display the embarassing message of failure */
	header("Content-Type:application/json");
	echo $connection->wrap( $connection->makeResponse( "ERROR", "Failed to add the Officer. <br> ( Check to ensure that He/She is not added already. ) ", "" ) );
	exit;
	
}



?>