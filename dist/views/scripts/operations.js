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
