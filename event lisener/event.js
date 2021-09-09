var h1 = document.querySelector('h1');

var button1 = document.querySelectorAll('.mybtn')[0];

var button2 = document.querySelectorAll('.mybtn')[1];

var button3 = document.querySelectorAll('.mybtn')[2];
button1.addEventListener("click", function () {
    var text = this.innerHTML;
    h1.innerHTML = text + " is clicked"
});

button2.addEventListener("click", function () {
    var text = this.innerHTML;
    h1.innerHTML = text + " is clicked"
});

button3.addEventListener("click", function () {
    var text = this.innerHTML;
    h1.innerHTML = text + " is clicked"
});

