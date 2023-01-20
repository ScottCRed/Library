/* eslint-disable */

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {return this.title + ' by '+ this.author + ', ' + this.pages + ' pages' + ', has been read'
  }
}

const book1 = new Book('Hooray', 'Me', '300', true);

console.log(book1);
console.log(book1.info())