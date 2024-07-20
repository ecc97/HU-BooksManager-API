import { RequestLogin, ResponseLogin } from "./models/auth.model"
import { ResponseCreateUser, RequestCreateUser, ResponseUsers, RequestUpdateRoleUser, ResponseUpdateRoleUser } from "./models/users.model"
import { RequestCreateBook, ResponseCreateBook, ResponseBooks } from "./models/books.model"
import { AuthController } from "./controllers/auth.controller"
import { UsersController } from "./controllers/users.controller"
import { BooksController } from "./controllers/books.controller"

async function main(): Promise<void>{
    const dataToLogin: RequestLogin = {
        email: 'prueba@prueba.pru',
        password: 'C0ntr4S3gu++r4'
    }

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
    
    const authController: AuthController = new AuthController()
    const usersController: UsersController = new UsersController()
    const booksController: BooksController = new BooksController()

    try {
       const resultLogin: ResponseLogin = await authController.postLogin(dataToLogin)
       console.log(resultLogin)
       const token = resultLogin.data.token
       console.log('Token:', token)

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

        const resultBookById: ResponseBooks = await booksController.getBooksId('1df12ba0-1452-42ea-bc6e-607ad1d82c97', token)
        console.log(resultBookById)

    } catch (error) {
        console.error(`=( : ${error}`)
    }
}

main()

