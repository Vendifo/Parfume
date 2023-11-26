function toggleText() {
    var hiddenText = document.getElementById("hiddenText");
    hiddenText.classList.toggle("visible1");
}
const setInfoMain = document.querySelector('.set-info__main');
const setInfoVariants = document.querySelector('.set-info__variants');


// Добавить классы для запуска анимаций


document.addEventListener('DOMContentLoaded', function () {
    // Находим все элементы, которые должны анимироваться
    var animatedElements = document.querySelectorAll('.set-info__main');
    var animatedElements1 = document.querySelectorAll('.set-info__variants');

    // Создаем экземпляр Intersection Observer
    var observer = new IntersectionObserver(function (entries, observer) {
        // Перебираем все записи (элементы), которые находятся в зоне видимости
        entries.forEach(function (entry) {
            // Проверяем, стал ли элемент видимым
            if (entry.isIntersecting) {
                // Добавляем класс с анимацией
                entry.target.classList.add('expanded');
                // После того как элемент виден, не нужно больше следить за ним
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // Порог видимости 50%

    var observer1 = new IntersectionObserver(function (entries, observer) {
        // Перебираем все записи (элементы), которые находятся в зоне видимости
        entries.forEach(function (entry) {
            // Проверяем, стал ли элемент видимым
            if (entry.isIntersecting) {
                // Добавляем класс с анимацией
                entry.target.classList.add('visible');
                // После того как элемент виден, не нужно больше следить за ним
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // Порог видимости 50%
    // Начинаем наблюдение за каждым элементом
    animatedElements.forEach(function (element) {
        observer.observe(element);
    });
    animatedElements1.forEach(function (element) {
        observer1.observe(element);
    });
});

var setTotal = document.querySelector('.set-total');

// Добавьте класс для анимации
setTotal.classList.add('visible2');

