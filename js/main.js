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

// add services
var context = { services: [
                        {
                          title: 'Service 1',
                          img: 'http://purrfectcatbreeds.com/wp-content/uploads/2014/06/siberian-cat1.jpg',
                          modal: 'modal1',
                        },
                        {
                          title: 'Service 2',
                          img: 'http://www.cats.org.uk/uploads/images/pages/photo_latest14.jpg',
                          modal: 'modal2',
                        },
                        {
                          title: 'Service 3',
                          img: 'http://dreamatico.com/data_images/cat/cat-4.jpg',
                          modal: 'modal3',
                        },
                        {
                          title: 'Service 4',
                          img: 'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg',
                          modal: 'modal4',
                        },
                          ], };
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
