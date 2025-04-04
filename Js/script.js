// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// let slideInterval = setInterval(() => {
//     plusSlides(1);
// }, 3000);

// let slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
// slideshowContainer.addEventListener('mouseenter', () => {
//     clearInterval(slideInterval);
// });

// slideshowContainer.addEventListener('mouseleave', () => {
// slideInterval = setInterval(() => {
//     plusSlides(1);
// }, 3000);
// });

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("demo");
//     let captionText = document.getElementById("caption");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
//     captionText.innerHTML = dots[slideIndex-1].alt;
// }
let currentIndex = 0;
let direction = 1; // Направление прокрутки (1 - вперед, -1 - назад)

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length / 1; // Общее количество уникальных слайдов

function showSlide(index) {
    // Убедимся, что индекс в пределах допустимого диапазона
    currentIndex = index % totalSlides;

    // Обновляем классы для анимации
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'prev', 'next');

        if (i === currentIndex) {
            slide.classList.add('active');
        } else if (i === (currentIndex - 1 + totalSlides) % totalSlides) {
            slide.classList.add('prev');
        } else if (i === (currentIndex + 1) % totalSlides) {
            slide.classList.add('next');
        }
    });

    // Перемещение слайдов
    const offset = -currentIndex * (100); // Сдвиг в процентах
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Показать первый слайд
showSlide(currentIndex);

// Автоматическое переключение слайдов каждые 3 секунды
setInterval(() => nextSlide(), 3000);

function nextSlide() {
   if (direction === 1 && currentIndex === totalSlides - 1) {
       direction = -1; // Меняем направление на обратное
   } else if (direction === -1 && currentIndex === 0) {
       direction = 1; // Меняем направление на прямое
   }
   
   showSlide(currentIndex + direction);
}