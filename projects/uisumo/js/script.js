$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    navText: ["<div><span></span></div>","<div><span></span></div>"],
    items:1,
    dotsData:true,
    margin: 1000,
    mouseDrag: false
});

var quests = document.getElementsByClassName("ui-info__faq-question");
for (var i=0; i < quests.length; i++) {
  quests[i].onclick = function(){
      this.classList.toggle("ui-info__faq-question--active");
      var par = this.parentNode;
      var inner = par.querySelector(".ui-info__faq-answer");
      $(inner).slideToggle();
    }
  }

var tog = document.querySelector(".ui-nav__toggle");
var list = document.querySelector(".ui-nav__list");
tog.onclick = function(){
  this.classList.toggle("ui-nav__toggle--active");
  list.classList.toggle("ui-nav__list--active");
  }

var links = document.getElementsByClassName("ui-nav__link");
for (var i=0; i < links.length; i++) {
  links[i].onclick = function(){
  tog.classList.remove("ui-nav__toggle--active");
  list.classList.remove("ui-nav__list--active");
  }
}

$("body").click(function(e) {
  if($(e.target).closest(".ui-nav").length==0) {
    list.classList.remove("ui-nav__list--active");
    tog.classList.remove("ui-nav__toggle--active");
    }
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
