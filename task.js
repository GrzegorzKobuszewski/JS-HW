const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
    console.log(this.books);
    const indexBook = this.books.indexOf(oldName);

    let array = this.books.splice(indexBook, 1, newName);
    console.log (this.books);
    return;
    // Change code above this line
  },
};

bookShelf.updateBook("Haze", "Dungeon chronicles");
