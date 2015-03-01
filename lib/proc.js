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
                                        $("#add_driver_response").html( resp.data.message );;
                                        setTimeout( function(){ $("#add_driver_response").html(''); }, 10000 );
                                        
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
                        $("#add_driver_history_response").html( resp.data.message );;
                        setTimeout( function(){ $("#add_driver_history_response").html(''); }, 10000 );
                        
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
                    $("#add_licence_history_response").html( resp.data.message );;
                    setTimeout( function(){ $("#add_licence_history_response").html(''); }, 10000 );
                    
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
                
                
                                           
                        $("#add_officer").hide();
                        /* REQUEST REGISTRATION OF THE OFFICER */
                        $.ajax({
                            url: __URL__+"proc/add_officer.php",
                            data: {
                                officer_name: officer_name,
                                officer_id: officer_id,
                                officer_station: officer_station,
                                actif: 1
                            },
                            dataType: "jsonp",
                            success: function( resp ){
                                
                                $("#add_officer").show();
                                $("#add_officer_response").html('');
                                $("#add_officer_response").html( resp.data.message );
                                //setTimeout( function(){ $("#add_officer_response").html(''); }, 10000 );
                            }
                        });
                             
               
        
    });
    /* EO OFFICER ADDITION */
    
    
    /* STATION ADDITION */
    $("#add_station").on("click", function(){
        alert();
        var station_name = $("#station_name").val();
        var station_id = $("#station_id").val();
        var station_location = $("#station_location").val();
        

        $("#add_station").hide();
        /* Push the station data for recording */
        $.ajax({
            url : __URL__+"proc/add_station.php",
            data: {
                station_id: station_id,
                station_location: station_location,
                station_name: station_name
            },
            dataType: "jsonp",
            success: function( resp ){

                $("#add_station").show();
                $("#add_station_response").html('');
                $("#add_station_response").html( resp.data.message );
                setTimeout( function(){ $("#add_station_response").html(''); }, 10000 );

            }
        });                    
                    
           
    });
    /* EO STATION ADDITION */
    
    /* TICKET HISTORY ADDITION */
    $("#add_ticket_history").on("click", function(){
        
        var ticket_comment = $("#ticket_comment").val();
        var ticket_date = now();
        var ticket_amount = $("#ticket_amount").val();
        var driver_id = $("#driver_id").val();
        
        /* Evaluate for the payable amount */
        if( !ticket_amount || isNaN(ticket_amount) ){
            $("#ticket_amount").focus();
        }else{
            
            /* Evaluate for the comment */
            if( !ticket_comment || ticket_comment.length < 5 ){
                $("#ticket_comment").focus();
            }else{
                
                if( !driver_id  ){
                    $("#driver_id").focus();
                }else{
                    
                    $("#add_ticket_history").hide();
                    /* request a ticket addition */
                    $.ajax({
                        url: __URL__+"proc/add_ticket_history.php",
                        data: {
                            ticket_amount: ticket_amount,
                            ticket_comment: ticket_comment,
                            ticket_date: ticket_date,
                            driver_id: driver_id
                        },
                        dataType: "jsonp",
                        success: function( resp ){
                            
                            $("#add_ticket_history").show();
                            $("#add_ticket_history_response").html('');
                            $("#add_ticket_history_response").html( resp.data.message );
                            setTimeout( function(){ $("#add_ticket_history_response").html(''); }, 10000 );                           
                            
                        }
                    });
                    
                }
                
            }
            
        }
        
    });
    /* EO TICKET HISTORY ADDITION */
    
