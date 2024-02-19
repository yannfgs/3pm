// Seção 1: Banner Rotativo
document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel-item");
  const totalSlides = slides.length;

  document
    .querySelector(".carousel-control-prev")
    .addEventListener("click", function () {
      goToSlide(currentSlide - 1);
    });

    
  document
    .querySelector(".carousel-control-next")
    .addEventListener("click", function () {
      goToSlide(currentSlide + 1);
    });


  function goToSlide(n) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].classList.add("active");
    document.querySelector(".carousel-inner").style.transform = `translateX(-${
      currentSlide * 100
    }%)`;
  }
});
