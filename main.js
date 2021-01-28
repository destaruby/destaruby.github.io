$('.parallaxbg').hide();
        $(window).on({
            load: function () {
                $('.loader').hide();
                $('.parallaxbg').show();

            }
        })

        $(function () { // wait for document ready
          // init
          var controller = new ScrollMagic.Controller();
      
          // define movement of panels
          var wipeAnimation = new TimelineMax()
            // animate to second panel
           
            .to("#slideContainer", 1,   {x: "-5.56%"})
            .to("#slideContainer", 1,   {x: "-11.12%"})
            .to("#slideContainer", 1,   {x: "-16.68%"})
            .to("#slideContainer", 1,   {x: "-22.24%"})
            .to("#slideContainer", 1,   {x: "-27.8%"})
            .to("#slideContainer", 1,   {x: "-33.36%"})
            .to("#slideContainer", 1,   {x: "-38.92%"})
            .to("#slideContainer", 1,   {x: "-44.48%"})
            .to("#slideContainer", 1,   {x: "-50.4%"})
            .to("#slideContainer", 1,   {x: "-55.6%"})
            .to("#slideContainer", 1,   {x: "-61.16%"})
            .to("#slideContainer", 1,   {x: "-66.72%"})
            .to("#slideContainer", 1,   {x: "-72.28%"})
            .to("#slideContainer", 1,   {x: "-77.84%"})
            .to("#slideContainer", 1,   {x: "-83.4%"})
            .to("#slideContainer", 1,   {x: "-88.96%"})
            

          // create scene to pin and link animation
          new ScrollMagic.Scene({
              triggerElement: "#pinContainer",
              triggerHook: 0,
              duration: "1900%"
            })
            .setPin("#pinContainer")
            .setTween(wipeAnimation)
            .addTo(controller);s
        });
       

//button menu bottom right -- effects when it will display
$(document).ready(function() {
    $(".btn-group").hide();
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 50) {
          $(".btn-group").show();
        } else {
            $(".btn-group").hide();
        } 
      });
    });

    
  $(document).scroll(function() {
          var y = $(this).scrollTop();
          if (y < 50) {
            $(".mainmenu").show();
          } else {
              $(".mainmenu").hide();
          } 
        });
    
  

//title logo in left hand corner -- effects when it will display
  /*
    $(document).ready(function() {
      $(".titlename").hide();
      $(document).scroll(function() {
          var y = $(this).scrollTop();
          if (y > 500) {
            $(".titlename").show();
          } else {
              $(".titlename").hide();
          } 
        });
      });
*/

 
  $(window). scroll(function() {
      parallax();
    })
    
    function parallax() {
    
      var wScroll = $(window).scrollTop();
    
      $('.parallaxbg').css('background-position', 'center '+(wScroll*0.5)+'px')
    
    } 

  /*  $('a[href*="#"]').on('click', function (e) {
      e.preventDefault()
    
      $('html, body').animate(
        {
          scrollTop: $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
      )
    })
   
*/
