let arr1 = [1, 2, 3];
let arr2 = arr1;
let arr3 = arr2;
let arr4 = arr3;

arr3[0] = 0;

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);

arr1 = null;
arr2 = undefined;
arr3 = "cosTam";


