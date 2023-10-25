const decrementButton = document.querySelector('.decrement');
const incrementButton = document.querySelector('.increment');
const valueSpan = document.querySelector('.value');
const totalPriceSpan = document.querySelector('.total-price');

const decrementButton1 = document.querySelector('.decrement1');
const incrementButton1 = document.querySelector('.increment1');
const valueSpan1 = document.querySelector('.value1');
const totalPriceSpan1 = document.querySelector('.total-price1');

const totalPriceRuble = document.querySelector('.cart-total__price__ruble');

let count = 1;
const unitPrice = totalPriceSpan.textContent; // Здесь установите цену за единицу товара

decrementButton.addEventListener('click', () => {
  if (count > 1) {
    count -= 1;
    updateValue();
  }
});

incrementButton.addEventListener('click', () => {
  count += 1;
  updateValue();
});



let count1 = 1;
const unitPrice1 = totalPriceSpan1.textContent; // Здесь установите цену за единицу товара
decrementButton1.addEventListener('click', () => {
  if (count1 > 1) {
    count1 -= 1;
    updateValue1();
  }
});

incrementButton1.addEventListener('click', () => {
  count1 += 1;
  updateValue1();
});

function updateValue() {
  valueSpan.textContent = count;
  const total = count * unitPrice;
  totalPriceSpan.textContent = total;
  totalPriceRuble.textContent = parseFloat(totalPriceSpan.textContent) + parseFloat(totalPriceSpan1.textContent);
}

updateValue();

function updateValue1() {
  valueSpan1.textContent = count1;
  const total1 = count1 * unitPrice1;
  totalPriceSpan1.textContent = total1;
  totalPriceRuble.textContent = parseFloat(totalPriceSpan.textContent) + parseFloat(totalPriceSpan1.textContent);
}

updateValue1();





const mainCheckbox = document.getElementById('mainCheckbox');
const secondaryCheckboxes = document.querySelectorAll('.secondaryCheckbox');

// Слушаем изменения состояния главной галочки
mainCheckbox.addEventListener('change', () => {
  const isChecked = mainCheckbox.checked;

  // Устанавливаем состояние всех второстепенных галочек таким же, как у главной
  secondaryCheckboxes.forEach((checkbox) => {
    checkbox.checked = isChecked;
  });
});

// Слушаем изменения состояния второстепенных галочек
secondaryCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    // Проверяем, сколько из второстепенных галочек отмечено
    const checkedCount = Array.from(secondaryCheckboxes).filter((checkbox) => checkbox.checked).length;

    // Если все второстепенные галочки отмечены, активируем главную галочку
    mainCheckbox.checked = checkedCount === secondaryCheckboxes.length;
  });
});
