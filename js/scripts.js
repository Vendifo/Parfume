// Находим кнопки и тексты по классам
const bestsellers_button = document.querySelector(".main-adv__bestsellers");
const newrelease_button = document.querySelector(".main-adv__newrelease");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");

// Функция для скрытия текстов
function hideTexts() {
  text1.style.opacity = "0";
  text2.style.opacity = "0";
  text1.classList.remove("fade-in");
  text2.classList.remove("fade-in");
}

text1.style.display = "block";
  setTimeout(() => {
    text1.style.opacity = "1";
    text1.classList.add("fade-in");
  }, 10);


// Добавляем обработчики событий для кнопок
bestsellers_button.addEventListener("click", function() {
  // Скрываем текущий текст
  hideTexts();

  // Показываем текст для кнопки "Best Sellers"
  text1.style.display = "block";
  setTimeout(() => {
    text1.style.opacity = "1";
    text1.classList.add("fade-in");
  }, 10);
});

newrelease_button.addEventListener("click", function() {
  // Скрываем текущий текст
  hideTexts();

  // Показываем текст для кнопки "New Release"
  text2.style.display = "block";
  setTimeout(() => {
    text2.style.opacity = "1";
    text2.classList.add("fade-in");
  }, 10);
});

function changeColor(button) {
  var currentColor = button.style.backgroundColor;
  if (currentColor === 'white' || currentColor === '') {
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
  } else {
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
  }
}

//Слайдер
const slider = document.querySelector('.slider1');
const slides = document.querySelectorAll('.slide1');
let isDragging1 = false;
let startPosition1 = 0;
let currentTranslate1 = 0;
let prevTranslate1 = 0;
let animationID1 = 0;
let currentIndex1 = 0;
const sensitivity1 = 100; // Чувствительность свайпа

slides.forEach((slide, index) => {
  slide.addEventListener('touchstart', touchStart(index));
  slide.addEventListener('touchend', touchEnd);
  slide.addEventListener('touchmove', touchMove);
});

window.addEventListener('resize', setPositionByIndex);

function touchStart(index) {
  return function (event) {
    currentIndex1 = index;
    startPosition1 = event.touches[0].clientX;
    isDragging1 = true;
    cancelAnimationFrame(animationID1);
  };
}

function touchEnd() {
  isDragging1 = false;

  const movedBy = currentTranslate1 - prevTranslate1;

  if (movedBy < -sensitivity1 && currentIndex1 < slides.length - 1) {
    currentIndex1 += 1;
  } else if (movedBy > sensitivity1 && currentIndex1 > 0) {
    currentIndex1 -= 1;
  }

  setPositionByIndex();
}

function touchMove(event) {
  if (isDragging1) {
    const currentPosition1 = event.touches[0].clientX;
    currentTranslate1 = prevTranslate1 + currentPosition1 - startPosition1;
  }
}

function updateSlider() {
  const translateX1 = currentTranslate1 * -1;
  slider.style.transform = `translateX(${translateX1}px)`;
  animationID1 = requestAnimationFrame(updateSlider);
}

function setPositionByIndex() {
  currentTranslate1 = currentIndex1 * -100;
  prevTranslate1 = currentTranslate1;
  slider.style.transition = 'transform 0.3s ease-in-out'; // Добавляем плавную анимацию
  updateSlider();
}

setPositionByIndex();




