const book = {
  title: "Ostatnie królestwo",
  author: "Bernard Cornwell",
  genres: ["proza ​​historyczna", "przygody"],
  rating: 8.38,
};
const keys = Object.keys(book);

for (const key of keys) {
  // Klucz
  console.log(key);
  // Wartość właściwości
  console.log(book[key]);
}