document.addEventListener('DOMContentLoaded', function () {
    const products = document.querySelectorAll('.aboutus-newrelease__product');
    const itemsPerPage = 3;
    const itemsPerPagePhone = 2;
    let startIndex = 0;
    let endIndex = startIndex + itemsPerPage;
    let endIndexPhone = startIndex + itemsPerPagePhone;

    function showProducts() {
        products.forEach((product, index) => {
            if (window.innerWidth < 767) {
                // Если ширина экрана меньше 767px, показываем itemsPerPagePhone товаров
                if (index >= startIndex && index < endIndexPhone) {
                    product.style.display = 'block';
                    setTimeout(() => {
                        product.style.opacity = '1';
                    }, 50 * (index - startIndex));
                } else {
                    product.style.display = 'none';
                    product.style.opacity = '0';
                }
            } else {
                // Иначе показываем itemsPerPage товаров
                if (index >= startIndex && index < endIndex) {
                    product.style.display = 'block';
                    setTimeout(() => {
                        product.style.opacity = '1';
                    }, 50 * (index - startIndex));
                } else {
                    product.style.display = 'none';
                    product.style.opacity = '0';
                }
            }
        });
    }

    function showPreviousProducts() {
        if (window.innerWidth < 767) {
            startIndex = Math.max(startIndex - itemsPerPagePhone, 0);
            endIndexPhone = startIndex + itemsPerPagePhone;
        } else {
            startIndex = Math.max(startIndex - itemsPerPage, 0);
            endIndex = startIndex + itemsPerPage;
        }
        showProducts();
    }

    function showNextProducts() {
        if (window.innerWidth < 767) {
            startIndex = Math.min(startIndex + itemsPerPagePhone, products.length - itemsPerPagePhone);
            endIndexPhone = startIndex + itemsPerPagePhone;
            if (startIndex >= products.length - itemsPerPagePhone) {
                startIndex = 0;
                endIndexPhone = startIndex + itemsPerPagePhone;
            }
        } else {
            startIndex = Math.min(startIndex + itemsPerPage, products.length - itemsPerPage);
            endIndex = startIndex + itemsPerPage;
            if (startIndex >= products.length - itemsPerPage) {
                startIndex = 0;
                endIndex = startIndex + itemsPerPage;
            }
        }
        showProducts();
    }

    const prevButtonNR = document.getElementById('prevButtonNR');
    const nextButtonNR = document.getElementById('nextButtonNR');

    prevButtonNR.addEventListener('click', showPreviousProducts);
    nextButtonNR.addEventListener('click', showNextProducts);

    window.addEventListener('resize', () => {
        endIndexPhone = startIndex + itemsPerPagePhone;
        endIndex = startIndex + itemsPerPage;
        showProducts();
    });

    showProducts();




    const bestsellersProducts = document.querySelectorAll('.aboutus-bestsellers__product');
    const bestsellersItemsPerPage = 3;
    const bestsellersItemsPerPagePhone = 2; 
    let bestsellersStartIndex = 0;
    let bestsellersEndIndex = bestsellersStartIndex + bestsellersItemsPerPage;
    let bestsellersEndIndexPhone = bestsellersStartIndex + bestsellersItemsPerPagePhone;

    function showBestsellersProducts() {
        bestsellersProducts.forEach((product, index) => {
            if (window.innerWidth < 767) {
                // Если ширина экрана меньше 767px, показываем bestsellersItemsPerPagePhone товаров
                if (index >= bestsellersStartIndex && index < bestsellersEndIndexPhone) {
                    product.style.display = 'block';
                    setTimeout(() => {
                        product.style.opacity = '1';
                    }, 50 * (index - bestsellersStartIndex));
                } else {
                    product.style.display = 'none';
                    product.style.opacity = '0';
                }
            } else {
                // Иначе показываем bestsellersItemsPerPage товаров
                if (index >= bestsellersStartIndex && index < bestsellersEndIndex) {
                    product.style.display = 'block';
                    setTimeout(() => {
                        product.style.opacity = '1';
                    }, 50 * (index - bestsellersStartIndex));
                } else {
                    product.style.display = 'none';
                    product.style.opacity = '0';
                }
            }
        });
    }

    function showPreviousBestsellersProducts() {
        if (window.innerWidth < 767) {
            bestsellersStartIndex = Math.max(bestsellersStartIndex - bestsellersItemsPerPagePhone, 0);
            bestsellersEndIndexPhone = bestsellersStartIndex + bestsellersItemsPerPagePhone;
        } else {
            bestsellersStartIndex = Math.max(bestsellersStartIndex - bestsellersItemsPerPage, 0);
            bestsellersEndIndex = bestsellersStartIndex + bestsellersItemsPerPage;
        }
        showBestsellersProducts();
    }

    function showNextBestsellersProducts() {
        if (window.innerWidth < 767) {
            bestsellersStartIndex = Math.min(bestsellersStartIndex + bestsellersItemsPerPagePhone, bestsellersProducts.length - bestsellersItemsPerPagePhone);
            bestsellersEndIndexPhone = bestsellersStartIndex + bestsellersItemsPerPagePhone;
            if (bestsellersStartIndex >= bestsellersProducts.length - bestsellersItemsPerPagePhone) {
                bestsellersStartIndex = 0;
                bestsellersEndIndexPhone = bestsellersStartIndex + bestsellersItemsPerPagePhone;
            }
        } else {
            bestsellersStartIndex = Math.min(bestsellersStartIndex + bestsellersItemsPerPage, bestsellersProducts.length - bestsellersItemsPerPage);
            bestsellersEndIndex = bestsellersStartIndex + bestsellersItemsPerPage;
            if (bestsellersStartIndex >= bestsellersProducts.length - bestsellersItemsPerPage) {
                bestsellersStartIndex = 0;
                bestsellersEndIndex = bestsellersStartIndex + bestsellersItemsPerPage;
            }
        }
        showBestsellersProducts();
    }

    const prevButtonBS = document.getElementById('prevButtonBS');
    const nextButtonBS = document.getElementById('nextButtonBS');

    prevButtonBS.addEventListener('click', showPreviousBestsellersProducts);
    nextButtonBS.addEventListener('click', showNextBestsellersProducts);

    window.addEventListener('resize', () => {
        bestsellersEndIndexPhone = bestsellersStartIndex + bestsellersItemsPerPagePhone;
        bestsellersEndIndex = bestsellersStartIndex + bestsellersItemsPerPage;
        showBestsellersProducts();
    });

    showBestsellersProducts();



    const paragraphs = document.querySelectorAll('.aboutus-newrelease__product__disc');
    const paragraphsBS = document.querySelectorAll('.aboutus-bestsellers__product__disc');
    const maxLength = 100;
    const maxLenghtPhone = 50;

    if (innerWidth <= 767) {
        paragraphs.forEach(function (paragraph) {
            if (paragraph.textContent.length > maxLenghtPhone) {
                const truncatedText = paragraph.textContent.substring(0, maxLenghtPhone) + '...';
                paragraph.textContent = truncatedText;
            }
        });
        paragraphsBS.forEach(function (paragraphBS) {
            if (paragraphBS.textContent.length > maxLenghtPhone) {
                const truncatedText = paragraphBS.textContent.substring(0, maxLenghtPhone) + '...';
                paragraphBS.textContent = truncatedText;
            }
        });
    }
    else {
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
    }



});
