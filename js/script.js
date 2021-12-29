$(document).ready(function(){

    $(window).scroll(function (){
        parallax();
      })
      
      function parallax() {
          var wScroll = $(window).scrollTop(); // anota que tan lejos de el top estamos
          $('.parallax').css('background-position', '0 '+(wScroll*0.10)+'px')
      }

      
    
})

