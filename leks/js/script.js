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
    nav:true,
    dots:false,
    dotsEach:false,
    navText: ["<div><span></span></div>","<div><span></span></div>"],
    responsiveClass:true,
    responsive:{
        0:{
          items:1,
          margin: 0,
        },
        820:{
            items:2,
            margin: 35,
        },
        1120:{
            items:3,
            margin:35,
        },
        1370:{
            items:3,
            margin:35,
        },
        1425:{
            items:4,
            margin:35,
        }
    }
});


var tog = document.querySelector(".mobile-nav__toggle");
var list = document.querySelector(".mobile-nav__list");
tog.onclick = function(){
  this.classList.toggle("mobile-nav__toggle--active");
  list.classList.toggle("mobile-nav__list--active");
  }

var links = document.getElementsByClassName(".mobile-nav__link");
for (var i=0; i < links.length; i++) {
  links[i].onclick = function(){
  tog.classList.toggle("mobile-nav__toggle--active");
  list.classList.toggle("mobile-nav__list--active");
  }
}

$("body").click(function(e) {
  if($(e.target).closest(".mobile-nav").length==0) {
    list.classList.remove("mobile-nav__list--active");
    tog.classList.remove("mobile-nav__toggle--active");
    }
  });
