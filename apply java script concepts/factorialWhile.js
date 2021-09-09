function factorail(num) {
    var i = 1;
    var factorail = 1;
    while (i <= num) {
        factorail = factorail * i;
        // console.log(i, factorail);
        i++;
    }
    return factorail;

}

var result = factorail(6);
console.log(result);