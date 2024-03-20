document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slider img");
    const navButtons = document.querySelectorAll(".slider-nav a");
  
    let currentSlide = 0;
  
    // Функция для показа текущего слайда
    const showSlide = (slideIndex) => {
      if (slideIndex < 0) {
        currentSlide = slides.length - 1;
      } else if (slideIndex >= slides.length) {
        currentSlide = 0;
      } else {
        currentSlide = slideIndex;
      }
  
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  
      // Подсвечиваем текущую точку навигации
      navButtons.forEach(button => {
        button.classList.remove("active");
      });
      navButtons[currentSlide].classList.add("active");
    };
  
    // Переключение слайдов по навигации
    navButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        showSlide(index);
      });
    });
  
    // Автоматическое перелистывание слайдов
    const autoSlide = () => {
      showSlide(currentSlide + 1);
    };
  
    let slideInterval = setInterval(autoSlide, 5000);
  
    // Остановка автоматического перелистывания при наведении
    slider.addEventListener("mouseover", () => {
      clearInterval(slideInterval);
    });
  
    // Возобновление автоматического перелистывания при уходе курсора
    slider.addEventListener("mouseout", () => {
      slideInterval = setInterval(autoSlide, 5000);
    });
  });
  