var trig = document.querySelector(".main-header__nav-trigger");
var nav = document.querySelector(".main-header__nav");
trig.onclick = function() {
  nav.classList.toggle("main-header__nav--active");
}

$(document).ready(function() {
  $('a[href^="#"]').click(function(event) {
    event.preventDefault();
    var el = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(el).offset().top
    }, 800);
  });
});


var links = document.getElementsByClassName("main-header__link");
for (var i=0; i < links.length; i++) {
  links[i].onclick = function(){
    nav.classList.remove("main-header__nav--active");
    }
  }

  $("body").click(function(e) {
        if($(e.target).closest(".main-header__nav").length==0)
        {
          nav.classList.remove("main-header__nav--active");
          }
    });
