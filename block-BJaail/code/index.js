class BookList {
    constructor(){
        this.books = [];
        this.currentIndexBook = 0;
    }
    add(books = []){
        this.books.push(books)
        return this.books
    }
    getCurrentBook(){
        return this.books[this.currentIndexBook];
    }
    getNextBook(){
        this.currentIndexBook = this.currentIndexBook + 1
        return this.books[this.currentIndexBook];
    }
    getPrevBook(){
        this.currentIndexBook = this.currentIndexBook - 1
        return this.books[this.currentIndexBook];
    }
    changeCurrentBook(index){
        this.currentIndexBook = index;
    }
};


class Book {
    constructor(title, category, author){
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = false;
        this.finishedDate = null;
    }
    markBookAsRead(){
        this.isRead = true;
    }

};


let book1 = new Book ("Wuthering Heights", "Fiction", "Emile Bronte");
let book2 = new Book ("Pride and Prejudice", "Fiction", "Jane Austen");
let book3 = new Book ("Othello", "Fiction", "William Shakespeare");

letlibrary = new BookList();
librayr.add([book1, book2, book3]);