const currentLocation = window.location.href;

// Получаем все элементы меню
const menuItems = document.querySelectorAll('.Nav_Bar_a');

// Перебираем элементы меню и добавляем класс 'active' к текущему элементу
menuItems.forEach(item => {
    // Проверяем, совпадает ли полный URL ссылки с текущим URL
    if (currentLocation.includes(item.getAttribute('href'))) 
    {
        item.classList.add('active');
    }
});

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

        if (i === currentIndex) 
        {
            slide.classList.add('active');
        } else if (i === (currentIndex - 1 + totalSlides) % totalSlides) 
        {
            slide.classList.add('prev');
        } else if (i === (currentIndex + 1) % totalSlides) 
        {
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
    if (direction === 1 && currentIndex === totalSlides - 1) 
    {
       direction = -1; // Меняем направление на обратное
    } else if (direction === -1 && currentIndex === 0) 
    {
       direction = 1; // Меняем направление на прямое
    }
    showSlide(currentIndex + direction);
}

function openTab(evt, tabName) {
    // Скрыть все элементы с классом "tab-content"
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Удалить класс "active" у всех табов
    const tabLinks = document.querySelectorAll('.tab-link');
    
    tabLinks.forEach(link => {
        link.classList.remove('active');
    });

   // Показать текущий таб и добавить класс "active"
   document.getElementById(tabName).classList.add('active');
   evt.currentTarget.classList.add('active');
}
