var photos = ["images/pic1.png", "images/pic2.png"];
console.log(photos.length);
var imgTag = document.getElementsByTagName('img')[0];
var count = 0;

function next() {
    count++;
    if (count >= photos.length) {
        count = 0;
        imgTag.src = photos[count];
    } else {
        imgTag.src = photos[count];
    }
}

function preveies() {
    count--;
    if (count < 0) {
        count = photos.length - 1;
        console.log(count);
        imgTag.src = photos[count]
    } else {
        imgTag.src = photos[count];
    }
}