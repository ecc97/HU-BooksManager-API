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
const auth_controller_1 = require("./controllers/auth.controller");
const users_controller_1 = require("./controllers/users.controller");
const books_controller_1 = require("./controllers/books.controller");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const dataToLogin = {
            email: 'prueba@prueba.pru',
            password: 'C0ntr4S3gu++r4'
        };
        // const userToRegister: RequestCreateUser = {
        //     name: 'Juan',
        //     lastName: 'Barrientos',
        //     email: 'juanb1@mail.com',
        //     password: 'password777'
        // }
        // const roleToUpdate: RequestUpdateRoleUser = {
        //     role: 'admin'
        // }
        // const newBook: RequestCreateBook = {
        //     title: 'El Silencio de los Inocentes',
        //     author: 'Miguel de Cervantes',
        //     description: 'Una novela clásica del siglo XX que narra la historia de un joven y un hombre que se enamoran',
        //     summary: 'Una historia de amor que se desarrolla en un mundo en crisis',
        //     publicationDate: new Date('2024-07-17T14:23:45Z').toISOString()
        // }
        const updatedBookData = {
            title: 'The Hospital',
            author: 'Mario Maria',
            publicationDate: new Date('2024-07-17T14:23:45Z').toISOString()
        };
        const authController = new auth_controller_1.AuthController();
        const usersController = new users_controller_1.UsersController();
        const booksController = new books_controller_1.BooksController();
        try {
            const resultLogin = yield authController.postLogin(dataToLogin);
            console.log(resultLogin);
            const token = resultLogin.data.token;
            console.log('Token:', token);
            // const createUserResponse: ResponseCreateUser = await usersController.createUser(userToRegister)
            // console.log(createUserResponse)
            //    const users: ResponseUsers = await usersController.getUsers(token)
            //    console.log(users)
            // const roleUpdated: ResponseUpdateRoleUser = await usersController.updateRoleUser('5094ec65-2b76-42d4-9332-cf8a6ad80665', roleToUpdate, token)
            // console.log(roleUpdated)
            // const bookCreated: ResponseCreateBook = await booksController.createBook(newBook, token)
            // console.log(bookCreated)
            // const books: ResponseBooks = await booksController.getBooks(token)
            // console.log(books)
            // const resultBookById: ResponseBooks = await booksController.getBooksId('1df12ba0-1452-42ea-bc6e-607ad1d82c97', token)
            // console.log(resultBookById)
            const resultUpdateBook = yield booksController.updateBookById('45609c21-872d-48ab-8a32-bc7083b30a39', updatedBookData, token);
            console.log(resultUpdateBook);
        }
        catch (error) {
            console.error(`=( : ${error}`);
        }
    });
}
main();
