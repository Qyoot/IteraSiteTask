window.onload() = function pop(){
    var img = document.getElementById("#popcat");
    var audio1 = new Audio("./asstes/sound/pop.mp3");
    var audio2 = new Audio("./asstes/sound/close.mp3");

    img.addEventListener('mousedown',
        function() {
            img.src = "./asstets/pictures/pop-cat-2.jpg";
            audio1.play();
        });

    img.addEventListener('mouseup',
        function () {
            img.src = "./asstets/pictures/pop-cat-1.jpg";
            audio2.play();
        });
}
