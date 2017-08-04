$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.lk-promo__slider').owlCarousel({
    loop:true,
    nav:true,
    navText: ["<div><span></span></div>","<div><span></span></div>"],
    items:1,
    mouseDrag:false
});

$('.lk-products__slider').owlCarousel({
    loop:true,
    navText: ["<div><span></span></div>","<div><span></span></div>"],
    responsiveClass:true,
    dots:true,
    dotsEach:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:2,
            margin:35,
        },
        1370:{
            items:2,
            margin:35,
            nav:true,
        },
        1425:{
            items:4,
            margin:35,
            dots:false,
            dotsEach:false,
            nav:true,
        }
    }
});
