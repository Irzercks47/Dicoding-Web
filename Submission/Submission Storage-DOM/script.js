const books = [];
const RENDER_EVENT = "render-books";

const SAVED_EVENT = "saved-books";
const STORAGE_KEY = "BOOKS_APPS";

function isStorageExist() {
    if(typeof(Storage) === undefined){
        alert("Browser kamu tidak mendukung local storage");
        return false
    }
    return true;
}

document.addEventListener("DOMContentLoaded", () => {
    const submitForm = document.getElementById("inputBook");

    submitForm.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("masuk dom");
        addBook();
    });
    
    if(isStorageExist()){
        loadData();
    }   
})

function generateId() {
    return +new Date();
}

function generateBookObject(id, title, author, year,isCompleted) {
    return {
        id,
        title,
        author,
        year,
        isCompleted
    }
}

function addBook() {
    const bookTitle = document.getElementById("inputBookTitle").value;
    const bookAuthor = document.getElementById("inputBookAuthor").value;
    const bookYear = document.getElementById("inputBookYear").value;
    const bookIsComp = document.getElementById("inputBookIsComplete").checked;

    const generatedID = generateId();
    const bookObject = generateBookObject(generatedID,bookTitle,bookAuthor,bookYear,bookIsComp);
    books.push(bookObject);
    console.log("masuk add")

    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

document.addEventListener(RENDER_EVENT, function () {
    const uncompList = document.getElementById("incompleteBookshelfList");
    uncompList.innerHTML = "";
    
    const compList = document.getElementById("completeBookshelfList");
    compList.innerHTML = "";
    
    for(book of books){
        const printLib = printBook(book);

        if(book.isCompleted == false)
            uncompList.append(printLib);
        else
            compList.append(printLib);
    }
});

function printBook(objBook){
    const textTitle = document.createElement("h3");
    textTitle.innerText = objBook.title;
    
    const textAuthor = document.createElement("p");
    textAuthor.innerText = objBook.author;

    const textYear = document.createElement("p");
    textYear.innerText = objBook.year;
    
    const artContainer = document.createElement("article");
    artContainer.classList.add("book_item");
    artContainer.append(textTitle, textAuthor, textYear);
    artContainer.setAttribute("id", `book-${objBook.id}`);

    const buttonCont = document.createElement('div');
    buttonCont.classList.add("action")

    if(objBook.isCompleted){
        const hapusButton = document.createElement("button");
        const undoButton = document.createElement("button");
        undoButton.innerText = "Belum Selesai Dibaca";
        hapusButton.innerText = "Hapus Buku";
        undoButton.classList.add("green");
        undoButton.classList.add("red");
        hapusButton.addEventListener("click", function () {
            removeBook(objBook.id);
            alert("Menghapus buku" + " " + objBook.title);
        });

        undoButton.addEventListener("click", function () {
            undoBook(objBook.id);
        });

        buttonCont.append(undoButton, hapusButton);
    } else {
        const hapusButton = document.createElement("button");
        const checkButton = document.createElement("button");
        checkButton.classList.add("green");
        hapusButton.classList.add("red");
        checkButton.innerText = "Selesai Dibaca";
        hapusButton.innerText = "Hapus Buku";
        checkButton.addEventListener("click", function () {
            addBookToUncomp(objBook.id);
        });

        hapusButton.addEventListener('click', () => {
            removeBook(objBook.id);
            alert("Menghapus buku" + " " + objBook.title);
        })
        

        buttonCont.append(checkButton, hapusButton);
    }

    artContainer.append(buttonCont);

    return artContainer;
}

function addBookToUncomp(bookId) {
    const bookTarget = findBook(bookId);
    if(bookTarget == null) return;

    bookTarget.isCompleted = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

function findBook(bookId){
    for(book of books){
        if(book.id === bookId){
            return book
        }
    }
    return null
}

function removeBook(bookId) {
    const bookTarget = findIndex(bookId);
    if(bookTarget === -1) return;
    books.splice(bookTarget, 1);

    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
} 

function undoBook(bookId){
    const bookTarget = findBook(bookId);
    if(bookTarget == null) return;

    bookTarget.isCompleted = false;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

function findIndex(bookId) {
    for(index in books){
        if(books[index].id === bookId){
            return index
        }
    }
    return -1
}

function saveData() {
    if(isStorageExist()){
        const parsed = JSON.stringify(books);
        localStorage.setItem(STORAGE_KEY, parsed);
        document.dispatchEvent(new Event(SAVED_EVENT));
    }
}

document.addEventListener(SAVED_EVENT, function() {
    console.log(localStorage.getItem(STORAGE_KEY));
});

function loadData() {
    const bookData = localStorage.getItem(STORAGE_KEY);
    
    let data = JSON.parse(bookData);
    
    if(data !== null){
        for(book of data){
            books.push(book);
        }
    }
    
    
    document.dispatchEvent(new Event(RENDER_EVENT));
}

const searchForm = document.getElementById('searchBookTitle');

searchForm.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase()
    searchBook(value)
})

function searchBook(input) {
    const booksTitle = document.querySelectorAll('.book_item h3')
    booksTitle.forEach(book => {
        const isVisible = book.innerText.toLowerCase().includes(input)
        book.parentElement.classList.toggle('hide', !isVisible)
    })
}
