document.addEventListener("DOMContentLoaded", function () {
  const testimonialsList = document.querySelector(".testimonials-list");
  const scrollStep = 200; // Укажите количество пикселей для автоматической прокрутки

  let isDragging = false;
  let startX, scrollLeft;

  testimonialsList.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - testimonialsList.offsetLeft;
    scrollLeft = testimonialsList.scrollLeft;
  });

  testimonialsList.addEventListener("mouseup", () => {
    isDragging = false;
  });

  testimonialsList.addEventListener("mouseleave", () => {
    isDragging = false;
  });

  testimonialsList.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - testimonialsList.offsetLeft;
    const walk = (x - startX) * 2; // Вы можете настроить скорость прокрутки
    testimonialsList.scrollLeft = scrollLeft - walk;
  });

  testimonialsList.addEventListener("touchstart", (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - testimonialsList.offsetLeft;
    scrollLeft = testimonialsList.scrollLeft;
  });

  testimonialsList.addEventListener("touchend", () => {
    isDragging = false;
  });

  testimonialsList.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - testimonialsList.offsetLeft;
    const walk = (x - startX) * 2; // Вы можете настроить скорость прокрутки
    testimonialsList.scrollLeft = scrollLeft - walk;
  });

  function autoScroll() {
    const currentScrollLeft = testimonialsList.scrollLeft;
    const targetScrollLeft = currentScrollLeft + scrollStep;

    // Плавно прокручиваем
    const animationDuration = 500; // Укажите длительность анимации в миллисекундах
    const animationInterval = 10; // Укажите интервал обновления анимации

    const scrollAnimation = setInterval(function () {
      if (testimonialsList.scrollLeft < targetScrollLeft) {
        testimonialsList.scrollLeft += 1;
      } else {
        clearInterval(scrollAnimation);
      }
    }, animationInterval);
  }

  // Запускаем автоматическую прокрутку каждые 5 секунд (пример)
  setInterval(autoScroll, 5000);
});
