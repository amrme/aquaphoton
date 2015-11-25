// preloader
$(window).load(function() { // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({
    overflow: 'visible',
  });

});

// after loading scripts
$(document).ready(function() {
  var currentScroll = 0;
  if ($('#first-section').length) {
    $(document).scroll(function() {
      currentScroll = $(this).scrollTop();
      if (currentScroll + 200 > $('#first-section').offset().top) {
        // give navbar color
        $('.navbar-default').css('background-color', 'rgb(182, 23, 238)');
      } else {
        $('.navbar-default').css('background-color', 'transparent');
      }
    });
  }
});
