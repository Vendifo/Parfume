/*Анимация сообщения о добавлении в wish and cart*/

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

function addtoWish() {
    var cartMessage = document.getElementById("wishMessage");
    
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

/*Увеличение размера изображения*/
const imageContainer = document.getElementById("imageContainer");
const image = document.getElementById("image");

imageContainer.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = imageContainer.getBoundingClientRect();
    const x = (e.clientX - left) /  width;
    const y = (e.clientY - top) /  height;

    // Уменьшаем масштаб и позицию изображения в зависимости от положения курсора
    image.style.transform = `scale(1.1) translate(-${x * 5}%, -${y * 5}%)`;
});
/*Возврат масштаба при отсутствии курсора*/
imageContainer.addEventListener("mouseleave", () => {
    // Сбрасываем масштаб и позицию при выходе курсора из контейнера
    image.style.transform = "scale(1) translate(0%, 0%)";
});

function changeImage(newImageSrc) {
    
    
    // Установите новый источник изображения
    image.src = newImageSrc;

    // Плавно показать изображение с эффектом
    imageContainer.style.opacity = 0; // Сначала делаем элемент невидимым
    setTimeout(function () {
        imageContainer.style.opacity = 1; // Затем делаем элемент видимым снова
    }, 300); // 300 миллисекунд - это продолжительность анимации
}
