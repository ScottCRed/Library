/* eslint-disable */
let collection =[];

const addClick = document.querySelector('.add');

  addClick.addEventListener('click', infoPrompt)


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {return this.title + ' by '+ this.author + ', ' + this.pages + ' pages' + ', has been read'
  }
}

const book1 = new Book('Hooray', 'Me', '300', false);

console.log(book1);
console.log(book1.info())

function infoPrompt () {
  console.log('eat a dick')
}

function addBook () {
  return 'add a book'
};

function removeBook () {
  return 'remove a book'
}

