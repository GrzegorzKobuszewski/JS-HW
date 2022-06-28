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
    for (const potion of this.potions) {
    if (potion.name === newPotion.name) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
    }
    }
   return this.potions.push(newPotion);
  },


  removePotion(potionName) {
    
    for (const potion of this.potions) {
      const potionIndex = this.potions.indexOf(potion);
    if (potionIndex === -1) {
      return `Potion ${potionName.name} is not in inventory!`;
      }
      if (potion.name === potionName) {
        return  this.potions.splice(potionIndex, 1);
      };
    };
  },


  updatePotionName(oldName, newName) {
    
    for (const potion of this.potions) {
      const potionIndex = this.potions.indexOf(potion);
      let newPotion = {name: newName, price: potion.price}
      if (potionIndex === -1) {
        return `Potion ${oldName} is not in inventory!`;
      };
      if (potion.name === oldName) {
        return this.potions.splice(potionIndex, 1, newPotion);
      };
    };
  },


    updatePotionName(oldName, newName) {
   for (const potion of this.potions) { 
    const potionIndex = this.potions.indexOf(potion);
let newPotion = {name: newName, price: potion.price}
    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    };
if (potion.name === oldName) this.potions.splice(potionIndex, 1, newPotion);
      };
  },


  // Change code above this line
};




console.log(atTheOldToad.addPotion({ name: "Speed222", price: 460 }));


const names = atTheOldToad.potions.map(potions => potions.name);
console.log(names);

const a = { name: "Speed333", price: 460 };
console.log(a);

console.log(atTheOldToad.removePotion(a));
const b = atTheOldToad.potions.push(a);
console.log(b);

console.log(atTheOldToad.removePotion({ name: "Speed333", price: 460 }));

console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
const names2 = atTheOldToad.potions.map(potions => potions.name);
console.log(names2);