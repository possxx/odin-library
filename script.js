const myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
    let book = new Book(author, title, pages, read);
    myLibrary.push(book);
}

function displayBooks() {
    
}