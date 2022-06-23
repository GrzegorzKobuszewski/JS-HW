const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment.area=60;
apartment.rooms = 3;
apartment.location = { country:"Jamaica"};
apartment.location = { city: "Kingston" };


// Change code below this line

console.log(apartment);
console.log(apartment.location.country);
console.log(apartment.location.city);