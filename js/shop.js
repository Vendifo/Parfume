/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */

var arrow = document.getElementById("arrowBefore");

function myFunction() {
  var dropdown = document.getElementById("myDropdown");
  

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
  document.getElementById("myDropdown1").classList.toggle("show");
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}
function myFunction4() {
  document.getElementById("myDropdown4").classList.toggle("show");
}

function myFunction5() {
  document.getElementById("myDropdown5").classList.toggle("show");
}


// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

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
  
  // Показать сообщение
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