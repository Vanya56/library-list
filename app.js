// Book Class: represents a book.
class book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
// UI class: Handel UI tasks.
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
       title: 'Book One',
       author: 'vanya',
       isbn: '1234'
    },
    {
       title: 'Book Two',
       author: 'Ivan Lev',
       isbn: '4321'
    }
];
const books = StoredBooks;

books.forEach((book) => UI.addBookToList(book));
    }
static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm
    delete">X</a></td>
    `;

 list.appendChild(row);
}
static deleteBook(el) {
    if(el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
    }
}

static showAllert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);
    // Vannish in three seconds
    setTimeout(() => document.querySelector('.alert').remove(),
    3000);
}
static clearFields() {
    document.querySelector('title').value = '';
    document.querySelector('author').value = '';
    document.querySelector('isbn').value = '';
}
}
// Store Class: handeles storage.

// Event: Display book.
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Event: Add a book.
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();
    // Git form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
    // Validate
    if(title === '' || author === '' || isbn === '') {
        UI.showAllert('Please fill in all fields', 'danger');
    } else {
    const book = new Book(title, author, isbn);
    
    // Add book to UI
    UI.addBookToList(book);

    // Show book added successfuly
    UI.showAllert('Book Added', 'success');

    // Clear fields
    UI.clearFields();
    
}
});
// Event: Remove a book.
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target)
    // Show book was successfuly deleted
    UI.showAllert('Book Removed', 'success');
   
});
