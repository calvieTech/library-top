/**
 * Library
 */
const myLibrary = [
  {
    id: crypto.randomUUID(),
    name: 'Don Quixote',
    author: 'Miguel de Cervantes',
    pages: 992,
    reading: true,
  },
  {
    id: crypto.randomUUID(),
    name: 'The Adventures of Tom Sawyer',
    author: 'Mark Twain',
    pages: 224,
    reading: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'Alices Adventures in Wonderland',
    author: 'Lewis Carroll',
    pages: 192,
    reading: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'Treasure Island',
    author: 'Robert Louis Stevenson',
    pages: 273,
    reading: true,
  },
];

/*
 * Do this first when loading
 */
window.addEventListener('load', renderToHTML);

/**
 * Render to HTML
 */
function renderToHTML() {
  {
    const libraryCollection = document.getElementById(
      'library__collection'
    );

    // clear previous content
    libraryCollection.innerHTML = '';

    myLibrary.forEach((book) => {
      const libraryCard = document.createElement('div');

      libraryCard.dataset.id = book.id;

      const bookTitle = document.createElement('h2');
      const bookAuthor = document.createElement('h3');
      const bookPages = document.createElement('p');
      const bookProgress = document.createElement('h2');

      libraryCard.className = 'library__card';
      bookTitle.innerHTML = `${book.name}`;
      bookAuthor.innerHTML = `By ${book.author}`;
      bookPages.innerHTML = `Total Pages: ${book.pages}`;

      if (book.reading) {
        bookProgress.innerHTML = `In Progress...`;
      } else {
        bookProgress.innerHTML = `Not read yet!`;
      }

      const libraryCardButtons = document.createElement('div');
      libraryCardButtons.className = 'library__card__buttons';

      const readBtn = document.createElement('button');
      readBtn.setAttribute('data-id', book.id);
      readBtn.className = 'library__card__toggle__read';
      readBtn.innerHTML = 'Toggle Read';
      readBtn.addEventListener('click', () => toggleRead(book.id));

      const deleteBtn = document.createElement('button');
      deleteBtn.setAttribute('data-id', book.id);
      deleteBtn.className = 'library__card__delete';
      deleteBtn.innerHTML = 'Delete?';
      deleteBtn.addEventListener('click', () => deleteBook(book.id));

      libraryCard.append(bookTitle);
      libraryCard.append(bookAuthor);
      libraryCard.append(bookPages);
      libraryCard.append(bookProgress);

      libraryCardButtons.append(readBtn);
      libraryCardButtons.append(deleteBtn);

      libraryCard.append(libraryCardButtons);

      libraryCollection?.append(libraryCard);
    });
  }
}

/**
 * Removes the book from the array
 *
 */
function deleteBook(bookId) {
  const bookIndex = myLibrary.findIndex((book) => book.id === bookId);

  if (bookIndex !== -1) {
    myLibrary.splice(bookIndex, 1);
    renderToHTML();
  }
}

/**
 * Toggle Read Fc for Book
 */
function toggleRead(bookId) {
  const foundBook = myLibrary.find((book) => book.id === bookId);

  if (foundBook) {
    foundBook.reading = !foundBook.reading;
    renderToHTML();
  }
}

/**
 * Constructor fc for Book
 *
 * @param {*} name
 * @param {*} author
 * @param {*} numPages
 * @param {*} reading
 */
function Book(name, author, pages, reading) {
  if (!new.target) {
    throw Error(
      "You must use the 'new' operator to call the constructor"
    );
  }

  this.id = crypto.randomUUID();
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.reading = reading;
}

/**
 * Add book to library
 */
const submitABook = document.getElementsByClassName(
  'modal__submit__add'
)[0];

submitABook.addEventListener('click', addBookToLibrary);

/**
 * Add Book to Library
 *
 * @param {*} e
 */
function addBookToLibrary(e) {
  e.preventDefault();

  const bookNameValue = document.getElementById('modal__book')?.value;
  const authorNameValue =
    document.getElementById('modal__author')?.value;
  const bookPagesValue = parseInt(
    document.getElementById('modal__book__pages')?.value
  );

  const bookReadValue = document.getElementById(
    'modal__book__read'
  )?.checked;

  let newBook = new Book(
    bookNameValue,
    authorNameValue,
    bookPagesValue,
    bookReadValue
  );

  myLibrary.push(newBook);
  console.log(myLibrary);

  renderToHTML();
}
