// Change code below this line
function findMatches(array, ...args) {
  const matches = []; // Don't change this line
  const a = array.length;
      for (let arg of args) {
        for (let i = 0; i < a; i+=1) {
        if (array[i] == arg) { matches.push(arg) }
      }
  }
  console.log (matches);
  // Change code above this line
  return matches;
}

findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);