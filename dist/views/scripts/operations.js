var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BooksController } from "../../controllers/books.controller.js";
const booksController = new BooksController();
export function createBookItem(newBook, token) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const bookCreated = yield booksController.createBook(newBook, token);
            console.log(bookCreated);
            yield booksController.getBooks(token);
            alert('Book created successfully');
        }
        catch (error) {
            console.error('Error creating book:', error);
        }
    });
}
export function updateBookItem(bookId, bookToUpdate, token) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const bookUpdated = yield booksController.updateBookById(bookId, bookToUpdate, token);
            console.log(bookUpdated);
            yield booksController.getBooks(token);
            alert('Book updated successfully');
        }
        catch (error) {
            console.error('Error updating book:', error);
        }
    });
}
export function deleteBookItem(bookId, token, booksList, bookItem) {
    return __awaiter(this, void 0, void 0, function* () {
        if (confirm('Are you sure you want to delete this book?')) {
            try {
                yield booksController.deleteBookById(bookId, token);
                booksList.removeChild(bookItem);
                yield booksController.getBooks(token);
                alert('Book deleted successfully');
            }
            catch (error) {
                console.error('Error deleting book:', error);
            }
        }
    });
}
