/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */

var dropdown = document.getElementById("myDropdown");
var dropdown1 = document.getElementById("myDropdown1");
var dropdown2 = document.getElementById("myDropdown2");
var dropdown3 = document.getElementById("myDropdown3");
var dropdown4 = document.getElementById("myDropdown4");
var dropdown5 = document.getElementById("myDropdown5");

var arrow = document.getElementById("arrowBefore");
var arrow1 = document.getElementById("arrowBefore1");
var arrow2 = document.getElementById("arrowBefore2");
var arrow3 = document.getElementById("arrowBefore3");
var arrow4 = document.getElementById("arrowBefore4");
var arrow5 = document.getElementById("arrowBefore5");

function myFunction() {
  dropdown1.classList.remove ("show");
  arrow1.src = "img/caret-right.svg";
  dropdown2.classList.remove ("show");
  arrow2.src = "img/caret-right.svg";
  dropdown3.classList.remove ("show");
  arrow3.src = "img/caret-right.svg";
  dropdown4.classList.remove ("show");
  arrow4.src = "img/caret-right.svg";
  dropdown5.classList.remove ("show");
  arrow5.src = "img/caret-right.svg";
  if (dropdown.classList.contains("show")) {
    dropdown.classList.remove("show");
    arrow.src = "img/caret-right.svg"; // Возвращаем изображение стрелки вправо при закрытии меню
  } else {
    dropdown.classList.add("show");
    arrow.src = "img/caret-down-fill.svg"; // Меняем изображение стрелки при открытии меню
  }
}

// Находим кнопку по ее id
var reloadButton = document.getElementById("clearFiltersButton");

// Добавляем обработчик события клика
reloadButton.addEventListener("click", function() {
  // Используем location.reload() для перезагрузки страницы
  location.reload();
});

function myFunction1() {
  dropdown.classList.remove ("show");
  arrow.src = "img/caret-right.svg";
  dropdown2.classList.remove ("show");
  arrow2.src = "img/caret-right.svg";
  dropdown3.classList.remove ("show");
  arrow3.src = "img/caret-right.svg";
  dropdown4.classList.remove ("show");
  arrow4.src = "img/caret-right.svg";
  dropdown5.classList.remove ("show");
  arrow5.src = "img/caret-right.svg";
  if (dropdown1.classList.contains("show")) {
    dropdown1.classList.remove("show");
    arrow1.src = "img/caret-right.svg"; // Возвращаем изображение стрелки вправо при закрытии меню
  } else {
    dropdown1.classList.add("show");
    arrow1.src = "img/caret-down-fill.svg"; // Меняем изображение стрелки при открытии меню
  }
}

function myFunction2() {
  dropdown.classList.remove ("show");
  arrow.src = "img/caret-right.svg";
  dropdown1.classList.remove ("show");
  arrow1.src = "img/caret-right.svg";
  dropdown3.classList.remove ("show");
  arrow3.src = "img/caret-right.svg";
  dropdown4.classList.remove ("show");
  arrow4.src = "img/caret-right.svg";
  dropdown5.classList.remove ("show");
  arrow5.src = "img/caret-right.svg";
  if (dropdown2.classList.contains("show")) {
    dropdown2.classList.remove("show");
    arrow2.src = "img/caret-right.svg"; // Возвращаем изображение стрелки вправо при закрытии меню
  } else {
    dropdown2.classList.add("show");
    arrow2.src = "img/caret-down-fill.svg"; // Меняем изображение стрелки при открытии меню
  }
}

function myFunction3() {
  dropdown.classList.remove ("show");
  arrow.src = "img/caret-right.svg";
  dropdown1.classList.remove ("show");
  arrow1.src = "img/caret-right.svg";
  dropdown2.classList.remove ("show");
  arrow2.src = "img/caret-right.svg";
  dropdown4.classList.remove ("show");
  arrow4.src = "img/caret-right.svg";
  dropdown5.classList.remove ("show");
  arrow5.src = "img/caret-right.svg";
  if (dropdown3.classList.contains("show")) {
    dropdown3.classList.remove("show");
    arrow3.src = "img/caret-right.svg"; // Возвращаем изображение стрелки вправо при закрытии меню
  } else {
    dropdown3.classList.add("show");
    arrow3.src = "img/caret-down-fill.svg"; // Меняем изображение стрелки при открытии меню
  }
}
function myFunction4() {
  dropdown1.classList.remove ("show");
  arrow1.src = "img/caret-right.svg";
  dropdown2.classList.remove ("show");
  arrow2.src = "img/caret-right.svg";
  dropdown3.classList.remove ("show");
  arrow3.src = "img/caret-right.svg";
  dropdown.classList.remove ("show");
  arrow.src = "img/caret-right.svg";
  dropdown5.classList.remove ("show");
  arrow5.src = "img/caret-right.svg";
  if (dropdown4.classList.contains("show")) {
    dropdown4.classList.remove("show");
    arrow4.src = "img/caret-right.svg"; // Возвращаем изображение стрелки вправо при закрытии меню
  } else {
    dropdown4.classList.add("show");
    arrow4.src = "img/caret-down-fill.svg"; // Меняем изображение стрелки при открытии меню
  }
}

