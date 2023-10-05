var i=0;
        var image=document.getElementById("heartImage");
        // Добавте свои картинки через запятую
        var imgs=new Array('/img/heart1.svg','/img/heart1full.png');
        function changeImage() {
            i++;
            image.src=imgs[i];
        }