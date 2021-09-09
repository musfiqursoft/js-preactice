document.querySelector("button").addEventListener("click", function () {
    alert("This is a event lisiner")
});


var mystyle=document.querySelector("h1");

mystyle.addEventListener("mouseover", function () {
    mystyle.classList.add("style");
});


mystyle.addEventListener("mouseout", function () {
    this.classList.remove("style");
});
