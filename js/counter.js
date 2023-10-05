const decrementButton = document.querySelector('.decrement');
const incrementButton = document.querySelector('.increment');
const valueSpan = document.querySelector('.value');
const totalPriceSpan = document.querySelector('.total-price');

let count = 0;
const unitPrice = 10000; // Здесь установите цену за единицу товара

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

function updateValue() {
  valueSpan.textContent = count;
  const total = count * unitPrice;
  totalPriceSpan.textContent = total;
}

updateValue();







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
