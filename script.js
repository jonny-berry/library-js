const myLibrary = []; // Contains all book objects

// Constructs new book objects
function Book(title, author, totalPages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.title = title;
  this.author = author;
  this.totalPages = totalPages;
  this.read = read;
}

// Creates a book object using the given parameters then pushes it to the end of the myLibrary array
function addBookToLibrary(title, author, totalPages, read) {
  let book = new Book(title, author, totalPages, read);
  book.id = crypto.randomUUID();
  myLibrary.push(book);
}

addBookToLibrary('this is a book', 'lewis', 200, true);
addBookToLibrary('also a book', 'clark', 15, false);

console.log(myLibrary);