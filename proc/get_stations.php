<?php

    $id ="conn";
    $connect = true;
    include "../classes/r_main.php";
    header("Content-Type: application/json");
    echo $connection->printQueryResults("SELECT id,station_name,station_location FROM stations", true, true );

?>