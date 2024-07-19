import { RequestCreateUser, ResponseCreateUser, ResponseUsers, RequestUpdateRoleUser, ResponseUpdateRoleUser } from "../models/users.model";

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

    async getUsers(token: string): Promise<ResponseUsers> {
        let endpointUsers: string = 'api/v1/users'
        console.log(this.urlApi);

        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        const reqOptions: RequestInit = {
            method: 'GET',
            headers: headers
        }

        const url: string = this.urlApi + endpointUsers
        const result: Response = await fetch(url, reqOptions)

        console.log(`Status code: ${result.status}`)
        if (result.status !== 200) {
            console.log(`Response Body ${(await result.json()).message}`);
            throw new Error('Error get Users')
        }
        const responseBodyUsers: ResponseUsers = await result.json()
        return responseBodyUsers;
    }

    async updateRoleUser(id: string, data: RequestUpdateRoleUser, token: string): Promise<ResponseUpdateRoleUser> { 
        let endpointUpdateRoleUser: string = `api/v1/users/${id}/role?role=${data.role}`
        console.log(this.urlApi);

        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        const reqOptions: RequestInit = {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(data)
        }

        const url: string = this.urlApi + endpointUpdateRoleUser
        const result: Response = await fetch(url, reqOptions)

        console.log(`Status code: ${result.status}`)
        if (result.status!== 200) {
                console.log(`Response Body ${(await result.json()).message}`);
                throw new Error('Error update Role User')
        }

        const responseUpdateRoleUser: ResponseUpdateRoleUser = await result.json()
        return responseUpdateRoleUser;
    }
}