function addNumbers(x, y, z) {
    return x + y + z;
}
let numbers = [1, 2, 3];

// console.log(addNumbers(...numbers));



let numbers1 = [4, 5, 6, ...numbers];
console.log(numbers1);