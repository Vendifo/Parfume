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

const startDrag = (event) => {
  isDragging = true;
  startPosition = event.clientX || event.touches[0].clientX;
  previousTranslateX = currentTranslateX;
  velocity = 0;
  testimonialsList.style.transition = 'none';
};

const drag = (event) => {
  if (!isDragging) return;

  const currentPosition = event.clientX || event.touches[0].clientX;
  currentTranslateX = previousTranslateX + currentPosition - startPosition;

  // Проверка, можно ли скроллить вправо или влево
  if (currentTranslateX > 0) {
    currentTranslateX = 0; // Нельзя скроллить влево за границу
  } else if (currentTranslateX < containerWidth - listWidth) {
    currentTranslateX = containerWidth - listWidth; // Нельзя скроллить вправо за границу
  }

  testimonialsList.style.transform = `translateX(${currentTranslateX}px)`;
};

const endDrag = () => {
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
};

testimonialsContainer.addEventListener('mousedown', startDrag);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', endDrag);

testimonialsContainer.addEventListener('touchstart', startDrag);
document.addEventListener('touchmove', drag);
document.addEventListener('touchend', endDrag);

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
