function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
  const object = { category, priority, completed, ...data};
  return object;
  // Change code above this line
}
