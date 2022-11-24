
$('.BtnStartCourse').mouseenter(function() {

       $('.MainBackground-top').css({
          "transition": ".5s",
          "height": ""+($('.MainBackground').height()-100)+"px",
       });

       $('.pOne').css({
         "transition": "all 1s linear",
          "transform": "scale(4) rotate(0deg)",
       });

       $('.pTwo').css({
         "transition": "all 1s linear",
          "transform": "scale(3) rotate(0deg)",
       });

       $('.pThree').css({
         "transition": "all 1s linear",
          "transform": "scale(2) rotate(0deg)",
       });

       $('.MainLogo').css({
          "transition": "all .5s linear",
          "color": "#ffffff1f",
          "background": "#00000000",
       });

   }) .mouseleave(function() {

       $('.MainBackground-top').css({
           "transition": ".5s",
           "height": "400px",
       });

       $('.pOne').css({
         "transition": "all 1s linear",
          "transform": "scale(2) rotate(347deg)",
       });

       $('.pTwo').css({
         "transition": "all 1s linear",
          "transform": "scale(1.5) rotate(9deg)",
       });

       $('.pThree').css({
         "transition": "all 1s linear",
          "transform": "scale(1) rotate(352deg)",
       });

       $('.MainLogo').css({
          "transition": "all .5s linear",
          "color": "white",
          "background": "#00000070",
       });

   });
