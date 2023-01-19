/* eslint-disable */

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  read = read;
}

const book1 = new Book('Hooray', 'Me', '300', true);

console.log(book1);
