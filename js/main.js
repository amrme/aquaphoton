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
  checkSize();

  // run test on resize of the window
  $(window).resize(checkSize);
  if ($('#first-section').length) {
    $(document).scroll(function() {
      currentScroll = $(this).scrollTop();
      if (currentScroll + 200 > $('#first-section').offset().top) {
        // give navbar color
        $('.navbar-default, .navbar-header').css('background-color', '#fffbec');
      } else {
        $('.navbar-default, .navbar-header').css('background-color', 'transparent');
      }
    });
  }
});

//Function to the css rule
function checkSize() {
  if ($('.sampleClass').css('float') != 'none') {
    $('.navbar-default').css('background-color', '#fffbec');
  }
}
