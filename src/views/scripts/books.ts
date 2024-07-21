// Importación de las interfaces y clases del modelo de libros, controlador de libros y función de cierre de sesión
import { RequestCreateBook, ResponseCreateBook, Book, ResponseBooks, ResponseBook } from "../../models/books.model.js";
import { BooksController } from "../../controllers/books.controller.js";
import { createBookItem, updateBookItem, deleteBookItem } from "./operations.js";
import { logoutUser } from "./logout.js";

const booksController: BooksController = new BooksController() // Instancia del controlador de libros
// Obtención de elementos del formulario y la lista de libros
const bookForm = document.getElementById('bookForm') as HTMLFormElement;
const title = document.getElementById('title') as HTMLInputElement;
const author = document.getElementById('author') as HTMLInputElement;
const description = document.getElementById('description') as HTMLInputElement;
const summary = document.getElementById('summary') as HTMLInputElement;
// Variable para almacenar el ID del libro seleccionado para edición
let id: string

document.addEventListener('DOMContentLoaded', async () => {
    const booksList = document.getElementById('booksList') as HTMLUListElement; // Obtención del elemento de la lista de libros
    const token = localStorage.getItem('token') as string; // Obtención del token de autorización almacenado en localStorage

    if (token) {
        const books: ResponseBooks = await booksController.getBooks(token); // Obtención de todos los libros utilizando el controlador de libros pasando de argumento el token obtenido
        // Iteración sobre la lista de libros usando foreach y creación de elementos de interfaz para cada libro
        books.data.forEach((book: Record<string, string>) => {
            const bookItem = document.createElement('div') as HTMLDivElement;
            bookItem.classList.add('w-full', 'sm:w-1/2', 'md:w-1/3', 'lg:w-1/4', 'xl:w-1/5', 'px-2', 'mb-4');

            const card = document.createElement('div') as HTMLDivElement;
            card.classList.add('bg-white', 'rounded-lg', 'overflow-hidden', 'shadow-lg', 'p-4', 'flex', 'flex-col', 'justify-between', 'h-full');

            const cardContent = document.createElement('div') as HTMLDivElement;
            // Creación de elementos para mostrar los detalles del libro
            const title = document.createElement('h2') as HTMLHeadingElement;
            title.classList.add('text-xl', 'font-bold', 'mb-2');
            title.textContent = book.title;
            cardContent.appendChild(title);

            const author = document.createElement('p') as HTMLParagraphElement;
            author.classList.add('text-gray-700', 'mb-1');
            author.textContent = `Author: ${book.author}`;
            cardContent.appendChild(author);

            const description = document.createElement('p') as HTMLParagraphElement;
            description.classList.add('text-gray-600', 'mb-4');
            description.textContent = book.description;
            cardContent.appendChild(description);

            const publicationDate = document.createElement('p') as HTMLParagraphElement;
            publicationDate.classList.add('text-gray-500', 'text-sm', 'mb-4');
            publicationDate.textContent = `Publication Date: ${book.publicationDate}`;
            cardContent.appendChild(publicationDate);
            // Creación de botones para editar y eliminar un libro
            const buttonContainer = document.createElement('div') as HTMLDivElement;
            buttonContainer.classList.add('flex', 'justify-between');

            const editButton = document.createElement('a') as HTMLAnchorElement;
            editButton.classList.add('bg-blue-500', 'text-white', 'px-4', 'py-2', 'rounded', 'hover:bg-blue-600', 'edit-btn');
            editButton.textContent = 'Edit';
            editButton.dataset.id = book.id;
            editButton.href = '#bookForm'
            buttonContainer.appendChild(editButton);

            const deleteButton = document.createElement('button') as HTMLButtonElement;
            deleteButton.classList.add('bg-red-500', 'text-white', 'px-4', 'py-2', 'rounded', 'hover:bg-red-600');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteBookItem(book.id, token, booksList, bookItem))
            buttonContainer.appendChild(deleteButton);

            card.appendChild(cardContent);
            card.appendChild(buttonContainer);
            bookItem.appendChild(card);
            booksList.appendChild(bookItem);
        });
        // Evento de submit del formulario para crear o actualizar un libro
        bookForm.addEventListener('submit', async (e: Event) => {
            e.preventDefault();

            const book: RequestCreateBook = {
                title: title.value,
                author: author.value,
                description: description.value,
                summary: summary.value,
                publicationDate: new Date('2024-07-17T14:23:45Z').toISOString() // Fecha de publicación usando Date para convertir el formato a ISO
            };

            if (id === undefined) {
                await createBookItem(book, token); // Si id no está definido, se crea un nuevo libro
            } else {
                await updateBookItem(id, book, token); // Si id está definido, se actualiza el libro existente
            }
            // Recargar la página después de crear o actualizar un libro y limpiar el formulario
            window.location.reload();
            bookForm.reset();
        });

        // Evento de click en el botón de editar libro
        booksList.addEventListener('click', async (e: Event) => {
            const target = e.target as HTMLElement;
            if (target.classList.contains('edit-btn')) {
                id = target.dataset.id!; // Obtener el ID del libro desde el atributo dataset
                const book: ResponseBook = await booksController.getBooksId(id, token); // Obtener los datos del libro del controlador de libros utilizando el ID y el token de autorización
                // Llenar el formulario con los datos del libro seleccionado para editar
                title.value = book.data.title;;
                author.value = book.data.author;
                description.value = book.data.description;
                summary.value = book.data.summary;

            }
        });

        logoutUser(); // Llamada Función para cerrar sesión del usuario

    } else {
        // Si no hay un token de autorización almacenado en localStorage, redireccionar al login
        alert('Debes iniciar sesión para ver la lista de libros');
        window.location.href = '/dist/'
    }
})