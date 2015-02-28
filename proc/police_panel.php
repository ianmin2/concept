<?php

    $id="conn";
    $connect = true;
    include "../classes/r_main.php";

    /* CHECK IF THE OFFICER HAS BEEN DUELY REGISTERED */
    $auth = $connection->num_rows( "SELECT id FROM officers WHERE id=".@$_REQUEST['user']." AND actif=1  LIMIT 1" , false );

    

if( $auth == 1 && @isset($_REQUEST['qr']) ){
        
        $command = @$_REQUEST['command'];
 
/* HANDLE DRIVER RECORD REQUESTS */
        if( $command == "drivers" ):
            
            /* FETCH AND RETURN THE REQUESTED DRIVER'S DATA */
            header("Content-Type:application/json");
            $dReg = $connection->printQueryResults( "SELECT * FROM drivers WHERE licence_number='".$_REQUEST['qr']."' LIMIT 1", true );
            $dLice = $connection->printQueryResults("SELECT * FROM licence_history WHERE driver_data='".$dreg[0]['licence_number']."' ORDER BY id DESC LIMIT 1", true);
            $dHist = $connection->printQueryResults( "SELECT * FROM driver_history WHERE driver_id='".$_REQUEST['qr']."' ORDER BY id DESC", true );
            $dVehi = $connection->printQueryResults( "SELECT event_date,officer_comment FROM vehicle_history WHERE driver_id='".$_REQUEST['qr']."' ORDER BY id DESC", true );
            $dTick = $connection->printQueryResults( "SELECT ticket_id,ticket_comment,ticket_date,ticket_amount,ticket_paid,amount FROM tickets_history WHERE driver_id='".$_REQUEST['qr']."' ORDER BY ID DESC  " );
            $dTickU = $connection->num_rows( "SELECT id FROM tickets_history WHERE driver_id='".$_REQUEST['qr']."' AND ticket_paid=0 " );
    
            //returning the results
            echo $connection->wrap( $connection->makeResponse( "SUCCESS" , array( "driver" => $dreg, "licence" => $dLice, "history" => $dHist, "vehicle" => $dVehi, "tickets" => @$dTick, "unpaid" => $dTickU ) , "" , true )  );
            exit;
  
/* HANDLE VEHICLE RECORD REQUESTS */
        elseif( $command == "vehicles" ):
        
            /* FETCH AND RETURN THE REQUESTED VEHICLE's DATA */
            header("Content-Type:application/json");
            $vReg = $connection->printQueryResults( "SELECT * FROM vehicles WHERE number_plate =".$_REQUEST['qr']." LIMIT 1", true );
            $vOwn = $connection->printQueryResults( "SELECT licence_owner,owner_id FROM drivers WHERE licence_number='".$vReg[0]['owner_licence']."'" );
            $vHist = $connection->printQueryResults( "SELECT event_date,officer_comment FROM vehicle_history WHERE vehicle_id='".$REQUEST['qr']."' ORDER BY id DESC " );
            
            //returning the results
    echo $connection->wrap( $connection->makeResponse( "SUCCESS", array( "vehicle" => $vReg, "owner" => $vOwn, "history" => $vHist ), "", true )  );
            exit;
  
/* HANDLE NOTIFICATION REQUESTS */
        elseif(  $command == "notifications" ):
        
            /* FETCH AND RETURN THE RELEVANT NOTIFICATIONS FOR THE REQUESTING OFFICER */
            header("Content-Type:application/json");
            $nList = $connection->printQueryResults("SELECT * FROM notifications WHERE target='".$_REQUEST['user']."' OR target='*'");
            
            //returning the results
            echo $connection->wrap( $connection->makeResponse( "SUCCESS", $nList, "", true ) );
            exit;
        
        else:

            //Let the user know that they threw a bomb at you.
            header("Content-Type:application/json");
            echo $connection->wrap( $connection->makeResponse( "ERROR", "THE APPLICATION MADE AN INVALID REQUEST!", "" ) );
            exit;
        
        endif;

        
    }else{
        
        //Let the user know that they threw a bomb at you.
        header("Content-Type:application/json");
        echo $connection->wrap( $connection->makeResponse( "ERROR", "THAT USER ACCOUNT HAS BEEN TERMINATED!", "" ) );
        exit;
        
    }
    

?>