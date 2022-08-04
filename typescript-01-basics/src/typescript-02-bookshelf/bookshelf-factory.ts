
//Singleton factory
class BookshelfFactory {
    private static bookShelf: Bookshelf | null = null;

    private constructor() {

    }
    
    public static getInstance(): Bookshelf {
        if(BookshelfFactory.bookShelf == null) {
            BookshelfFactory.bookShelf = new Bookshelf()
        }
        return BookshelfFactory.bookShelf;
    }
}
