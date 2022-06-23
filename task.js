const object = {
  mail: "poly@mail.com",
  isOnline: true,
  score: 500,
}

function countProps(object) {
  let propCount = 0;
  // Change code below this line
  for (key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  // Change code above this line
  return propCount;
}
