document.addEventListener('DOMContentLoaded', function () {
    const products = document.querySelectorAll('.aboutus-newrelease__product');
    const itemsPerPage = 3;
    let startIndex = 0;
    let endIndex = startIndex + itemsPerPage;

    function showProducts() {
        products.forEach((product, index) => {
            if (index >= startIndex && index < endIndex) {
                product.style.display = 'block';
                setTimeout(() => {
                    product.style.opacity = '1';
                }, 50 * (index - startIndex)); // Добавляем задержку для каждой карточки товара
            } else {
                product.style.display = 'none';
                product.style.opacity = '0';
            }
        });
    }

    function showPreviousProducts() {
        startIndex = Math.max(startIndex - itemsPerPage, 0);
        endIndex = startIndex + itemsPerPage;
        showProducts();
    }

    function showNextProducts() {
        startIndex = Math.min(startIndex + itemsPerPage, products.length - itemsPerPage);
        endIndex = startIndex + itemsPerPage;
        if (startIndex >= products.length) {
            // Если достигнут конец списка, сбрасываем значения
            startIndex = 0;
            endIndex = startIndex + itemsPerPage;
        }
        showProducts();
    }

    // Назначаем обработчики кнопкам
    const prevButtonNR = document.getElementById('prevButtonNR');
    const nextButtonNR = document.getElementById('nextButtonNR');

    prevButtonNR.addEventListener('click', showPreviousProducts);
    nextButtonNR.addEventListener('click', showNextProducts);

    // Показываем первые три продукта при загрузке страницы
    showProducts();

    const bestsellersProducts = document.querySelectorAll('.aboutus-bestsellers__product');
    const bestsellersItemsPerPage = 3;
    let bestsellersStartIndex = 0;
    let bestsellersEndIndex = bestsellersStartIndex + bestsellersItemsPerPage;

    function showBestsellersProducts() {
        bestsellersProducts.forEach((product, index) => {
            if (index >= bestsellersStartIndex && index < bestsellersEndIndex) {
                product.style.display = 'block';
                setTimeout(() => {
                    product.style.opacity = '1';
                }, 50 * (index - bestsellersStartIndex));
            } else {
                product.style.display = 'none';
                product.style.opacity = '0';
            }
        });
    }

    function showPreviousBestsellersProducts() {
        bestsellersStartIndex = Math.max(bestsellersStartIndex - bestsellersItemsPerPage, 0);
        bestsellersEndIndex = bestsellersStartIndex + bestsellersItemsPerPage;
        showBestsellersProducts();
    }

    function showNextBestsellersProducts() {
        bestsellersStartIndex = Math.min(bestsellersStartIndex + bestsellersItemsPerPage, bestsellersProducts.length - bestsellersItemsPerPage);
        bestsellersEndIndex = bestsellersStartIndex + bestsellersItemsPerPage;
        if (bestsellersStartIndex >= bestsellersProducts.length) {
            bestsellersStartIndex = 0;
            bestsellersEndIndex = bestsellersStartIndex + bestsellersItemsPerPage;
        }
        showBestsellersProducts();
    }

    // Назначаем обработчики кнопкам
    const prevButtonBS = document.getElementById('prevButtonBS');
    const nextButtonBS = document.getElementById('nextButtonBS');

    prevButtonBS.addEventListener('click', showPreviousBestsellersProducts);
    nextButtonBS.addEventListener('click', showNextBestsellersProducts);

    // Показываем первые три продукта при загрузке страницы
    showBestsellersProducts();



    const paragraphs = document.querySelectorAll('.aboutus-newrelease__product__disc');
    const paragraphsBS = document.querySelectorAll('.aboutus-bestsellers__product__disc');
    const maxLength = 100;

    paragraphs.forEach(function (paragraph) {
        if (paragraph.textContent.length > maxLength) {
            const truncatedText = paragraph.textContent.substring(0, maxLength) + '...';
            paragraph.textContent = truncatedText;
        }
    });
    paragraphsBS.forEach(function (paragraphBS) {
        if (paragraphBS.textContent.length > maxLength) {
            const truncatedText = paragraphBS.textContent.substring(0, maxLength) + '...';
            paragraphBS.textContent = truncatedText;
        }
    });


});
