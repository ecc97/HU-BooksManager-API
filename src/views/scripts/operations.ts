import { RequestCreateBook, ResponseCreateBook, RequestUpdateBook, ResponseUpdateBook } from "../../models/books.model.js";
import { BooksController } from "../../controllers/books.controller.js";

const booksController: BooksController = new BooksController();

export async function createBookItem(newBook: RequestCreateBook, token: string): Promise<void>{
        try {
            const bookCreated: ResponseCreateBook = await booksController.createBook(newBook, token);
            console.log(bookCreated);
            await booksController.getBooks(token)
            alert('Book created successfully');
        } catch (error) {
            console.error('Error creating book:', error);
        }
}

export async function updateBookItem(bookId: string, bookToUpdate: RequestUpdateBook, token: string): Promise<void> {
    try {
        const bookUpdated: ResponseUpdateBook = await booksController.updateBookById(bookId, bookToUpdate, token);
        console.log(bookUpdated);
        await booksController.getBooks(token);
        alert('Book updated successfully');
    } catch (error) {
        console.error('Error updating book:', error);
    }
}