document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    // Закрываем меню при клике на ссылку
    const menuItems = document.querySelectorAll('.menu a');

    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            menu.classList.remove('active');
        });
    });
});
