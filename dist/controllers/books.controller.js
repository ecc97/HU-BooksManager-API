"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksController = void 0;
class BooksController {
    constructor(urlApi = 'http://190.147.64.47:5155/') {
        this.urlApi = urlApi;
    }
    createBook(dataBook, token) {
        return __awaiter(this, void 0, void 0, function* () {
            let endpointBooks = 'api/v1/books';
            console.log(this.urlApi);
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };
            const reqOptions = {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(dataBook)
            };
            const url = this.urlApi + endpointBooks;
            const result = yield fetch(url, reqOptions);
            console.log(`Status code: ${result.status}`);
            if (result.status !== 201) {
                console.log(`Response Body ${(yield result.json()).message}`);
                throw new Error('Error create Book');
            }
            const responseBodyCreateBook = yield result.json();
            return responseBodyCreateBook;
        });
    }
    getBooks(token) {
        return __awaiter(this, void 0, void 0, function* () {
            let endpointBooks = 'api/v1/books';
            console.log(this.urlApi);
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };
            const reqOptions = {
                method: 'GET',
                headers: headers
            };
            const url = this.urlApi + endpointBooks;
            const result = yield fetch(url, reqOptions);
            console.log(`Status code: ${result.status}`);
            if (result.status !== 200) {
                console.log(`Response Body ${(yield result.json()).message}`);
                throw new Error('Error get Books');
            }
            const responseBodyBooks = yield result.json();
            return responseBodyBooks;
        });
    }
    getBooksId(id, token) {
        return __awaiter(this, void 0, void 0, function* () {
            let endpointBooksId = `api/v1/books/${id}`;
            console.log(this.urlApi);
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };
            const reqOptions = {
                method: 'GET',
                headers: headers
            };
            const url = this.urlApi + endpointBooksId;
            const result = yield fetch(url, reqOptions);
            console.log(`Status code: ${result.status}`);
            if (result.status !== 200) {
                console.log(`Response Body ${(yield result.json()).message}`);
                throw new Error('Error get book by ID');
            }
            const responseBodyBooks = yield result.json();
            return responseBodyBooks;
        });
    }
    updateBookById(id, data, token) {
        return __awaiter(this, void 0, void 0, function* () {
            let endpointBookById = `api/v1/books/${id}`;
            console.log(this.urlApi);
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };
            const reqOptions = {
                method: 'PATCH',
                headers: headers,
                body: JSON.stringify(data)
            };
            const url = this.urlApi + endpointBookById;
            const result = yield fetch(url, reqOptions);
            console.log(`Status code: ${result.status}`);
            if (result.status !== 200) {
                console.log(`Response Body ${(yield result.json()).message}`);
                throw new Error('Error updating book by id');
            }
            const responseBodyUpdateBook = yield result.json();
            return responseBodyUpdateBook;
        });
    }
    deleteBookById(id, token) {
        return __awaiter(this, void 0, void 0, function* () {
            let endpointDeleteBook = `api/v1/books/${id}`;
            console.log(this.urlApi);
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };
            const reqOptions = {
                method: 'DELETE',
                headers: headers
            };
            const url = this.urlApi + endpointDeleteBook;
            const result = yield fetch(url, reqOptions);
            console.log(`Status code: ${result.status}`);
            if (result.status !== 200) {
                console.log(`Response Body ${(yield result.json()).message}`);
                throw new Error('Error deleting book');
            }
            const responseBodyDelete = yield result.json();
            return responseBodyDelete;
        });
    }
}
exports.BooksController = BooksController;
