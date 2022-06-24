const salaries = {
  mango: 100,
  poly: 150,
  alfred: 80,
};

function countTotalSalary() {
  
  let totalSalary = 0;
  const values = Object.values(salaries);

  for (const value of values) {
    totalSalary += value;
    console.log(totalSalary);
}

}

countTotalSalary();