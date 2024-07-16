const myLibrary = [];

class Book {
    constructor(author, title, pages, description) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.description = description;
    }

    addBookToLibrary() {
        myLibrary.push(this);
    }
}

const book1 = new Book("J.R.R. Tolkien", "The Hobbit", 296, "The Hobbit is set in Middle-earth and follows home-loving Bilbo Baggins, the hobbit of the title, who joins the wizard Gandalf and the thirteen dwarves of Thorin's Company, on a quest to reclaim the dwarves' home and treasure from the dragon Smaug.");
book1.addBookToLibrary();
const book2 = new Book("Robert Louis Stevenson", "Treasure Island", 240, "This classic tale follows young Jim Hawkins as he embarks on a perilous sea journey to find buried treasure, encountering pirates like the infamous Long John Silver.");
book2.addBookToLibrary();
const book3 = new Book("Jack London", "The Call of the Wild", 232, "Set in the Yukon during the Klondike Gold Rush, this novel follows a domesticated dog named Buck as he returns to his wild instincts to survive in the harsh wilderness.");
book3.addBookToLibrary();
const book4 = new Book("Yann Martel", "Life of Pi", 319, "Pi Patel, a young Indian boy, survives a shipwreck and is left stranded on a lifeboat in the Pacific Ocean with a Bengal tiger, forging an extraordinary journey of survival and faith.");
book4.addBookToLibrary();
const book5 = new Book("Gary Paulsen", "Hatchet", 195, "After a plane crash, thirteen-year-old Brian Robeson must survive alone in the Canadian wilderness with only a hatchet, facing numerous challenges that test his resilience and ingenuity.");
book5.addBookToLibrary();

const booksContainer = document.querySelector(".books-container");
const newBooksContainer = document.querySelector(".book-card-add-input");

function createBookCards() {
    myLibrary.forEach((book, index) => {
        const bookIndex = index;

        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.setAttribute("data", `card-${bookIndex}`);
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
        addToRead.setAttribute("class", "book-read-icon");
        addToRead.setAttribute("data", `read-${bookIndex}`);
        const addToReadPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        addToReadPath.setAttribute("d", "M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C12.36,19.5 12.72,19.5 13.08,19.45C13.03,19.13 13,18.82 13,18.5C13,18.14 13.04,17.78 13.1,17.42C12.74,17.46 12.37,17.5 12,17.5C8.24,17.5 4.83,15.36 3.18,12C4.83,8.64 8.24,6.5 12,6.5C15.76,6.5 19.17,8.64 20.82,12C20.7,12.24 20.56,12.45 20.43,12.68C21.09,12.84 21.72,13.11 22.29,13.5C22.56,13 22.8,12.5 23,12C21.27,7.61 17,4.5 12,4.5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,14.5V17.5H15V19.5H18V22.5H20V19.5H23V17.5H20V14.5H18Z");
        addToRead.appendChild(addToReadPath);

        const removeFromRead = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        removeFromRead.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        removeFromRead.setAttribute("viewBox", "0 0 24 24");
        removeFromRead.setAttribute("class", "book-read-icon-remove");
        removeFromRead.setAttribute("data", `remove-${bookIndex}`);
        removeFromRead.classList.add("display-none");
        const removeFromReadPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        removeFromReadPath.setAttribute("d", "M12 4.5A11.8 11.8 0 0 0 1 12a11.8 11.8 0 0 0 11 7.5h1.1a3.8 3.8 0 0 1-.1-1a10 10 0 0 1 .2-1.7L12 17a5 5 0 1 1 5-5a2.8 2.8 0 0 1-.1.9a5.2 5.2 0 0 1 2.1-.4a5.6 5.6 0 0 1 3.3 1A10 10 0 0 0 23 12a11.8 11.8 0 0 0-11-7.5M12 9a3 3 0 1 0 3 3a2.9 2.9 0 0 0-3-3m3 8.5v2h8v-2Z");
        removeFromRead.appendChild(removeFromReadPath);

        const removeCard = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        removeCard.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        removeCard.setAttribute("viewBox", "0 0 24 24");
        removeCard.setAttribute("data", `remove-card-${bookIndex}`);
        removeCard.classList.add("remove-card-icon");
        const removeCardPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        removeCardPath.setAttribute("d", "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7");
        removeCard.appendChild(removeCardPath);

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookDescription);
        bookCard.appendChild(bookIcons);

        bookIcons.appendChild(addToRead);
        bookIcons.appendChild(removeFromRead);
        bookIcons.appendChild(removeCard);

        bookTitle.textContent = book.title;
        bookAuthor.textContent = `by ${book.author}`;
        bookPages.textContent = `Pages: ${book.pages}`;
        bookDescription.textContent = `Description: ${book.description}`;

        booksContainer.appendChild(bookCard);
    })
}

function addReadBooks() {
    const book1 = document.querySelector(`[data="card-1"]`);
    const book1ReadIcon = document.querySelector(`[data="read-1"]`);
    const book1RemoveIcon = document.querySelector(`[data="remove-1"]`);
    book1.classList.toggle("book-card-read");
    book1ReadIcon.classList.toggle("display-none");
    book1RemoveIcon.classList.toggle("display-none");
    const book2 = document.querySelector(`[data="card-3"]`);
    const book2ReadIcon = document.querySelector(`[data="read-3"]`);
    const book2RemoveIcon = document.querySelector(`[data="remove-3"]`);
    book2.classList.toggle("book-card-read");
    book2ReadIcon.classList.toggle("display-none");
    book2RemoveIcon.classList.toggle("display-none");
}

createBookCards(myLibrary);
addReadBooks();

