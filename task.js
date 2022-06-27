const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(oldName) {
    return `Deleting book ${oldName}`;
  },
    updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  },  
  // Change code above this line
};
