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
source = $('#products-template').html();
template = Handlebars.compile(source);
var products    = template(context);
source = $('#leadership-template').html();
template = Handlebars.compile(source);
var leadership    = template(context);

// doc ready
$(document).ready(function() {
  var currentScroll = 0;

  $('li a').on('click', function() {

    console.log('section clicked');

    var scrollAnchor = $(this).attr('data-scroll');
    console.log(scrollAnchor);
    var scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;

    $('body,html').animate({
      scrollTop: scrollPoint,
    }, 500);

    return false;

  });

  $(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
      $('section').each(function(i) {
          if ($(this).position().top <= windscroll - 20) {
            $('nav li.active').removeClass('active');
            $('nav li').eq(i).addClass('active');
          }
        });

    } else {
      $('nav li.active').removeClass('active');
    }
  }).scroll();

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

  // append products
  $('#product').html(products);

  // append leaders
  $('#leader').html(leadership);

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
