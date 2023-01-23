/* eslint-disable */

//Book arrays + info
const book1 = new Book('Hooray', 'Me', '300', false);
const book2 = new Book('it\'s me!', 'Me again', '600', true);
const book3 = new Book('JK PAWNING', 'JK ROLLING', '5', false);

let collection =[book1, book2, book3];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {return this.title + ' by '+ this.author + ', ' + this.pages + ' pages' + ', has been read'
  }
}

console.log(collection);


//functions and functionality

const addClick = document.querySelector('.add');
    addClick.addEventListener('click', infoPrompt);

const closeClick = document.querySelector('.closeInfo');
    closeClick.addEventListener('click', closeForm);

const submitClick = document.querySelector('.submit-button')
    submitClick.addEventListener('click', addBook);

function infoPrompt () {
  const infoPrompt = document.querySelector('.test');
  infoPrompt.style.display = 'block';
}

function closeForm () {
  const infoPrompt = document.querySelector('.test');
  infoPrompt.style.display = 'none';
}

function addBook () {
  event.preventDefault();
  closeForm();
  const newBook = new Book(form.title.value, form.author.value, form.pages.value, form.read.checked)
  collection.push(newBook);
  console.log(collection);
};

function removeBook () {
  return 'remove a book'
}

