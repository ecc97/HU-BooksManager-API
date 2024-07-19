import { RequestLogin, ResponseLogin } from "./models/auth.model"
import { AuthController } from "./controllers/auth.controller"

async function main(): Promise<void>{
    const dataToLogin: RequestLogin = {
        email: 'prueba@prueba.pru',
        password: 'C0ntr4S3gu++r4'
    }

    const authController: AuthController = new AuthController()

    try {
       const resultLogin: ResponseLogin = await authController.postLogin(dataToLogin)
       console.log(resultLogin)
       const token = resultLogin.data.token
       console.log('Token:', token)
    } catch (error) {
        console.error(`=( : ${error}`)
    }
}

main()