function addBookCard() {
    const newBookIndex = myLibrary.length - 1;
    const newBook = myLibrary[newBookIndex];

    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.setAttribute("data", `card-${newBookIndex}`);
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
    addToRead.setAttribute("class", "book-read-icon");
    addToRead.setAttribute("data", `read-${newBookIndex}`);
    const addToReadPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    addToReadPath.setAttribute("d", "M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C12.36,19.5 12.72,19.5 13.08,19.45C13.03,19.13 13,18.82 13,18.5C13,18.14 13.04,17.78 13.1,17.42C12.74,17.46 12.37,17.5 12,17.5C8.24,17.5 4.83,15.36 3.18,12C4.83,8.64 8.24,6.5 12,6.5C15.76,6.5 19.17,8.64 20.82,12C20.7,12.24 20.56,12.45 20.43,12.68C21.09,12.84 21.72,13.11 22.29,13.5C22.56,13 22.8,12.5 23,12C21.27,7.61 17,4.5 12,4.5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,14.5V17.5H15V19.5H18V22.5H20V19.5H23V17.5H20V14.5H18Z");
    addToRead.appendChild(addToReadPath);

    const removeFromRead = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    removeFromRead.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    removeFromRead.setAttribute("viewBox", "0 0 24 24");
    removeFromRead.setAttribute("class", "book-read-icon-remove");
    removeFromRead.setAttribute("data", `remove-${newBookIndex}`);
    removeFromRead.classList.add("display-none");
    const removeFromReadPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    removeFromReadPath.setAttribute("d", "M12 4.5A11.8 11.8 0 0 0 1 12a11.8 11.8 0 0 0 11 7.5h1.1a3.8 3.8 0 0 1-.1-1a10 10 0 0 1 .2-1.7L12 17a5 5 0 1 1 5-5a2.8 2.8 0 0 1-.1.9a5.2 5.2 0 0 1 2.1-.4a5.6 5.6 0 0 1 3.3 1A10 10 0 0 0 23 12a11.8 11.8 0 0 0-11-7.5M12 9a3 3 0 1 0 3 3a2.9 2.9 0 0 0-3-3m3 8.5v2h8v-2Z");
    removeFromRead.appendChild(removeFromReadPath);

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
    bookIcons.appendChild(removeFromRead);
    bookIcons.appendChild(removeCard);

    bookTitle.textContent = newBook.title;
    bookAuthor.textContent = `by ${newBook.author}`;
    bookPages.textContent = `Pages: ${newBook.pages}`;
    bookDescription.textContent = `Description: ${newBook.description}`;

    newBooksContainer.insertAdjacentElement("afterend", bookCard);

    addToRead.addEventListener("click", () => {
        removeFromRead.classList.toggle("display-none");
        addToRead.classList.toggle("display-none");
        bookCard.classList.toggle("book-card-read");
    })

    removeFromRead.addEventListener("click", () => {
        addToRead.classList.toggle("display-none");
        removeFromRead.classList.toggle("display-none");
        bookCard.classList.toggle("book-card-read");
    })

    removeCard.addEventListener("click", () => {
        bookCard.remove();
    })
}

const bookCardAdd = document.querySelector(".book-card-add");
const bookCardInput = document.querySelector(".book-card-input");
const bookCardAddIcon = document.querySelector(".book-card-add-icon");
const bookCardClose = document.querySelector(".book-card-close-button");

bookCardAddIcon.addEventListener("click", () => {
    bookCardAdd.classList.toggle("display-none");
    bookCardInput.classList.toggle("display-none");
})

bookCardClose.addEventListener("click", () => {
    bookCardAdd.classList.toggle("display-none");
    bookCardInput.classList.toggle("display-none");
})

const inputTitle = document.querySelector(".input-title");
const inputAuthor = document.querySelector(".input-author");
const inputPages = document.querySelector(".input-pages");
const inputTextarea = document.querySelector(".input-textarea");

const bookCardSubmit = document.querySelector(".book-card-submit-button");

bookCardSubmit.addEventListener("click", (event) => {
    let book = new Book(inputAuthor.value, inputTitle.value, inputPages.value, inputTextarea.value);
    book.addBookToLibrary();

    addBookCard();

    inputTitle.value = "";
    inputAuthor.value = "";
    inputPages.value = "";
    inputTextarea.value = "";

    event.preventDefault();
})

const bookReadIcon = document.querySelectorAll(".book-read-icon");
const bookReadIconRemove = document.querySelectorAll(".book-read-icon-remove");
const removeCardIcon = document.querySelectorAll(".remove-card-icon");

bookReadIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        const cardIndex = icon.getAttribute("data")
                        .split("-")
                        .splice(1, 2)
                        .toString();
        const removeIcon = document.querySelector(`[data="remove-${cardIndex}"]`);
        const iconCard = document.querySelector(`[data="card-${cardIndex}"]`);
        
        removeIcon.classList.toggle("display-none");
        icon.classList.toggle("display-none");
        iconCard.classList.toggle("book-card-read");
    })
})

bookReadIconRemove.forEach(icon => {
    icon.addEventListener("click", () => {
        const cardIndex = icon.getAttribute("data")
                        .split("-")
                        .splice(1, 2)
                        .toString();
        const readIcon = document.querySelector(`[data="read-${cardIndex}"]`);
        const iconCard = document.querySelector(`[data="card-${cardIndex}"]`);

        readIcon.classList.toggle("display-none");
        icon.classList.toggle("display-none");
        iconCard.classList.toggle("book-card-read");
    })
})

removeCardIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        const cardIndex = icon.getAttribute("data")
                          .split("-")
                          .splice(2, 3)
                          .toString();  
    const iconCard = document.querySelector(`[data="card-${cardIndex}"]`);
    iconCard.remove();
    })
})

