class Book {
    constructor(title, author) {
        this.title = title
        this.author = author
    }

    info() {
        console.log(`${this.title} by ${this.author}`)
    }
}

const myBook = new Book("The Hobbit", "Tolkien")
myBook.info()