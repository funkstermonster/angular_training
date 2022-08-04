class Book {
    title: string;
    author: string;
    releaseYear: number;
    numberOfPages: number;

    constructor(title: string, author: string, releaseYear: number, numberOfPages: number) {
        this.title = title;
        this.author = author;
        this.releaseYear = releaseYear;
        this.numberOfPages = numberOfPages;
    }

    getBookInfo(): string {
        return `${this.title}, ${this.author}, ${this.releaseYear}, ${this.numberOfPages}`;
    }
}