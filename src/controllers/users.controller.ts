import { RequestCreateUser, ResponseCreateUser } from "../models/users.model";

export class UsersController {
    constructor(private urlApi: string = 'http://190.147.64.47:5155/') { }
    
    async createUser(user: RequestCreateUser): Promise<ResponseCreateUser>{
        let endpointCreateUser: string = 'api/v1/users'
        console.log(this.urlApi);

        const headers: Record<string, string> = {
            'Content-Type': 'application/json'
        }

        const reqOptions: RequestInit = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(user)
        }

        const url: string = this.urlApi + endpointCreateUser
        const result: Response = await fetch(url, reqOptions)

        console.log(`Status code: ${result.status}`)
        if (result.status!== 201) {
            console.log(`Response Body ${(await result.json()).message}`);
            throw new Error('Error create User')
        }

        const responseBodyCreateUser: ResponseCreateUser = await result.json()
        return responseBodyCreateUser;
    }
}