__URL__ = "http://eleanor/concept/";

 
$(function(){
   
   /* HANDLE BASIC DRIVER ADDITION */ 
    $("#add_driver").on("click", function(){
        
        var licence_number = $("#licence_number").val();
        var licence_owner  = $("#licence_owner").val();
        var owner_id       = $("#owner_id").val();
        var licence_class  = $("#licence_class").val();
        var licence_year   = $("#licence_year").val();
        var licence_expiry = $("#licence_expiry").val();

        //Evaluate for licence Number
        if( !licence_number || licence_number.length < 5 ){
            $("#licence_number").focus();
        }else{

            //Evaluate for licence owner name
            if( !licence_owner || licence_owner.length < 3 ){
                $("#licence_owner").focus();
            }else{

                //Evaluate for the owner's id number 
                if( !owner_id || owner_id.length < 5 ){
                    $("#owner_id").focusin();
                }else{

                    //Evaluate for the licence class
                    if( !licence_class  ){
                        $("#licence_class").focus();
                    }else{

                        //Evaluate for the licence issuance year
                        if( !licence_year || licence_year.length < 4 ){
                            $("#licence_year").focus();
                        }else{

                            if( !licence_expiry || licence_expiry.length < 4 ){
                                $("#licence_expiry").focus();
                            }else{

                                $("#add_driver").hide();
                                /* Send The Data to for processing */
                                $.ajax({
                                    url: __URL__+"proc/add_driver.php",
                                    data: { 
                                        licence_number:licence_number, 
                                        licence_owner:licence_owner, 
                                        owner_id:owner_id, 
                                        licence_class: licence_class, 
                                        licence_year: licence_year, 
                                        licence_expiry: licence_expiry 
                                    },
                                    dataType: "jsonp",
                                    success: function( resp ){
                                        
                                        $("#add_driver").show();
                                        $("#add_driver_response").html('');
                                        gameText("#add_driver_response", resp.data.message , 0, 70);
                                        setTimeout( function(){ $("#add_driver_response").html(''); } , 30000 );
                                        
                                    }
                                });

                            }

                        }

                    }

                }


            }

        }
    });
    /* EO DRIVER ADDITION */
    
    
    /* DRIVER HISTORY ADDITION */
    $("#add_driver_history").on("click", function(){
        
        var driver_id   = $("#driver_id").val();
        var event_date  = now();
        var officer_id  = localStorage.getItem("userID");
        var officer_comment     = $("#officer_comment").val();
        
        //Evaluate for the licence number 
        if( !driver_id ){
            $("#driver_id").focus();
        }else{
            
            //Evaluate for the officer comment
            if( !officer_comment || officer_comment.length < 5 ){
                $("#officer_comment").focus();
            }else{
               
                $("#add_driver_history").hide();
                /* POST THE COMMENT FOR RECORD KEEPING */
                $.ajax({
                    url : __URL__+"proc/add_driver_history.php",
                    data: {
                        driver_id: driver_id,
                        event_date: event_date,
                        officer_id: officer_id,
                        officer_comment: officer_comment
                    },
                    dataType: "jsonp",
                    success: function( resp ){
                        
                        $("#add_driver_history").show();
                        $("#add_driver_history_response").html('');
                        gameText("#add_driver_history_response", resp.data.message , 0, 70);
                        setTimeout( function(){ $("#add_driver_history_response").html(''); } , 30000 );
                        
                    }
                });
                
            }
            
        }
        
    });
    /* EO DRIVER HISTORY ADDITION */
    
    
    
    /* LICENCE HISTORY ADDITION */
    $("#add_licence_history").on("click", function(){
        
        var driver_data = $("#driver_data").val();
        var renewal_date = now();
        var exp = $("#expiry_date").val();
        var v = ( exp === undefined || isNaN(exp) ) ? false : true;
        var amount = $("#amount").val();
        var transaction_id = ( now() + "**" + driver_data );
         
        //evaluate for the licence expiry 
        if( !v ){
            $("#expiry_date").focus(); 
        }else{
            
            $("#add_licence_history").hide(); 
            /* REQUEST THE ADDIDTION OF LICENCE RENEWAL RECORDS */
            $.ajax({
                url: __URL__+"proc/add_licence_history.php",
                data: {
                    driver_data: driver_data,
                    renewal_date: renewal_date,
                    expiry_date: later(exp),
                    amount: amount,
                    transaction_id: transaction_id
                },
                dataType: "jsonp",
                success: function( resp ){
                    
                    $("#add_licence_history").show();
                    $("#add_licence_history_response").html('');
                    gameText("#add_licence_history_response", resp.data.message , 0, 70);
                    setTimeout( function(){ $("#add_licence_history_response").html(''); } , 30000 );
                    
                }
            });            
            
        }
        
    });
    /* EO LICENCE HISTORY ADDITION */
    
    
    /* OFFICER ADDITION */
    $("#add_officer").click(function(){
        
        var officer_name = $("#officer_name").val();
        var officer_id = $("#officer_id").val();
        var officer_station  = $("#officer_station").val();
        var actif  = $("#actif").val();
        
        /* Evaluate for the officer name */
        if( !officer_name || officer_name.length < 3 ){
            $("#officer_name").focus();
        }else{
            
           /* Evaluate for the officer id */ 
            if( !officer_id ){
                $("#officer_id").focus();
            }else{
                
                /* Evaluate for officer station */
                if( !officer_station || officer_station.length < 5 ){
                    $("#officer_station").focus();
                }else{
                    
                    if( actif === "" ){
                        $("#actif").focus();
                    }else{
                        
                        $("#add_officer").hide();
                        /* REQUEST REGISTRATION OF THE OFFICER */
                        $.ajax({
                            url: __URL__+"proc/add_officer.php",
                            data: {
                                officer_name: officer_name,
                                officer_id: officer_id,
                                officer_station: officer_station,
                                actif: actif
                            },
                            dataType: "jsonp",
                            success: function( resp ){
                                
                                $("#add_officer").show();
                                $("#add_officer_response").html('');
                                gameText("#add_officer_response", resp.data.message , 0, 70)
                                setTimeout( function(){ $("#add_officer_response").html(''); } , 30000 );
                            }
                        });
                        
                    }
                    
                }
                
            }
            
        }
        
    });
    /* EO OFFICER ADDITION */
    
    
    /* STATION ADDITION */
    $("#add_station").on("click", function(){
        
        var station_name = $("station_name").val();
        var station_id = $("station_id").val();
        var station_location = $("station_location").val();
        
        /* Evaluate for the station name */
        if( !station_name || station_name.length < 3 ){
            $("#station_name").focus();
        }else{
            
            /* Evaluate for the station id */
            if( !station_id ){
                $("#station_id").focus();
            }else{
                
                /* Evaluate for station location */
                if( !station_location ){
                    $("#station_location").focus();
                }else{
                    
                    $("#add_station_location").hide();
                    /* Push the station data for recording */
                    $.ajax({
                        url : __URL__+"proc/add_station.php";
                        data: {
                            station_id: station_id,
                            station_location: station_location,
                            station_name: station_name
                        },
                        dataType: "jsonp",
                        success: function{
                           
                            $("#add_station_location").show();
                            $("#add_station_location_response").html('');
                            gameText("#add_station_location_response", resp.data.message , 0, 70)
                            setTimeout( function(){ $("#add_station_location_response").html(''); } , 30000 );
                           
                        }
                    });                    
                    
                }
                
            }
            
        }
        
    });
    /* EO STATION ADDITION */
    
    /* TICKET HISTORY ADDITION */
    $("#add_ticket_history").on("click", function(){
        
        var ticket_comment = $("#ticket_comment").val();
        var ticket_date = now();
        var ticket_amount = $("#ticket_amount").val();
        var ticket_id = now() + driver_id;
        
    });
    /* EO TICKET HISTORY ADDITION */
    
});