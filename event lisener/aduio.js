for (var i = 0; i <= 2; i++) {

    document.querySelectorAll(".mybtn")[i].addEventListener("click", function () {

        var text = this.innerHTML;
        anim(text);
        playaudio(text)


    })
};


document.addEventListener("keypress", function (event) {
    var text = event.key;
    playaudio(text);
    anim(text);

})




function playaudio(text) {

    switch (text) {
        case ("A"):
            console.log(text);
            break;

        case ("B"):
            console.log(text);
            break;

        case ("C"):
            console.log(text);
            break;
    }

}


function anim(text) {
    var seletcedButton = document.querySelector("." + text);
    seletcedButton.classList.add("anim");

    setTimeout(function () {
        seletcedButton.classList.remove("anim");
    }, 500);


}