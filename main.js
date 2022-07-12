$(document).ready(function(){
    
    // Inicio función aparecer y desaparecer:
    $(window).scroll(function(){
        
        if($(this).scrollTop()>40){
            $('#topBtn').fadeIn();
        }
        else{
            $('#topBtn').fadeOut();
        }   
    });
    // Fin función aparecer y desaparecer.
    
    // Función para la transcisión hacia arriba:
    $("#topBtn").click(function(){
       $('html,body').animate({scrollTop:0}, 800); 
    }); // Fin Función transcisión hacia arriba.
});