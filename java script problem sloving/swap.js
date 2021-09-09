var x = 6;
var y = 10;
// console.log('before swap: x = ', x, ', y=', y);

var temp = x;
x = 10;
y = temp;

// console.log('after swap : x = ', x, ', y=', y);


var a = 13;
var b = 28;

// console.log('before swap: a = ', a, ', b=', b);
a = a + b;
b = a - b;
a = a - b;

// console.log('after swap: a = ', a, ', b=', b);

var p = 5;
var q = 9;

console.log('before swap: p = ', p, ', q=', q);

[p, q] = [q, p];

console.log('after swap : p = ', p, ', q=', q);