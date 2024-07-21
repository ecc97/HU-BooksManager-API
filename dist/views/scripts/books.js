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
import { createBookItem, updateBookItem } from "./operations.js";
import { logoutUser } from "./logout.js";
const booksController = new BooksController();
const bookForm = document.getElementById('bookForm');
const title = document.getElementById('title');
const author = document.getElementById('author');
const description = document.getElementById('description');
const summary = document.getElementById('summary');
let id;
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    const booksList = document.getElementById('booksList');
    const token = localStorage.getItem('token');
    if (token) {
        const books = yield booksController.getBooks(token);
        books.data.forEach((book) => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('w-full', 'sm:w-1/2', 'md:w-1/3', 'lg:w-1/4', 'xl:w-1/5', 'px-2', 'mb-4');
            const card = document.createElement('div');
            card.classList.add('bg-white', 'rounded-lg', 'overflow-hidden', 'shadow-lg', 'p-4', 'flex', 'flex-col', 'justify-between', 'h-full');
            const cardContent = document.createElement('div');
            const title = document.createElement('h2');
            title.classList.add('text-xl', 'font-bold', 'mb-2');
            title.textContent = book.title;
            cardContent.appendChild(title);
            const author = document.createElement('p');
            author.classList.add('text-gray-700', 'mb-1');
            author.textContent = `Author: ${book.author}`;
            cardContent.appendChild(author);
            const description = document.createElement('p');
            description.classList.add('text-gray-600', 'mb-4');
            description.textContent = book.description;
            cardContent.appendChild(description);
            const publicationDate = document.createElement('p');
            publicationDate.classList.add('text-gray-500', 'text-sm', 'mb-4');
            publicationDate.textContent = `Publication Date: ${book.publicationDate}`;
            cardContent.appendChild(publicationDate);
            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('flex', 'justify-between');
            const editButton = document.createElement('a');
            editButton.classList.add('bg-blue-500', 'text-white', 'px-4', 'py-2', 'rounded', 'hover:bg-blue-600', 'edit-btn');
            editButton.textContent = 'Edit';
            editButton.dataset.id = book.id;
            editButton.href = '#bookForm';
            buttonContainer.appendChild(editButton);
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('bg-red-500', 'text-white', 'px-4', 'py-2', 'rounded', 'hover:bg-red-600');
            deleteButton.textContent = 'Delete';
            buttonContainer.appendChild(deleteButton);
            card.appendChild(cardContent);
            card.appendChild(buttonContainer);
            bookItem.appendChild(card);
            booksList.appendChild(bookItem);
        });
        bookForm.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
            e.preventDefault();
            const book = {
                title: title.value,
                author: author.value,
                description: description.value,
                summary: summary.value,
                publicationDate: new Date('2024-07-17T14:23:45Z').toISOString()
            };
            if (id === undefined) {
                yield createBookItem(book, token);
            }
            else {
                yield updateBookItem(id, book, token);
            }
            window.location.reload();
            bookForm.reset();
        }));
        booksList.addEventListener('click', (e) => __awaiter(void 0, void 0, void 0, function* () {
            const target = e.target;
            if (target.classList.contains('edit-btn')) {
                id = target.dataset.id;
                const book = yield booksController.getBooksId(id, token);
                title.value = book.data.title;
                ;
                author.value = book.data.author;
                description.value = book.data.description;
                summary.value = book.data.summary;
            }
        }));
        logoutUser();
    }
    else {
        alert('Debes iniciar sesión para ver la lista de libros');
        window.location.href = '/dist/';
    }
}));
