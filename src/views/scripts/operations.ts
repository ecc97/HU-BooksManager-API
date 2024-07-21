import { RequestCreateBook, ResponseCreateBook, RequestUpdateBook, ResponseUpdateBook } from "../../models/books.model.js";
import { BooksController } from "../../controllers/books.controller.js";

const booksController: BooksController = new BooksController(); // Instancia del controlador de libros
// Función asincrónica para crear un nuevo libro
export async function createBookItem(newBook: RequestCreateBook, token: string): Promise<void>{
        try {
            // Llamada al método createBook del controlador de libros para crear un nuevo libro
            const bookCreated: ResponseCreateBook = await booksController.createBook(newBook, token);
            console.log(bookCreated); // Registro del libro creado en la consola
            await booksController.getBooks(token) // Actualización de la lista de libros después de la creación
            alert('Book created successfully'); // Alerta de éxito
        } catch (error) {
            console.error('Error creating book:', error); // Manejo de errores
        }
}

// Función asincrónica para actualizar un libro existente
export async function updateBookItem(bookId: string, bookToUpdate: RequestUpdateBook, token: string): Promise<void> {
    try {
        // Llamada al método updateBookById del controlador de libros para actualizar el libro por su ID
        const bookUpdated: ResponseUpdateBook = await booksController.updateBookById(bookId, bookToUpdate, token);
        console.log(bookUpdated); // Registro del libro actualizado en la consola
        await booksController.getBooks(token); // Actualización de la lista de libros después de la actualización
        alert('Book updated successfully'); // Alerta de éxito
    } catch (error) {
        console.error('Error updating book:', error); // Manejo de errores
    }
}
// Función asincrónica para eliminar un libro existente
export async function deleteBookItem(bookId: string, token: string, booksList: HTMLUListElement, bookItem: HTMLDivElement): Promise<void> {
    // Confirmación del usuario antes de proceder con la eliminación
    if (confirm('Are you sure you want to delete this book?')) {
        try {
            // Llamada al método deleteBookById del controlador de libros para eliminar el libro por su ID
            await booksController.deleteBookById(bookId, token);
            // Remover el elemento de la lista de libros en la interfaz de usuario
            booksList.removeChild(bookItem);
            await booksController.getBooks(token) // Actualización de la lista de libros después de la eliminación
            alert('Book deleted successfully'); // Alerta de éxito
        } catch (error) {
            console.error('Error deleting book:', error); // Manejo de errores
        }
    }
}