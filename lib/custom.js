/* Generate Year into element by range */
years = function (  $element, $start, $stop ){
    v ="";
    for( $stop; $stop >= $start; $stop-- ){
        v += '<option value="'+ $stop +'">'+ $stop;
    }
    document.getElementById($element).innerHTML = v;
    
}

//REAL-TIME TYPING EFFECT GENERATOR
var gameText = function (target, message, index, interval) {

    $(function () {
        
        if (index < message.length) {

            $(target).append(message[index++]);
            setTimeout(function () {
                gameText(target, message, index, interval);
            }, interval);

        }


    });

}


/* A new Date Object */
__D = new Date();

/* Generate A custom Date in Yyyy-Mm-Dd Hh:Ii:Ss Format */
now = function(){
    var _d = new Date();
   return _d.getFullYear() + "-" + ( _d.getMonth() + 1 ) + "-" + _d.getDate() + " " + _d.getHours() + ":" + _d.getMinutes() + ":" + _d.getSeconds();
};

/* Generate A custom Date yrs Years from now() */
later = function( yrs ){
    var _d = new Date();
    return ( _d.getFullYear() + yrs ) + "-" + ( _d.getMonth() + 1 ) + "-" + _d.getDate() + " " + _d.getHours() + ":" + _d.getMinutes() + ":" + _d.getSeconds();
}

/* Set the color of the panel  */
var setColor = function (color) {
    $('#style_color').attr("href", "css/style_" + color + ".css");
}
setColor('gray');