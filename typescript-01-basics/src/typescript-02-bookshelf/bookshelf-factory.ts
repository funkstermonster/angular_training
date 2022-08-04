
//Singleton factory
class BookshelfFactory {
    private bookShelf: Bookshelf | null = null;
    
    getInstance(): Bookshelf {
        if(this.bookShelf == null) {
            return new Bookshelf()
        }
        return this.bookShelf;
    }
}
