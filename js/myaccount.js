// Находим кнопку по её id
var showItemsButton = document.getElementById("showItemsButton");

// Находим все элементы списка
var listItems = document.querySelectorAll(".profil-nav__list__var .profil-nav__item");
var items = document.querySelector (".profil-nav__list__var");


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
    if (window.innerWidth >= 768) { 
        orderMenu.style.display = "block";
        profilText.style.display = "none";
        infoMenu.style.display = "none";
        giftMenu.style.display = "none";
    }
    else { 
        if (items.style.display === "block") { 
            items.style.display = "none";
        }
        else { 
            items.style.display = "block";
        }
    }
    
    
});



// Добавляем обработчик события клика на кнопку
showOrderButton.addEventListener("click", function() {
    if (window.innerWidth >= 768) {
        if (orderMenu.style.display === "none" || orderMenu.style.display === "" ) {
            orderMenu.style.display = "block";
            profilText.style.display = "none";
            infoMenu.style.display = "none";
            giftMenu.style.display = "none";
            
        } else {
            
            orderMenu.style.display = "none";
            profilText.style.display = "block";
        }
    }
    else { 
        if (orderMenu.style.display === "none" || orderMenu.style.display === "" ) {
            orderMenu.style.display = "block";
            profilText.style.display = "none";
            infoMenu.style.display = "none";
            giftMenu.style.display = "none";
            items.style.display = "none";
        } else {
            items.style.display = "none";
            orderMenu.style.display = "none";
            profilText.style.display = "block";
        }
    }
    // Переключаем видимость меню "Orders"
    
});



showInfoButton.addEventListener("click", function() {
    if (window.innerWidth >= 768) { 
        if (infoMenu.style.display === "none" || infoMenu.style.display === "") {
            infoMenu.style.display = "block";
            profilText.style.display = "none";
            orderMenu.style.display = "none";
            giftMenu.style.display = "none";
            
        } else {
            
            infoMenu.style.display = "none";
            profilText.style.display = "block";
            
        } 
    }
    else { 
        if (infoMenu.style.display === "none" || infoMenu.style.display === "") {
            infoMenu.style.display = "block";
            profilText.style.display = "none";
            orderMenu.style.display = "none";
            giftMenu.style.display = "none";
            items.style.display = "none";
        } else {
            items.style.display = "none";
            infoMenu.style.display = "none";
            profilText.style.display = "block";
            
        }
    }
    // Переключаем видимость меню "Info"
    
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
        items.style.display = "none";
    } else {
        items.style.display = "none";
        giftMenu.style.display = "none";
        profilText.style.display = "block";
    }
});