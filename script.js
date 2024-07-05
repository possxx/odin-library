const myLibrary = [];

function Book(author, title, pages, description, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.description = description;
    this.read = read;
}

function addBookToLibrary(author, title, pages, description, read) {
    let book = new Book(author, title, pages, description, read);
    myLibrary.push(book);
}

const booksContainer = document.querySelector(".books-container");

function createBookCards() {
    myLibrary.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        const bookTitle = document.createElement("div");
        bookTitle.classList.add("book-title");
        const bookAuthor = document.createElement("div");
        bookAuthor.classList.add("book-author");
        const bookPages = document.createElement("div");
        bookPages.classList.add("book-pages");
        const bookDescription = document.createElement("div");
        bookDescription.classList.add("book-description");
        const bookIcons = document.createElement("div");
        bookIcons.classList.add("book-icons");

        const addToRead = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        addToRead.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        addToRead.setAttribute("viewBox", "0 0 24 24");
        const addToReadPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        addToReadPath.setAttribute("d", "M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C12.36,19.5 12.72,19.5 13.08,19.45C13.03,19.13 13,18.82 13,18.5C13,18.14 13.04,17.78 13.1,17.42C12.74,17.46 12.37,17.5 12,17.5C8.24,17.5 4.83,15.36 3.18,12C4.83,8.64 8.24,6.5 12,6.5C15.76,6.5 19.17,8.64 20.82,12C20.7,12.24 20.56,12.45 20.43,12.68C21.09,12.84 21.72,13.11 22.29,13.5C22.56,13 22.8,12.5 23,12C21.27,7.61 17,4.5 12,4.5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,14.5V17.5H15V19.5H18V22.5H20V19.5H23V17.5H20V14.5H18Z");
        addToRead.appendChild(addToReadPath);

        const removeCard = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        removeCard.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        removeCard.setAttribute("viewBox", "0 0 24 24");
        const removeCardPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        removeCardPath.setAttribute("d", "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7");
        removeCard.appendChild(removeCardPath);

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookDescription);
        bookCard.appendChild(bookIcons);

        bookIcons.appendChild(addToRead);
        bookIcons.appendChild(removeCard);

        bookTitle.textContent = book.title;
        bookAuthor.textContent = `by ${book.author}`;
        bookPages.textContent = `Pages: ${book.pages}`;
        bookDescription.textContent = `Description: ${book.description}`;

        booksContainer.appendChild(bookCard);
    })
}

const bookCardAdd = document.querySelector(".book-card-add");
const bookCardInput = document.querySelector(".book-card-input");
const bookCardAddIcon = document.querySelector(".book-card-add-icon");
const bookCardCloseButton = document.querySelector(".book-card-close-button");

bookCardAddIcon.addEventListener("click", () => {
    bookCardAdd.classList.toggle("display-none");
    bookCardInput.classList.toggle("display-none");
})

bookCardCloseButton.addEventListener("click", () => {
    bookCardAdd.classList.toggle("display-none");
    bookCardInput.classList.toggle("display-none");
})

addBookToLibrary("J.R.R Tolkien", "The Hobbit", "296", "Adventure type shi*", true);
addBookToLibrary("J.K. Rowling", "Harry Potter", "693", "You are a wizard, Harry", false);

createBookCards();
