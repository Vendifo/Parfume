

function toggleText() {
    var fullText = document.querySelector('.blog-item__disc__text.full-text');
    var textButton = document.querySelector('.blog-item__disc__button');

    fullText.style.maxHeight = fullText.scrollHeight + 'px';
    textButton.style.display = "none";

}

document.addEventListener('DOMContentLoaded', function () {
    // Находим все элементы, которые должны анимироваться
    var animatedElements = document.querySelectorAll('.blog-item__product__reviews');

    // Создаем экземпляр Intersection Observer
    var observer = new IntersectionObserver(function (entries, observer) {
        // Перебираем все записи (элементы), которые находятся в зоне видимости
        entries.forEach(function (entry) {
            // Проверяем, стал ли элемент видимым
            if (entry.isIntersecting) {
                // Добавляем класс с анимацией
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'rotate(0deg) ';
                // После того как элемент виден, не нужно больше следить за ним
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // Порог видимости 50%

    // Начинаем наблюдение за каждым элементом
    animatedElements.forEach(function (element) {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Находим все элементы, которые должны анимироваться
    var animatedElements = document.querySelectorAll('.blog-item__product__reviews2');

    // Создаем экземпляр Intersection Observer
    var observer = new IntersectionObserver(function (entries, observer) {
        // Перебираем все записи (элементы), которые находятся в зоне видимости
        entries.forEach(function (entry) {
            // Проверяем, стал ли элемент видимым
            if (entry.isIntersecting) {
                // Добавляем класс с анимацией
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'rotate(0deg) ';
                // После того как элемент виден, не нужно больше следить за ним
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // Порог видимости 50%

    // Начинаем наблюдение за каждым элементом
    animatedElements.forEach(function (element) {
        observer.observe(element);
    });
});






document.addEventListener('DOMContentLoaded', function () {
    var reviewsContainer = document.getElementById('reviewsContainer1');
    
    // Задержка перед началом анимации (время в миллисекундах)
    var delay = 250;

    setTimeout(function () {
        reviewsContainer.style.opacity = '1';
        reviewsContainer.style.transform = 'rotate(0deg) scaleX(-1)';
        
    }, delay);
});