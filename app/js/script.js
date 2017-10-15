prev = document.querySelector('.slider__prev');
next = document.querySelector('.slider__next');
submit = document.querySelector('.subscribe__form-submit');
var lastActive=0;
if (document.documentElement.clientWidth <= 612) {
  if (submit.innerHTML != "OK") {
    submit.innerHTML = "OK";
  }
}

window.onresize = function(e) {
  if (document.documentElement.clientWidth <= 612) {
    if (submit.innerHTML != "OK") {
      submit.innerHTML = "OK";
    }
  } else {
    if (submit.innerHTML != "Subscribe") {
      submit.innerHTML = "Subscribe";
    }
  }

};

const mySiema = new Siema({
  selector: '.slider__content',
  perPage: 1,
  onInit: init,
  onChange: check,
});



function init(){
  prev.addEventListener('click', () => mySiema.prev());
  next.addEventListener('click', () => mySiema.next());

  pag = document.querySelector('.slider__pagination');
  pag.children[0].classList.add("active");

  for (var i = 0; i < pag.children.length; i++) {
    pag.children[i].addEventListener('click', setSlide(i));
   }


   //замыкание для переходов по слайдам
   function setSlide(i){
    return function (e){
      mySiema.goTo(i);
    };
  }
}


function check(){
  //погасить стрелки на крайних слайдах
  curSlide = this.currentSlide;
  if (curSlide == 2) {
    next.classList.add("disable");
    } else {
      next.classList.remove("disable");
    }
  if (curSlide == 0) {
    prev.classList.add("disable");
    } else {
      prev.classList.remove("disable");
    }

  //переключать активный пункт пагинации
  pag.children[lastActive].classList.remove("active");
  pag.children[curSlide].classList.add("active");
  lastActive = curSlide;
}


checkMark = document.querySelector('.checkmark');
loader = document.querySelector('.circle-loader');

//форма
submit.addEventListener('click', function(e){
  e.preventDefault();
  submit.style.color = "transparent";

  loader.classList.toggle("load-complete");
  checkMark.style.display = "block";

});