const books = [];

function isStorageExist() {
    if(typeof(Storage) === undefined){
        alert("Browser kamu tidak mendukung local storage");
        return false
    }
    return true;
}

document.addEventListener("DOMContentLoaded", ()=> {
    const submitForm = document.getElementById("inputBook");

    submitForm.addEventListener("submit", function (event) {
        event.preventDefault();
        addBook();
    });
    
    if(isStorageExist()){
        loadData();
    }   
})

function generateId() {
    return +new Date();
}

function generateObject(id, title, author, year,isCompleted) {
    return {
        id,
        title,
        author,
        year,
        isCompleted
    }
}

function addBook() {
    let bookTitle = document.getElementById("inputBookTitle").value;
    let bookAuthor = document.getElementById("inputBookAuthor").value;
    let bookYear = document.getElementById("inputBookYear").value;
    let bookIsComp = document.getElementById("inputBookIsComplete").checked;

    let generatedID = generateId();
    let booksObj = generateObject(generatedID, bookTitle, bookAuthor, bookYear, bookIsComp);
    books.push(booksObj);

    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

document.addEventListener(RENDER_EVENT, function () {
    const uncompList = document.getElementById("incompleteBookshelfList");
    uncompList.innerHTML = "";
    
    const compList = document.getElementById("completeBookshelfList");
    compList.innerHTML = "";
    
    for(book of objBooks){
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
    artContainer.classList.add("book_list")
    artContainer.append(textTitle, textAuthor, textYear);
    
    const container = document.createElement("div");
    container.classList.add("item", "shadow")
    container.append(container);
    container.setAttribute("id", `todo-${objBook.id}`);

    if(objBook.isCompleted){
        const hapusButton = document.createElement("button");
        const undoButton = document.createElement("button");
        undoButton.classList.add("green");
        undoButton.classList.add("red");
        hapusButton.addEventListener("click", function () {
            removeBook(objBook.id);
        });

        undoButton.addEventListener("click", function () {
            undoBook(objBook.id);
        });

        container.append(undoButton, hapusButton);
    } else {
        const hapusButton = document.createElement("button");
        const checkButton = document.createElement("button");
        checkButton.classList.add("green");
        hapusButton.classList.add("red");
        checkButton.addEventListener("click", function () {
            addBook(objBook.id);
        });

        hapusButton.addEventListener('click', () => {
            removeBook(objBook.id);
        })
        

        container.append(checkButton, hapusButton);
    }

    return container;
}

function addBook(bookId) {
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
    const bookTarget = findTodoIndex(bookId);
    if(bookTarget === -1) return;
    todos.splice(bookTarget, 1);

    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
} 

function undoBook(bookId){
    const bookTarget = findTodo(bookId);
    if(bookTarget == null) return;

    bookTarget.isCompleted = false;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

function findTodoIndex(bookId) {
    for(index in todos){
        if(books[index].id === bookId){
            return index
        }
    }
    return -1
}