$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.ap-workflow__slider').owlCarousel({
    loop:true,
    nav:false,
    items:1,
    dotsData:true,
    margin: 1000
});

$('.ap-opinions__slider').owlCarousel({
    loop:true,
    nav:true,
    navText: ["<img src='img/svg/ico_prev.svg'>","<img src='img/svg/ico_next.svg'>"],
    items:1,
    margin: 1000
});

$(document).ready(function() {
  $('a[href^="#"]').click(function(event) {
    event.preventDefault();
    var el = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(el).offset().top-40
    }, 600);
  });
});
