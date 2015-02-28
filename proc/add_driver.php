<?php

    $id="conn";
    $connect = true;
    include "../classes/r_main.php";

   
    $fields 	= array('licence_number','licence_owner','owner_id','licence_class','licence_year','licence_expiry');
    $expected 	=  $fields;
    
    //Check if all the expected values are filled in
    foreach( $expected as $k => $v ){
    	
        if(@$_REQUEST[$v] == ""){
            header("Content-Type:application/json");
            echo $connection->wrap( $connection->makeResponse( "ERROR", "Failed to get the Driver ".str_replace('_', ' ',$v )."", "", true ) );
            exit;
        }
       
    }
    
    /* die( $connection->wrap( $connection->makeResponse( "SUCCESS", "WORKS TILL HERE", "" ) ) ); */

    
    $query = "INSERT INTO drivers ( ".implode(",", $fields )."  ) VALUES (";
    foreach( $fields as $field ){
        $query .= "'".@$_REQUEST[$field]."',";
    }
    $query = rtrim($query, ',').")";
    
    header("Content-Type:application/json");
    echo $connection->aQuery( $query, true, "Driver Successfully registered.", "Failed to add Driver." );
    exit;

?>