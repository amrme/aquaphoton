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

// add services
var context = { services: [{title: 'Service 1',
                                            img: 'http://purrfectcatbreeds.com/wp-content/uploads/2014/06/siberian-cat1.jpg',
                        },
                        {title: 'Service 2',
                                                                    img: 'http://purrfectcatbreeds.com/wp-content/uploads/2014/06/siberian-cat1.jpg',
                                                },
                                                {title: 'Service 2',
                                                                                            img: 'http://purrfectcatbreeds.com/wp-content/uploads/2014/06/siberian-cat1.jpg',
                                                                        },
                                                                        {title: 'Service 2',
                                                                                                                    img: 'http://purrfectcatbreeds.com/wp-content/uploads/2014/06/siberian-cat1.jpg',
                                                                                                },
                                                                                                {title: 'Service 2',
                                                                                                                                            img: 'http://purrfectcatbreeds.com/wp-content/uploads/2014/06/siberian-cat1.jpg',
                                                                                                                        },
                                                                                                                        {title: 'Service 2',
                                                                                                                                                                    img: 'http://purrfectcatbreeds.com/wp-content/uploads/2014/06/siberian-cat1.jpg',
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
});
