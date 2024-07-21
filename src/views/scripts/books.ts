import { RequestCreateBook, ResponseCreateBook, ResponseBooks } from "../../models/books.model.js";
import { BooksController } from "../../controllers/books.controller.js";
import { createBookItem } from "./operations.js";
import { logoutUser } from "./logout.js";

const booksController: BooksController = new BooksController()

const bookForm = document.getElementById('bookForm') as HTMLFormElement;
const title = document.getElementById('title') as HTMLInputElement;
const author = document.getElementById('author') as HTMLInputElement;
const description = document.getElementById('description') as HTMLInputElement;
const summary = document.getElementById('summary') as HTMLInputElement;

document.addEventListener('DOMContentLoaded', async () => {
    const booksList = document.getElementById('booksList') as HTMLUListElement;
    const token = localStorage.getItem('token') as string;

    if (token) {
        const books: ResponseBooks = await booksController.getBooks(token);
        books.data.forEach((book: Record<string, string>) => {
            const bookItem = document.createElement('div') as HTMLDivElement;
            bookItem.classList.add('w-full', 'sm:w-1/2', 'md:w-1/3', 'lg:w-1/4', 'xl:w-1/5', 'px-2', 'mb-4');

            const card = document.createElement('div') as HTMLDivElement;
            card.classList.add('bg-white', 'rounded-lg', 'overflow-hidden', 'shadow-lg', 'p-4', 'flex', 'flex-col', 'justify-between', 'h-full');

            const cardContent = document.createElement('div') as HTMLDivElement;

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
            buttonContainer.appendChild(deleteButton);

            card.appendChild(cardContent);
            card.appendChild(buttonContainer);
            bookItem.appendChild(card);
            booksList.appendChild(bookItem);
        });

        bookForm.addEventListener('submit', async (e: Event) => {
            e.preventDefault();

            const book: RequestCreateBook = {
                title: title.value,
                author: author.value,
                description: description.value,
                summary: summary.value,
                publicationDate: new Date('2024-07-17T14:23:45Z').toISOString()
            };

            await createBookItem(book, token);
            window.location.reload();
            bookForm.reset();
        });

        logoutUser()

    } else {
        alert('Debes iniciar sesión para ver la lista de libros');
        window.location.href = '/dist/'
    }
})