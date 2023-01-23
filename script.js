/* eslint-disable */

//Book arrays + info
class Book{
  constructor(title, author, pages, read) {
  this.title = form.title.value;
  this.author = form.author.value;
  this.pages = form.pages.value;
  this.read = form.read.checked;
  }
}

let collection =[];
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

function displayBooks () {
  const bookContainer = document.querySelector('.bookContainer');
    bookContainer.innerHTML = ''
    const books = document.querySelectorAll('.bookItem')
    books.forEach(bookItem => display.removeChild(bookItem))
 
  for (let i = 0; i < collection.length; i++){
      bookItem(collection[i]);
  }
}

function addBook () {
  event.preventDefault();
  closeForm();
  const newBook = new Book(form.title.value, form.author.value, form.pages.value, form.read.checked)
  collection.push(newBook);
  form.reset();
  displayBooks();
  console.log(collection);
};

function bookItem (item) {
  const bookContainer = document.querySelector('.bookContainer');
  
  const bookItem = document.createElement('div');
  bookItem.classList.add('bookItem');
  bookItem.setAttribute('id', collection.indexOf(item));
  bookContainer.appendChild(bookItem);

  const title = document.createElement('div');
  title.textContent = item.title;
  bookItem.appendChild(title);

  
  const author = document.createElement('div');
  author.textContent = item.author;
  bookItem.appendChild(author);

  
  const pages = document.createElement('div');
  pages.textContent = item.pages + ' Pages';
  bookItem.appendChild(pages);

  const read = document.createElement('button');
  bookItem.appendChild(read);

  if(item.read===false) {
    read.textContent = 'Not Read'
    read.style.backgroundColor = 'Red'
  } else {
    read.textContent = 'Read'
    read.style.backgroundColor = 'Green'
  };

  read.addEventListener('click', () => {
    
    if(item.read===false) {
      item.read = true
      read.textContent = 'Read'
      read.style.backgroundColor = 'Green'
      console.log(item.read);
    } else {
      item.read = false
      read.textContent = 'Not Read'
      read.style.backgroundColor = 'red'
    }
  
  });

  const remove = document.createElement('button');
  remove.textContent = 'Remove'
  bookItem.appendChild(remove);

  remove.addEventListener('click', () => { 
    console.log('remove the thing')
    collection.splice(collection.indexOf(item),1);
    displayBooks();
  });

};

function removeBook () {
  return 'remove a book'
};