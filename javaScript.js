(function ($) {
    $.fn.slider = function(optUser) {
         var optDefault = {};
         settings = $.extend({}, optDefault, optUser);
         return this.each(function () {
              var itemLength = $('.slide').length,
                   addPgn = (function(){
                        for(var i = 0; i < itemLength; i+=1){
                             $('.slider-dots').append('<li class="dot">&bull;</li>');
                        }
                   })();

 var nextHnd = function() {

      var currentSlide = $('.active-slide'),
           nextSlide = currentSlide.next(),
           currentDot = $('.active-dot'),
           nextDot = currentDot.next();
      if(nextSlide.length === 0){
          nextSlide = $('.slide').first();
          nextDot = $('.dot').first();
 }

      currentSlide.fadeOut(600).removeClass('active-slide');
      nextSlide.fadeIn(600).addClass('active-slide');
      currentDot.removeClass('active-dot');
      nextDot.addClass('active-dot');
 };

     $('.arrow-next').on('click', nextHnd);


              var prevHnd = function(){
                   var currentSlide = $('.active-slide'),
                        prevSlide = currentSlide.prev(),
                        currentDot = $('.active-dot'),
                        prevDot = currentDot.prev();

                   if(prevSlide.length === 0){
                       prevSlide = $('.slide').last();
                       prevDot = $('.dot').last();
                   }

                   currentSlide.fadeOut(600).removeClass('active-slide');
                   prevSlide.fadeIn(600).addClass('active-slide');
                   currentDot.removeClass('active-dot');
                   prevDot.addClass('active-dot');
              };

              $('.arrow-prev').on('click', prevHnd);


              var autoSlid = (function(){
                   $('.slider-nav').hover(

                       function(){
                             clearInterval(myTimer);
                        },
                        function () {
                             myTimer = setInterval(nextHnd, 1000);
                             }
                        )
              })();

          });
         };
 })(jQuery);

 $(document).ready($('.slider').slider());


