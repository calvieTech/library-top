/**
 * Library
 */
const myLibrary = [];

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

  console.log(myLibrary);

  // console.log(bookNameValue);
  // console.log(authorNameValue);
  // console.log(bookReadValue);
}
