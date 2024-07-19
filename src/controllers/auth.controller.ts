import { RequestLogin, ResponseLogin } from "../models/auth.model";

export class AuthController {
    constructor(private urlApi: string = 'http://190.147.64.47:5155/') { }
    
    async postLogin(data: RequestLogin): Promise<ResponseLogin> {
        let endpointLogin: string = 'api/v1/auth/login'
        console.log(this.urlApi)

        const headers: Record<string, string> = {
            'Content-Type': 'application/json'
        }

        const reqOptions: RequestInit = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        }

        const url: string = this.urlApi + endpointLogin
        const result: Response = await fetch(url, reqOptions)

        console.log(`Status code: ${result.status}`)
        if (result.status !== 201) {
            console.log(`Response Body ${(await result.json()).message}`);
            throw new Error('No Authenticated')
        }

        const responseBodyLogin: ResponseLogin = await result.json()
        return responseBodyLogin
    }
}