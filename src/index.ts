import { RequestLogin, ResponseLogin } from "./models/auth.model"
import { ResponseCreateUser, RequestCreateUser, ResponseUsers, RequestUpdateRoleUser, ResponseUpdateRoleUser } from "./models/users.model"
import { AuthController } from "./controllers/auth.controller"
import { UsersController } from "./controllers/users.controller"

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

    const roleToUpdate: RequestUpdateRoleUser = {
        role: 'admin'
    }

    const authController: AuthController = new AuthController()
    const usersController: UsersController = new UsersController()

    try {
       const resultLogin: ResponseLogin = await authController.postLogin(dataToLogin)
       console.log(resultLogin)
       const token = resultLogin.data.token
       console.log('Token:', token)

       // const createUserResponse: ResponseCreateUser = await usersController.createUser(userToRegister)
       // console.log(createUserResponse)

    //    const users: ResponseUsers = await usersController.getUsers(token)
    //    console.log(users)

        const roleUpdated: ResponseUpdateRoleUser = await usersController.updateRoleUser('5094ec65-2b76-42d4-9332-cf8a6ad80665', roleToUpdate, token)
        console.log(roleUpdated)
    } catch (error) {
        console.error(`=( : ${error}`)
    }
}

main()

