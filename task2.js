let arr1 = [1, 2, 3];
let arr2 = arr1;
let arr3 = arr2;

arr3[0] = 0;

console.log(arr1);
console.log(arr2);
console.log(arr3);

arr1 = null;
arr2 = undefined;
arr3 = "cos";


