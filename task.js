const discription = document.querySelector(".discription-list-item");

const array = [];
for (let i = 1; i < 9; i += 1) {
  const htmlText = `Przykład ${i}`;
  array.push(htmlText);
}

discription.innerHTML += array[0];
discription.innerHTML += array[0];
discription.innerHTML += `<p>${array[1]}</p>`;

discription.insertAdjacentHTML ("afterbegin", `<p>${array[2]}</p>`);
discription.insertAdjacentHTML("beforeend", `<p>${array[3]}</p>`);

discription.insertAdjacentHTML ("beforebegin", `<p>${array[4]}</p>`);
discription.insertAdjacentHTML("afterend", `<p>${array[5]}</p>`);
discription.insertAdjacentHTML("afterend", `<p>${array[6]}</p>`);
discription.insertAdjacentHTML("afterend", `<p>${array[6]}</p>`);

discription.innerHTML += `${!!array[0]} `;
discription.innerHTML += `${!array[0]} `;
discription.innerHTML += array[0];