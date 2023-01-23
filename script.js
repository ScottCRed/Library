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
  const container = document.querySelector('#container');
    const infoBox = document.createElement('div');
    infoBox.classList.add('infoBox');
    infoBox.textContent = "Oh hi!"

    container.appendChild(infoBox)
  console.log('div goes here')
}

function addBook () {
  return 'add a book'
};

function removeBook () {
  return 'remove a book'
}

