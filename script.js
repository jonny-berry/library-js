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
  book.id = crypto.randomUUID();  // Give book random unique ID
  myLibrary.push(book);
}

// Example books
addBookToLibrary('this is a book', 'lewis', 200, true);
addBookToLibrary('also a book', 'clark', 15, false);

// Create elements to display book object information and append them to the DOM
function displayBooks() {
  for (let libraryIndex = 0; libraryIndex < myLibrary.length; libraryIndex++) {
    // Create card elements
    let bookCard = document.createElement('div');
    let bookName = document.createElement('p');
    let bookAuthor = document.createElement('p');
    let bookPage = document.createElement('p');
    let read = document.createElement('p');

    const cardElements = [bookName, bookAuthor, bookPage, read];
    const propertyNames = ['title', 'author', 'totalPages', 'read']
    document.body.appendChild(bookCard);

    // Add card elements inner HTML and append the elements to bookCard
    for (let elemIndex = 0; elemIndex < cardElements.length; elemIndex++) {
      cardElements[elemIndex].innerHTML = myLibrary[libraryIndex][propertyNames[elemIndex]]
      bookCard.appendChild(cardElements[elemIndex]);
    }
  }
}

displayBooks();