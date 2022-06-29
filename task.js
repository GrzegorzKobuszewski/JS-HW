const numbers = [5, 10, 15, 20, 25];

let total = 0;

// Iterujący forEach
  numbers.forEach(function (number, index) {
    total += number;
  console.log(`Indeks ${index}, wartość ${number}`);
});

console.log(total);



function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

  orderedItems.forEach(function (number) {
  totalPrice += number;
  });

  // Change code above this line
  return totalPrice;
}

console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
