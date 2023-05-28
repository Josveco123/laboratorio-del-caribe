var index = 0;
var slides = document.getElementsByClassName("slider")[0].getElementsByTagName("img");

function mostrarSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}

function siguienteSlide() {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  mostrarSlide();
}

function anteriorSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  mostrarSlide();
}

mostrarSlide();