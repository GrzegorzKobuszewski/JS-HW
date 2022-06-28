const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line

  getPotions() {
    return this.potions;
  },


  addPotion(newPotion) {
    for (const object of this.potions) {
    if (object.name === newPotion.name) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
    }
    }
   return this.potions.push(newPotion);
  },


  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);
    for (const object of this.potions) {
    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }
}
    this.potions.splice(potionIndex, 1);
  },




  // Change code above this line
};




console.log(atTheOldToad.addPotion({ name: "Speed222", price: 460 }));


const names = atTheOldToad.potions.map(potions => potions.name);
console.log(names);

