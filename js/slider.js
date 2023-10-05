document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const slideButtonsContainer = document.querySelector(".slide-buttons");
    const totalSlides = slides.length;
    let currentSlide = 0;
    let slideButtons = []; // Создайте массив для хранения кнопок

    function createSlideButtons() {
        for (let i = 0; i < totalSlides; i++) {
            const button = document.createElement("div");
            button.classList.add("slide-button");
            button.addEventListener("click", function () {
                showSlide(i);
            });
            slideButtons.push(button); // Добавьте созданную кнопку в массив
            slideButtonsContainer.appendChild(button);
        }
    }

    function showSlide(slideIndex) {
        slides.forEach((slide, index) => {
            if (index === slideIndex) {
                slide.classList.add("active");
                slideButtons[index].classList.add("active");
            } else {
                slide.classList.remove("active");
                slideButtons[index].classList.remove("active");
            }
        });
    }

    createSlideButtons();
    showSlide(currentSlide);

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000);
});
