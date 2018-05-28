$(document).ready(function() {
    // Button Menu
    $('.button').click(function(){
      $('#menu-principal').toggleClass('open');
    });

    // Animation Navbar
    $('.navbar').affix({
      offset: {
          top: 20
      }
    });
 });

$(window).on("load", function() {
  "use strict";
  $('#loading').fadeOut();
});
