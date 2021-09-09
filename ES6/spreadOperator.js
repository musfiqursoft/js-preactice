function addNumbers(x, y, z) {
    return x + y + z;
}
let numbers = [1, 2, 3];

// console.log(addNumbers(...numbers));



let numbers1 = [4, 5, 6, ...numbers];
// console.log(numbers1);


let nums1 = [1, 2, 3];
let nums2 = [4, 5, 6];
// let num = nums1.concat(nums2);
let num = [...nums1, ...nums2];
console.log(num);

