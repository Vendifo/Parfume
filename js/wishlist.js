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

  function addToCart1() {
    var cartMessage = document.getElementById("cartMessage1");
    
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