/* 
    RUNNING OUT OF TIME.
    THE ABOVE IS BAD ENOUGH SO BRACE YOURSELF FOR THAT WHICH COMES BELOW
    --ianmin2-- @ --00:13-- on -- March 13th 2015 --
*/    
    
    /* VEHICLE ADDITION */
    $("#add_vehicle").on("click", function(){
        
        var owner_id = $("#owner_id").val();
        var owner_name = $("#owner_name").val();
        var owner_licence = $("#owner_licence").val();
        var model = $("#model").val();
        var make = $("#make").val();
        var year = $("#year").val();
        var color = $("#color").val();
        var weight = $("#weight").val();
        var chasis_number = $("#chasis_number").val();
        var number_plate = $("#number_plate").val();
        var type = $("#type").val();
        
        $("#add_vehicle").hide();
        
        /* Request the server to add the vehicle */
        $.ajax({
            url: __URL__+"proc/add_vehicle",
            data: {
                owner_id: owner_id,
                owner_name: owner_name,
                owner_licence: owner_licence,
                model: model,
                make: make,
                year: year,
                color: color,
                weight: weight,
                chasis_number: chasis_number,
                number_plate: number_plate,
                type: type
            },
            dataType: "jsonp",
            success: function( resp ){
                
                $("#add_vehicle").show();
                $("#add_vehicle_response").html('');
                $("#add_vehicle_response").html( resp.data.message );
                setTimeout( function(){ $("#add_vehicle_response").html(''); }, 10000 );  
                
            }
        });
        
        
    });
    /* EO VEHICLE ADDITION */
    
    
    
    /* VEHICLE TYPE ADDITION */
    $("#add_vehicle_type").on("click", function(){
       
        var title = $("#title").val();
        
        $("#add_vehicle_type").hide();
        $.ajax({
            url: __URL__+"proc/add_vehicle_type.php",
            data: {
                title: title
            },
            dataType: "jsonp",
            success: function( resp ){
                
                $("#add_vehicle_type").show();
                $("#add_vehicle_type_response").html('');
                $("#add_vehicle_type_response").html( resp.data.message );
                setTimeout( function(){ $("#add_vehicle_type_response").html(''); }, 10000 );
                
            }
        })
        
    });
    /* EO VEHICLE TYPE ADDITION */
    
    /* VEHICLE HISTORY ADDITION */
    $("#add_vehicle_history").on("click", function(){
        
        var driver_id = $("#driver_id").val();
        var officer_id = localStorage.getItem("userID");
        var officer_comment = $("#officer_comment").val();
        var event_date = now();
        var vehicle_id = $("#vehicle_id").val();
        
        $("#add_vehicle_history").hide();
        /* Request the addition of vehicle history */
        $.ajax({
            url: __URL__,
            data: {
                driver_id: driver_id,
                officer_id: officer_id,
                officer_comment: officer_comment,
                event_date: event_date,
                vehicle_id: vehicle_id
            },
            dataType: "jsonp",
            success: function( resp ){
                
                $("#add_vehicle_history").show();
                $("#add_vehicle_history_response").html('');
                $("#add_vehicle_history_response").html( resp.data.message );
                setTimeout( function(){ $("#add_vehicle_history_response").html(''); }, 10000 );
                
            }
        });
        
    });
    /* EO VEHICLE HISTORY ADDITION */
    
    
    /* MOBILE APP ADD OFFICER */
    $("#app_add_officer").on("click", function(){
        
        var id = $("#id").val();
        var officer_email = $("#officer_email").val();
        var officer_password = $("#officer_password").val();
        var officer_telephone = $("#officer_telephone").val();
        
        
        $("#app_add_officer").hide();
        $.ajax({
            url: __URL__+"proc/app_add_officer.php",
            data: {
                officer_email: officer_email,
                officer_password: officer_password,
                officer_telephone: officer_telephone,
                id:id
            },
            dataType: "json_p",
            success: function( resp ){
                
                if( (resp.response) === "SUCCESS" ){
                    
                    localStorage.setItem("userID", id );
                    
                }else{
                    
                    $("#app_add_officer").show(); 
                    
                }
                
            }
        });
        
    });
    /* EO MOBILE APP ADD OFFICER */
    
});