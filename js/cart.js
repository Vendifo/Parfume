const cartItems = document.querySelectorAll(".cart-item");
const totalPriceElement = document.getElementById("totalPrice");
const cartPayCounts = document.querySelectorAll(".cart-info__count p:last-child");

// Объявляем переменную для суммы всех скидок
let totalDiscount = 0;

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
    if (count > 0) {
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
}

// Инициализация
updateTotalDiscount();
