$('.navbar .dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(900,"swing");
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300,"swing");
});

$(window).scroll(function(){
	
});

(function($) {
  "use strict";
  //Pre loader
  $(window).on('load',function() {
      $('.preloader').delay(400).slideUp('slow'); // set duration in brackets    
  });

  //Scroll Function
  $(window).scroll(function() {
    /**nav**/
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);

    /**scroll Top**/
      if ($(this).scrollTop() > 200) {
          $('.scroll-top').fadeIn();
          $('.scroll-top').removeClass('not-visible');
      } else {
          $('.scroll-top').fadeOut();
      }
  });
  $('.scroll-top').on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: 0
      }, 500);
  });
  $('.navbar-toggler').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('tfocus');
});  

  //calling Aos animate
  AOS.init({
    offset: 100,
    duration: 1200,
    delay: 300,
    easing: 'ease',
    once: true,
})

})(window.jQuery);
