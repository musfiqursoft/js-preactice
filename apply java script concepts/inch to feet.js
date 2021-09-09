var inch = 156;
var feet = inch / 12;
console.log("the feet value is ", feet);

function inchTofeet(value) {

    var feet = value / 12;
    return feet;
}

var total = inchTofeet(48);
console.log(total);