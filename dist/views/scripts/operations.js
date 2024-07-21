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
const booksController = new BooksController(); // Instancia del controlador de libros
// Función asincrónica para crear un nuevo libro
export function createBookItem(newBook, token) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Llamada al método createBook del controlador de libros para crear un nuevo libro
            const bookCreated = yield booksController.createBook(newBook, token);
            console.log(bookCreated); // Registro del libro creado en la consola
            yield booksController.getBooks(token); // Actualización de la lista de libros después de la creación
            alert('Book created successfully'); // Alerta de éxito
        }
        catch (error) {
            console.error('Error creating book:', error); // Manejo de errores
        }
    });
}
// Función asincrónica para actualizar un libro existente
export function updateBookItem(bookId, bookToUpdate, token) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Llamada al método updateBookById del controlador de libros para actualizar el libro por su ID
            const bookUpdated = yield booksController.updateBookById(bookId, bookToUpdate, token);
            console.log(bookUpdated); // Registro del libro actualizado en la consola
            yield booksController.getBooks(token); // Actualización de la lista de libros después de la actualización
            alert('Book updated successfully'); // Alerta de éxito
        }
        catch (error) {
            console.error('Error updating book:', error); // Manejo de errores
        }
    });
}
// Función asincrónica para eliminar un libro existente
export function deleteBookItem(bookId, token, booksList, bookItem) {
    return __awaiter(this, void 0, void 0, function* () {
        // Confirmación del usuario antes de proceder con la eliminación
        if (confirm('Are you sure you want to delete this book?')) {
            try {
                // Llamada al método deleteBookById del controlador de libros para eliminar el libro por su ID
                yield booksController.deleteBookById(bookId, token);
                // Remover el elemento de la lista de libros en la interfaz de usuario
                booksList.removeChild(bookItem);
                yield booksController.getBooks(token); // Actualización de la lista de libros después de la eliminación
                alert('Book deleted successfully'); // Alerta de éxito
            }
            catch (error) {
                console.error('Error deleting book:', error); // Manejo de errores
            }
        }
    });
}
