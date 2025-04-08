let slideIndex = 1;

function showSlides(n) {
   const slides = document.querySelectorAll('.slide_services');
   const dots = document.querySelectorAll('.dot');

   if (n > slides.length) { slideIndex = 1; }
   if (n < 1) { slideIndex = slides.length; }

   slides.forEach((slide, index) => {
       slide.style.display = (index + 1 === slideIndex) ? 'block' : 'none';
       dots[index].className = dots[index].className.replace(' active', '');
   });

   dots[slideIndex - 1].className += ' active';
}

function changeSlide(n) {
   showSlides(slideIndex += n);
}

function currentSlide(n) {
   showSlides(slideIndex = n);
}

// Инициализация слайдера
showSlides(slideIndex);

