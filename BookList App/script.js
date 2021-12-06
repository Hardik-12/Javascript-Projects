// Local Storage implementation with javascript
let get_books = () => {
    let books;
    if(localStorage.getItem('books') == null){
        books = [];
    }else{
        books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
}

let add_books = (book) => {
    const books = get_books();
    books.push(book);

    localStorage.setItem('books',JSON.stringify(books));
}

let remove_books = (isbn) => {
    const books = get_books();
    books.forEach((book,index) => {
        if(book.isbn == isbn){
            books.splice(index,1);
        }
    });

    localStorage.setItem('books',JSON.stringify(books));
}


// Function for adding a book
let addBook = (book) => {
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


// Function for displaying a book
let displayBooks = () =>{
    
    const books = get_books();

    books.forEach((book) => {
        addBook(book);
    })
}


// Function for deleting a book
let delete_book = (el) => {
    if(el.classList.contains("delete")){
        el.parentElement.parentElement.remove();
    }
}

// Showing alerts
let showAlert = (message,className) => {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div,form);

    //Vanish in 3 seconds

    setTimeout(() => document.querySelector('.alert').remove(),3000);

}



// Event listener for displaying books
document.addEventListener('DOMContentLoaded',displayBooks());

// Event listener for adding a book

document.querySelector('#book-form').addEventListener('submit',(e) => {

    e.preventDefault();

    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const isbn = document.querySelector('#isbn');
  
    if(title.value=="" || author.value=="" || isbn.value==""){
        
        showAlert("Please fill in all fields","danger");
            
        
    }else{
        let obj={};
        obj.title=title.value;
        obj.author=author.value;
        obj.isbn=isbn.value;
        addBook(obj);

        add_books(obj);
         // Clear fields
        title.value="";
        author.value="";
        isbn.value="";

        showAlert("You have successfuly added a book",'success');
       
    }
    
})

document.querySelector("#book-list").addEventListener('click',(e)=>{
    if(e.target.tagName == "A"){
        delete_book(e.target);
        showAlert("Book Removed",'success');
    }

    // Remove book from store
    remove_books(e.target.parentElement.previousElementSibling.textContent);
})



