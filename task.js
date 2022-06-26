const array_1 = {
  name: "Rafał",
  age: 15,
  address: "Poznań",
}
const array_2 = array_1;
array_2.country=("Poland");
//Niestety oba obiekty mają te same wartości
console.log(array_1);
console.log(array_2);
//Unikamy tego tworząc kopię wartości,
// która nie skopiuje kolejnego dodanego elementu
const copyOfArray_1 = {...array_1};
array_2.country2=("Poland2");
console.log(array_1);
console.log(copyOfArray_1);

