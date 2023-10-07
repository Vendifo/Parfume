function changeImage(newImageUrl) {
    // Находим элементы, которые нам нужны
    var imageContainer = document.getElementById('imageContainer');
    var image = document.getElementById('image');

    // Устанавливаем новое изображение внутри контейнера
    image.innerHTML = '<img src="' + newImageUrl + '" alt="">';
}
