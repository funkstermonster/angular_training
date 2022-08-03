class Bookshelf {
    bookshelf!: Array<Book>;

    addBook(book: Book): void {
        this.bookshelf.push(book);
    }

    getBooks(year: number): Array<Book> {

        return this.bookshelf.filter(item => item.releaseYear == year);

    }  

    getLightestAuthor(): string {
        let min = 1000000; 
        let author = "";
        this.bookshelf.forEach( item => {
        
            if(item.numberOfPages * 10 + 100 < min) {
                min = item.numberOfPages * 10 + 100;
                author = item.author;
            }
        })
        return author;
    }

    getAuthorOfMostWrittenPages(): string {
        let max = -Infinity;
        let author = "";

        this.bookshelf.forEach( item => {

            if(item.numberOfPages * 10 + 100 > max) {
                max = item.numberOfPages * 10 + 100;
                author = item.author;
            }
        })
        return author;
    }

    printBooks(): void {
        this.bookshelf.forEach(book => {
            console.log(book.getBookInfo());
        })
    }
}
