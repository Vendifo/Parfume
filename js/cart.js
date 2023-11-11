const cartItems = document.querySelectorAll(".cart-item");
const totalPriceElement = document.getElementById("totalPrice");
const cartPayCounts = document.querySelectorAll(".cart-info__count p:last-child");

// Объявляем переменные для суммы всех скидок и общего количества товаров
let totalDiscount = 0;
let totalItemCount = 0;

// Для каждого .cart-item устанавливаем обработчики событий
cartItems.forEach((cartItem, index) => {
  const decrementButton = cartItem.querySelector(".cart-dicrement");
  const incrementButton = cartItem.querySelector(".cart-increment");
  const countElement = cartItem.querySelector(".cart-count");
  const pastPriceElement = cartItem.querySelector(".cart-item__past__price");
  const nowPriceElement = cartItem.querySelector(".cart-item__now__price");
  const discountElement = cartItem.querySelector(".cart-item__discount");

  let count = parseInt(countElement.textContent);
  let pastPrice = parseInt(pastPriceElement.textContent.replace(/\D/g, ""));
  let nowPrice = parseInt(nowPriceElement.textContent.replace(/\D/g, ""));
  let discount = parseInt(discountElement.textContent.match(/\d+/));

  decrementButton.addEventListener("click", () => {
    if (count > 1) {
      count -= 1;
      updateCountAndPrices(index, nowPrice, count);
    }
  });

  incrementButton.addEventListener("click", () => {
    count += 1;
    updateCountAndPrices(index, nowPrice, count);
  });

  function updateCountAndPrices(index, nowPrice, count) {
    countElement.textContent = count;
    pastPriceElement.textContent = pastPrice * count + "p";
    nowPriceElement.textContent = nowPrice * count + "p";
    discountElement.textContent = `Скидка ${(pastPrice - nowPrice) * count}р`;
    cartPayCounts[index].textContent = nowPrice * count + "р";
    updateTotalDiscount();
    updateTotalItemCount(); // Обновляем общее количество товаров
  }

  updateCountAndPrices(index, nowPrice, count);
});

// Функция для обновления суммы всех скидок
function updateTotalDiscount() {
  totalDiscount = 0;
  cartItems.forEach((cartItem) => {
    const discountElement = cartItem.querySelector(".cart-item__discount");
    const discount = parseInt(discountElement.textContent.match(/\d+/));
    totalDiscount += discount;
  });

  updateTotalPrice();
}

function updateTotalItemCount() {
  totalItemCount = 0;
  cartItems.forEach((cartItem) => {
    const countElement = cartItem.querySelector(".cart-count");
    const count = parseInt(countElement.textContent);
    totalItemCount += count;
  });

  // Обновляем элемент с id "totalItemCount" на странице
  const totalItemCountElement = document.getElementById("totalItemCount");
  totalItemCountElement.textContent = totalItemCount;
}

// Функция для обновления общей стоимости
function updateTotalPrice() {
  // Выбираем элементы из DOM
  const productPrices = document.querySelectorAll(".cart-info__count p:last-child");
  const discountElement = document.querySelector(".cart-info__discount p:last-child");

  // Считаем общую стоимость товаров
  let totalProductPrice = 0;
  productPrices.forEach((priceElement) => {
    const price = parseInt(priceElement.textContent.replace(/\D/g, ""));
    totalProductPrice += price;
  });

  // Получаем значение скидки
  const discount = totalDiscount;
  discountElement.textContent = "-" + discount + "р";

  // Вычисляем итоговую стоимость
  const total = totalProductPrice ;

  // Обновляем элемент totalPrice
  totalPriceElement.textContent = total.toLocaleString() + "р";

  // Обновляем элемент с id "totalItemCount" на странице
  const totalItemCountElement = document.getElementById("totalItemCount");
  totalItemCountElement.textContent = totalItemCount ;
}

// Инициализация
updateTotalItemCount();
updateTotalDiscount();



const floatingButton = document.querySelector('.floating-button');
const popupWindow = document.getElementById('popupWindow');
let isMenuOpen = false;

if (window.innerWidth < 1199) {
  floatingButton.addEventListener('click', (event) => {
    isMenuOpen = !isMenuOpen;
    
    // Предотвращаем всплытие события, чтобы оно не дошло до document
    event.stopPropagation();
  
    // Переключаем видимость popup-window при клике на floating-button
    popupWindow.style.display = 'block';
  
    // Добавляем задержку для срабатывания анимации
    setTimeout(() => {
      // Плавно изменяем прозрачность при отображении/скрытии
      popupWindow.style.opacity = '1';
      
      // Скрываем/отображаем floating-button в зависимости от видимости popup-window
      floatingButton.style.display = 'none';
      
    }, 50);
    
  });
  
  window.addEventListener('scroll', () => {
    // Проверяем, открыто ли меню
    if (!isMenuOpen) {
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
      if (isAtBottom) {
        // Если пользователь в самом низу страницы и меню не открыто, скрыть floating button
        floatingButton.style.display = 'none';
        popupWindow.style.display = 'block';
      } else {
        // Если пользователь не в самом низу страницы, показать floating button
        floatingButton.style.display = 'block';
        popupWindow.style.display = 'none';
      }
    }
  });
  
  // Добавьте обработчик события на закрытие меню, если это необходимо
  // Например, можно закрыть меню при клике вне его области или при нажатии на другие элементы страницы
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!popupWindow.contains(target) && target !== floatingButton) {
      // Закрыть меню, если пользователь кликнул вне его области или на другие элементы страницы
      isMenuOpen = false;
      
      popupWindow.style.display = 'none';
      floatingButton.style.display = 'block';
    }
  });
} 





