// Находим кнопку по её id
var showItemsButton = document.getElementById("showItemsButton");

// Находим все элементы списка
var listItems = document.querySelectorAll(".profil-nav__list__var .profil-nav__item");

// Переменная для отслеживания состояния меню
var menuVisible = false;

var profilText = document.querySelector (".profil-text");

// Находим кнопку "Orders" по её id
var showOrderButton = document.getElementById("showOrder");

// Находим меню "Orders" по классу
var orderMenu = document.querySelector(".profile-order");
var orderText = document.querySelector(".profil-text");

var showInfoButton = document.getElementById("showInfo");

var infoMenu = document.querySelector(".profile-info");

// Находим кнопки редактирования и поля ввода по их id
var editNameButton = document.getElementById("editName");
var editAddressButton = document.getElementById("editAddress");
var editEmailButton = document.getElementById("editEmail");
var nameInput = document.getElementById("nameInput");
var addressInput = document.getElementById("addressInput");
var emailInput = document.getElementById("emailInput");
var nameText = document.querySelector(".profile-info__subtitle__name");
var addressText = document.querySelector(".profile-info__subtitle__address");
var emailText = document.querySelector(".profile-info__subtitle__email");

var showGiftButton = document.getElementById("showGift");

var giftMenu = document.querySelector(".profile-gift");

// Добавляем обработчик события клика на кнопку
showItemsButton.addEventListener("click", function(event) {
    // Проверяем состояние меню
    if (menuVisible) {
        // Если меню видимо, то скрываем его
        for (var i = 0; i < listItems.length; i++) {
            listItems[i].style.display = "none";
        }
        profilText.style.display = "block";
        infoMenu.style.display = "none";
        orderMenu.style.display = "none";
        // Сбрасываем состояние меню
        menuVisible = false;
    } else {
        // Если меню не видимо, то показываем его
        for (var i = 0; i < listItems.length; i++) {
            listItems[i].style.display = "block";
        }
        // Устанавливаем состояние меню
        menuVisible = true;
    }

    // Останавливаем всплытие события, чтобы клик на кнопке не закрыл меню сразу после открытия
    event.stopPropagation();
});



// Добавляем обработчик события клика на кнопку
showOrderButton.addEventListener("click", function() {
    // Переключаем видимость меню "Orders"
    if (orderMenu.style.display === "none" || orderMenu.style.display === "" && infoMenu.style.display === "none") {
        orderMenu.style.display = "block";
        profilText.style.display = "none";
        infoMenu.style.display = "none";
        giftMenu.style.display = "none";
    } else {
        orderMenu.style.display = "none";
        profilText.style.display = "block";
    }
});



showInfoButton.addEventListener("click", function() {
    // Переключаем видимость меню "Info"
    if (infoMenu.style.display === "none" || infoMenu.style.display === "") {
        infoMenu.style.display = "block";
        profilText.style.display = "none";
        orderMenu.style.display = "none";
        giftMenu.style.display = "none";
    } else {
        infoMenu.style.display = "none";
        profilText.style.display = "block";
    }
});

// Обработчики событий для кнопок редактирования
editNameButton.addEventListener("click", function() {
    nameInput.style.display = "block";
    nameInput.value = nameText.textContent.trim();
    
    nameInput.focus();
});

editAddressButton.addEventListener("click", function() {
    addressInput.style.display = "block";
    addressInput.value = addressText.textContent.trim();
    
    addressInput.focus();
});

editEmailButton.addEventListener("click", function() {
    emailInput.style.display = "block";
    emailInput.value = emailText.textContent.trim();
    
    emailInput.focus();
});

// Обработчики событий для полей ввода
nameInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        nameText.textContent = nameInput.value;
        nameInput.style.display = "none";
        nameText.style.display = "block";
    }
});

addressInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addressText.textContent = addressInput.value;
        addressInput.style.display = "none";
        addressText.style.display = "block";
    }
});

emailInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        emailText.textContent = emailInput.value;
        emailInput.style.display = "none";
        emailText.style.display = "block";
    }
});

showGiftButton.addEventListener("click", function() {
    // Переключаем видимость меню "Info"
    if (giftMenu.style.display === "none" || giftMenu.style.display === "") {
        giftMenu.style.display = "block";
        profilText.style.display = "none";
        orderMenu.style.display = "none";
        infoMenu.style.display = "none";
    } else {
        giftMenu.style.display = "none";
        profilText.style.display = "block";
    }
});