function myFunction5() {
  dropdown1.classList.remove ("show");
  arrow1.src = "img/caret-right.svg";
  dropdown2.classList.remove ("show");
  arrow2.src = "img/caret-right.svg";
  dropdown3.classList.remove ("show");
  arrow3.src = "img/caret-right.svg";
  dropdown4.classList.remove ("show");
  arrow4.src = "img/caret-right.svg";
  dropdown.classList.remove ("show");
  arrow.src = "img/caret-right.svg";
  if (dropdown5.classList.contains("show")) {
    dropdown5.classList.remove("show");
    arrow5.src = "img/caret-right.svg"; // Возвращаем изображение стрелки вправо при закрытии меню
  } else {
    dropdown5.classList.add("show");
    arrow5.src = "img/caret-down-fill.svg"; // Меняем изображение стрелки при открытии меню
  }
}


// Закройте выпадающее меню, если пользователь щелкает за его пределами



function selectCategory(categoryName) {
  document.getElementById("selectedCategory").textContent = categoryName; // Обновляем текст
  document.getElementById("myDropdown").classList.remove("show"); // Закрываем меню
  
}

document.addEventListener("click", function (event) {
  if (!event.target.matches(".dropbtn") && !event.target.matches(".dropdown-img")) {
    closeAllDropdowns();
  }
});

function selectCategory1(categoryName) {
  document.getElementById("selectedCategory1").textContent = categoryName; // Обновляем текст
  document.getElementById("myDropdown1").classList.remove("show"); // Закрываем меню
}

function selectCategory2(categoryName) {
  document.getElementById("selectedCategory2").textContent = categoryName; // Обновляем текст
  document.getElementById("myDropdown2").classList.remove("show"); // Закрываем меню
}

function selectCategory3(categoryName) {
  document.getElementById("selectedCategory3").textContent = categoryName; // Обновляем текст
  document.getElementById("myDropdown3").classList.remove("show"); // Закрываем меню
}

function selectCategory4(categoryName) {
  document.getElementById("selectedCategory4").textContent = categoryName; // Обновляем текст
  document.getElementById("myDropdown4").classList.remove("show"); // Закрываем меню
}

function selectCategory5(categoryName) {
  document.getElementById("selectedCategory5").textContent = categoryName; // Обновляем текст
  document.getElementById("myDropdown5").classList.remove("show"); // Закрываем меню
}

function closeAllDropdowns() {
  var dropdowns = document.querySelectorAll(".dropdown-content");
  var arrows = document.querySelectorAll(".dropdown-img");

  for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].classList.remove("show");
    
    // Проверьте, существует ли элемент 'arrows' в списке NodeList на позиции 'i'
    if (arrows[i]) {
      arrows[i].src = "/img/caret-right.svg"; // Установите свойство 'src'
    }
  }
}

function changeImage(button) {
  var heartImage = button.querySelector('.heart-image');
  var imgs = ['/img/heart1.svg', '/img/heart1full.png'];
  var currentImageIndex = imgs.indexOf(heartImage.getAttribute('src'));

  if (currentImageIndex !== -1) {
      // Переключаем между изображениями
      var nextImageIndex = (currentImageIndex + 1) % 2;
      heartImage.src = imgs[nextImageIndex];
  }

  var cartMessage1 = document.getElementById("wishMessage");
  var cartMessage2 = document.getElementById("wishMessage1");
  
  // Определите, какое сообщение показывать и какое скрывать
  if (cartMessage1.style.display === "block") {
      cartMessage1.style.display = "none";
      cartMessage2.style.display = "block";
  } else {
      cartMessage1.style.display = "block";
      cartMessage2.style.display = "none";
  }

  // Задать непрозрачность на 1 (плавное появление)
  cartMessage1.style.opacity = "1";
  cartMessage2.style.opacity = "1";

  // Скрыть сообщение через несколько секунд (например, 3 секунды)
  setTimeout(function() {
      // Установить непрозрачность на 0 (плавное исчезновение)
      cartMessage1.style.opacity = "0";
      cartMessage2.style.opacity = "0";
      
      // Скрыть сообщение после завершения анимации
      setTimeout(function() {
          cartMessage1.style.display = "none";
          cartMessage2.style.display = "none";
      }, 500); // Время анимации в миллисекундах (0.5 секунды)
  }, 3000);
}



function addToCart() {
  var cartMessage = document.getElementById("cartMessage");
  
  if (cartMessage.style.display != "block") { 
    cartMessage.style.display = "block";

  // Задать непрозрачность на 1 (плавное появление)
  cartMessage.style.opacity = "1";

  // Скрыть сообщение через несколько секунд (например, 3 секунды)
  setTimeout(function() {
      // Установить непрозрачность на 0 (плавное исчезновение)
      cartMessage.style.opacity = "0";
      
      // Скрыть сообщение после завершения анимации
      setTimeout(function() {
          cartMessage.style.display = "none";
      }, 500); // Время анимации в миллисекундах (0.5 секунды)
  }, 3000); // Время отображения сообщения в миллисекундах (3 секунды)
  }
  else { 
    
    setTimeout (function() {
      cartMessage.style.display = "none";
    }, 5000)

  }

  // Показать сообщение
  
}