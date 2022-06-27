// Change code below this line
function addOverNum(a, ...args) {
  let total = 0;

  for (const arg of args) {
    if (a < arg)
        total += arg;
  }

  return total;
  // Change code above this line
}
