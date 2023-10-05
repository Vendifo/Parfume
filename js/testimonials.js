const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonialsList = document.querySelector('.testimonials-list');

let isDragging = false;
let startPosition = 0;
let currentTranslateX = 0;
let previousTranslateX = 0;
let velocity = 0;

// Получите ширину контейнера и списка
const containerWidth = testimonialsContainer.clientWidth;
const listWidth = testimonialsList.scrollWidth;

testimonialsContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startPosition = e.clientX - testimonialsContainer.getBoundingClientRect().left; // Учтите позицию блока
    previousTranslateX = currentTranslateX;
    velocity = 0;
    testimonialsList.style.transition = 'none';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const currentPosition = e.clientX - testimonialsContainer.getBoundingClientRect().left; // Учтите позицию блока
    currentTranslateX = previousTranslateX + currentPosition - startPosition;

    // Проверка, можно ли скроллить вправо или влево
    if (currentTranslateX > 0) {
        currentTranslateX = 0; // Нельзя скроллить влево за границу
    } else if (currentTranslateX < containerWidth - listWidth) {
        currentTranslateX = containerWidth - listWidth; // Нельзя скроллить вправо за границу
    }

    testimonialsList.style.transform = `translateX(${currentTranslateX}px)`;
});

document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;

    // Расчет скорости для инерции
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - previousTimestamp;
    const distance = currentTranslateX - previousTranslateX;
    velocity = distance / timeDiff;

    // Ваша логика здесь (например, проверка, сколько элементов должно быть видно)

    testimonialsList.style.transition = 'transform 0.3s ease-in-out';
    testimonialsList.style.transform = `translateX(${currentTranslateX}px)`;
});

let previousTimestamp = 0;
function animateScroll() {
    if (!isDragging) {
        // Применение инерции с уменьшенной скоростью
        currentTranslateX += velocity * 0.01; // Уменьшите коэффициент для меньшей скорости инерции

        // Проверка, можно ли скроллить вправо или влево
        if (currentTranslateX > 0) {
            currentTranslateX = 0; // Нельзя скроллить влево за границу
        } else if (currentTranslateX < containerWidth - listWidth) {
            currentTranslateX = containerWidth - listWidth; // Нельзя скроллить вправо за границу
        }

        testimonialsList.style.transition = 'transform 0.3s ease-in-out';
        testimonialsList.style.transform = `translateX(${currentTranslateX}px)`;
    }

    previousTimestamp = new Date().getTime();
    requestAnimationFrame(animateScroll);
}

animateScroll();
