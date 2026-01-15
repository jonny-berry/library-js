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
addBookToLibrary('The Hobbit', 'Lewis C', 200, true);
addBookToLibrary('Harry Potter', 'Clark B', 15, false);
addBookToLibrary('The Hobbit', 'Lewis C', 200, true);
addBookToLibrary('Harry Potter', 'Clark B', 15, false);
addBookToLibrary('The Hobbit', 'Lewis C', 200, true);
addBookToLibrary('Harry Potter', 'Clark B', 15, false);

let bookGridContainer = document.getElementById('book-grid-container');

// Create elements to display book object information and append them to the DOM
function displayBooks() {
  for (let libraryIndex = 0; libraryIndex < myLibrary.length; libraryIndex++) {
    // Create card elements
    let bookCard = document.createElement('div');
    let bookName = document.createElement('p');
    let bookAuthor = document.createElement('p');
    let bookPage = document.createElement('p');
    let readButton = document.createElement('button');
    let removeButton = document.createElement('button');

    // Add classes to card elements
    bookCard.classList.add('book-card');
    bookName.classList.add('book-title');
    bookAuthor.classList.add('book-author');
    bookPage.classList.add('book-page');
    readButton.classList.add('read-button');
    removeButton.classList.add('remove-button');

    const cardElements = [bookName, bookAuthor, bookPage];
    const propertyNames = ['title', 'author', 'totalPages']
    bookGridContainer.appendChild(bookCard);

    // Add card elements inner HTML and append the elements to bookCard
    for (let elemIndex = 0; elemIndex < cardElements.length; elemIndex++) {
      cardElements[elemIndex].innerHTML = myLibrary[libraryIndex][propertyNames[elemIndex]]
      bookCard.appendChild(cardElements[elemIndex]);
    }

    bookPage.innerHTML += ' pages'; // Add the word pages after page count
    readButton.innerHTML = 'Read';
    removeButton.innerHTML = 'Remove';
    bookCard.appendChild(readButton);
    bookCard.appendChild(removeButton);
  }
}

  displayBooks();

  // Create variables for dialog elements
  let addBookDialog = document.getElementById('add-book-dialog');
  let addBookButton = document.getElementById('add-book-button');

  // Display dialog modal on click
  addBookButton.addEventListener('click', () => {
    addBookDialog.showModal();
  })