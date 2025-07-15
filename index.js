/**
 * Library
 */
const myLibrary = [
  {
    name: 'Don Quixote',
    author: 'Miguel de Cervantes',
    pages: 992,
    reading: true,
  },
  {
    name: 'The Adventures of Tom Sawyer',
    author: 'Mark Twain',
    pages: 224,
    reading: false,
  },
  {
    name: 'Alices Adventures in Wonderland',
    author: 'Lewis Carroll',
    pages: 192,
    reading: false,
  },
  {
    name: 'Treasure Island',
    author: 'Robert Louis Stevenson',
    pages: 273,
    reading: true,
  },
];

window.addEventListener('load', (event) => {
  const libraryCollection = document.getElementById(
    'library__collection'
  );

  myLibrary.map((book) => {
    console.log(`book ${book.name}`);

    const libraryCard = document.createElement('div');

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
    readBtn.className = 'library__card__toggle__read';
    readBtn.innerHTML = 'Toggle Read';
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'library__card__delete';
    deleteBtn.innerHTML = 'Delete?';

    libraryCard.append(bookTitle);
    libraryCard.append(bookAuthor);
    libraryCard.append(bookPages);
    libraryCard.append(bookProgress);

    libraryCardButtons.append(readBtn);
    libraryCardButtons.append(deleteBtn);

    libraryCard.append(libraryCardButtons);

    libraryCollection?.append(libraryCard);
  });
});

/**
 * Constructor fc for Book
 *
 * @param {*} name
 * @param {*} author
 * @param {*} numPages
 * @param {*} read
 */
function Book(name, author, numPages, read) {
  if (!new.target) {
    throw Error(
      "You must use the 'new' operator to call the constructor"
    );
  }

  this.id = crypto.randomUUID();
  this.name = name;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
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
  const bookPagesValue = document.getElementById(
    'modal__book__pages'
  )?.value;
  const bookReadValue = document.getElementById(
    'modal__book__read'
  )?.value;

  let newBook = new Book(
    bookNameValue,
    authorNameValue,
    bookPagesValue,
    bookReadValue
  );

  myLibrary.push(newBook);
  renderLibrary();
}

/**
 * Render library to HTML
 *
 */
function renderLibrary() {
  const mainBook =
    document.getElementsByClassName('library__book')[0];

  const unorderedList = document.createElement('ul');
  const liTag = document.createElement('li');

  const bookDescriptions = [
    'Book ID',
    'Book Name',
    'Book Author',
    '# of Pages',
    'Read',
    'Delete',
  ];

  console.log(liTag);
}
