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

const slider = document.querySelector('.slider1');
const slides = document.querySelectorAll('.slide1');
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
let currentIndex = 0;

slides.forEach((slide, index) => {
  slide.addEventListener('touchstart', touchStart(index));
  slide.addEventListener('touchend', touchEnd);
  slide.addEventListener('touchmove', touchMove);
});

window.addEventListener('resize', setPositionByIndex);

function touchStart(index) {
  return function (event) {
    currentIndex = index;
    startPosition = event.touches[0].clientX;
    isDragging = true;
    animationID = requestAnimationFrame(updateSlider);
  };
}

function touchEnd() {
  isDragging = false;
  cancelAnimationFrame(animationID);

  const movedBy = currentTranslate - prevTranslate;
  if (movedBy < -100 && currentIndex < slides.length - 1) {
    currentIndex += 1;
  } else if (movedBy > 100 && currentIndex > 0) {
    currentIndex -= 1;
  }

  setPositionByIndex();
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = event.touches[0].clientX;
    currentTranslate = prevTranslate + currentPosition - startPosition;
  }
}

function updateSlider() {
  const translateX = currentTranslate * -1;
  slider.style.transform = `translateX(${translateX}px)`;
  animationID = requestAnimationFrame(updateSlider);
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -100;
  prevTranslate = currentTranslate;
  updateSlider();
}

setPositionByIndex();


