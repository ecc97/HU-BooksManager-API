import { RequestLogin, ResponseLogin } from "./models/auth.model"
import { ResponseCreateUser, RequestCreateUser } from "./models/users.model"
import { AuthController } from "./controllers/auth.controller"
import { UsersController } from "./controllers/users.controller"

async function main(): Promise<void>{
    const dataToLogin: RequestLogin = {
        email: 'prueba@prueba.pru',
        password: 'C0ntr4S3gu++r4'
    }

    const userToRegister: RequestCreateUser = {
        name: 'Yas',
        lastName: 'Muñoz',
        email: 'yaima@mail.com',
        password: 'password78'
    }

    const authController: AuthController = new AuthController()
    const usersController: UsersController = new UsersController()

    try {
       const resultLogin: ResponseLogin = await authController.postLogin(dataToLogin)
       console.log(resultLogin)
       const token = resultLogin.data.token
       console.log('Token:', token)

       const createUserResponse: ResponseCreateUser = await usersController.createUser(userToRegister)
       console.log(createUserResponse)
    } catch (error) {
        console.error(`=( : ${error}`)
    }
}

main()
