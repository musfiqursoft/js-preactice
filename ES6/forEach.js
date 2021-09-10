let numbers = [10, 20, 30, 40];
// numbers.forEach(function (x) {
//     console.log(x);
// })
let squreNumbers = [];
numbers.forEach(myfuction);
function myfuction(x) {
    squreNumbers.push(x * x);

}



squreNumbers.forEach(function (x) {
    // console.log(x);
})


let num = [10, 20, 30, 40];
num.forEach(function (x, index, arr) {
    arr[index] = x + 5;
})

console.log(num);








// normal away
// num.forEach(function (x) {
//     let value = x + 5;
//     console.log(value);
// })