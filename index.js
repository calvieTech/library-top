const myLibrary = [];

const addABook = document.getElementsByClassName('library__add')[0];
const libraryModal =
  document.getElementsByClassName('library__modal')[0];
const modalSubmitCancel = document.getElementsByClassName(
  'modal__submit__cancel'
)[0];

const submitABook = document.getElementsByClassName(
  'modal__submit__add'
)[0];

addABook.addEventListener('click', (e) => {
  libraryModal.style.display = 'block';
});

modalSubmitCancel.addEventListener('click', (e) => {
  libraryModal.style.display = 'none';
});

submitABook.addEventListener('click', (e) => {
  e.preventDefault();
});

function Book(id, name, author) {
  this.id = id;
  this.name = name;
  this.author = author;
}
