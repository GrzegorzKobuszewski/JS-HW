// Change code below this line
function add(...args) {
  let add = 0;
  const array = [];
  for (const arg of args) {
    array.push(arg);
    add += arg;
  }
    console.log(array);
  console.log(`Suma elementów tablicy wynosi: ${ add }`);
  return;
  // Change code above this line
}
  
  add(74, 11, 62, 46, 12, 36);
