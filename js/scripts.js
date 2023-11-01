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
const slider1 = document.querySelector('.slider1');
const slides1 = document.querySelectorAll('.slide1');
let isDragging1 = false;
let startPosition1 = 0;
let currentTranslate1 = 0;
let prevTranslate1 = 0;
let currentIndex1 = 0;
let sensitivity1 = 50; // Чувствительность свайпа
const maxIndex1 = slides1.length * slides1.length;

slides1.forEach((slide, index) => {
  slide.addEventListener('touchstart', touchStart(index));
  slide.addEventListener('touchmove', touchMove);
  slide.addEventListener('touchend', touchEnd);
});

window.addEventListener('resize', setPositionByIndex);

function touchStart(index) {
  return function (event) {
    currentIndex1 = index;
    startPosition1 = event.touches[0].clientX;
    prevTranslate1 = currentTranslate1;
    isDragging1 = true;
  };
}

function touchEnd() {
  isDragging1 = false;

  const movedBy = currentTranslate1 - prevTranslate1;

  if (movedBy < -sensitivity1 && currentIndex1 < maxIndex1) {
    currentIndex1 += 1;
  } else if (movedBy > sensitivity1 && currentIndex1 > 0) {
    currentIndex1 -= 1;
  }
}

function touchMove(event) {
  if (!isDragging1) return;

  const currentPosition1 = event.touches[0].clientX;
  currentTranslate1 = prevTranslate1 + currentPosition1 - startPosition1;

  // Ограничение на выход за пределы
  if (currentTranslate1 > 0) {
    currentTranslate1 = 0;
  } else if (currentTranslate1 < -maxIndex1 * 100) {
    currentTranslate1 = -maxIndex1 * 100;
  }

  slider1.style.transition = 'none';
  slider1.style.transform = `translateX(${currentTranslate1}px)`;
}

function setPositionByIndex() {
  currentTranslate1 = currentIndex1 * -100;
  prevTranslate1 = currentTranslate1;
  slider1.style.transition = 'transform 0.3s ease-in-out';
  slider1.style.transform = `translateX(${currentTranslate1}%)`;
}

setPositionByIndex();


//f


const slider2 = document.querySelector('.slider2');
const slides2 = document.querySelectorAll('.slide2');
let isDragging2 = false;
let startPosition2 = 0;
let currentTranslate2 = 0;
let prevTranslate2 = 0;
let currentIndex2 = 0;
let sensitivity2 = 50; // Чувствительность свайпа
const maxIndex2 = slides2.length * slides1.length;

slides2.forEach((slide, index) => {
  slide.addEventListener('touchstart', touchStart2(index));
  slide.addEventListener('touchmove', touchMove2);
  slide.addEventListener('touchend', touchEnd2);
});

window.addEventListener('resize', setPositionByIndex2);

function touchStart2(index) {
  return function (event) {
    currentIndex2 = index;
    startPosition2 = event.touches[0].clientX;
    prevTranslate2 = currentTranslate2;
    isDragging2 = true;
  };
}

function touchEnd2() {
  isDragging2 = false;

  const movedBy = currentTranslate2 - prevTranslate2;

  if (movedBy < -sensitivity2 && currentIndex2 < maxIndex2) {
    currentIndex2 += 1;
  } else if (movedBy > sensitivity2 && currentIndex2 > 0) {
    currentIndex2 -= 1;
  }
}

function touchMove2(event) {
  if (!isDragging2) return;

  const currentPosition2 = event.touches[0].clientX;
  currentTranslate2 = prevTranslate2 + currentPosition2 - startPosition2;

  // Ограничение на выход за пределы
  if (currentTranslate2 > 0) {
    currentTranslate2 = 0;
  } else if (currentTranslate2 < -maxIndex2 * 100) {
    currentTranslate2 = -maxIndex2 * 100;
  }

  slider2.style.transition = 'none';
  slider2.style.transform = `translateX(${currentTranslate2}px)`;
}

function setPositionByIndex2() {
  currentTranslate2 = currentIndex2 * -100;
  prevTranslate2 = currentTranslate2;
  slider2.style.transition = 'transform 0.3s ease-in-out';
  slider2.style.transform = `translateX(${currentTranslate2}%)`;
}

setPositionByIndex2();

