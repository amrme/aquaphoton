// preloader
$(window).load(function() { // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({
    overflow: 'visible',
  });

});

// Compile handlebars templates
var source   = $('#services-template').html();
var template = Handlebars.compile(source);
source   = $('#modalTemplate').html();
var modalTemplate = Handlebars.compile(source);
var services    = template(context);

// doc ready
$(document).ready(function() {
  var currentScroll = 0;

  if ($('#first-section').length) {
    $(document).scroll(function() {
      currentScroll = $(this).scrollTop();
      if (currentScroll + 10 > $('#first-section').offset().top) {
        $('.navbar-fixed-top').addClass('top-nav-collapse');
      } else {
        $('.navbar-fixed-top').removeClass('top-nav-collapse');
      }
    });
  }

  // append services
  $('#service').html(services);

  // handle modals for services
  $('.service-more-button').click(function() {

    var clickedServiceNum = $(this).data('id');

    var currentService = context.services[clickedServiceNum];

    console.log(currentService);

    //use the modal template to generate html
    // and put it in the DOM
    var html    = modalTemplate(currentService);
    $('#service-modal-content').html(html);
    $('#serviceModal').modal('show');
  });
});
