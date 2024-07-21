import { RequestCreateUser, ResponseCreateUser, ResponseUsers, RequestUpdateRoleUser, ResponseUpdateRoleUser } from "../models/users.model";

export class UsersController {
    constructor(private urlApi: string = 'http://190.147.64.47:5155/') { } // Inicializa la URL base de la API 

    // Método para crear un nuevo usuario
    async createUser(user: RequestCreateUser): Promise<ResponseCreateUser> {
        let endpointCreateUser: string = 'api/v1/users' // Definición del endpoint para la solicitud
        console.log(this.urlApi);

        // Encabezados de la solicitud HTTP Headers
        const headers: Record<string, string> = {
            'Content-Type': 'application/json'
        }

        // Opciones de la solicitud HTTP (método POST, encabezados y cuerpo JSON)
        const reqOptions: RequestInit = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(user)
        }

        const url: string = this.urlApi + endpointCreateUser // Construcción de la URL completa para la creación de usuario
        const result: Response = await fetch(url, reqOptions) // Realización de la solicitud HTTP utilizando fetch

        console.log(`Status code: ${result.status}`) // Registro del código de estado de la respuesta en la consola
        // Verificación del código de estado de la respuesta
        if (result.status !== 201) {
            // En caso de un código de estado no exitoso, se registra y se lanza un error
            console.log(`Response Body ${(await result.json()).message}`);
            throw new Error('Error create User')
        }

        const responseBodyCreateUser: ResponseCreateUser = await result.json() // Lectura y parseo del cuerpo de la respuesta JSON en un objeto ResponseCreateUser
        return responseBodyCreateUser; // Retorno del cuerpo de la respuesta parseada como ResponseCreateUser
    }

    // Método para obtener todos los usuarios
    async getUsers(token: string): Promise<ResponseUsers> {
        let endpointUsers: string = 'api/v1/users' // Definición del endpoint para la solicitud
        console.log(this.urlApi);

        // Configuración de los encabezados de la solicitud HTTP Headers con Autorización Token
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        // Opciones de la solicitud HTTP (método GET, encabezados)
        const reqOptions: RequestInit = {
            method: 'GET',
            headers: headers
        }

        const url: string = this.urlApi + endpointUsers // Construcción de la URL completa para obtener usuarios
        const result: Response = await fetch(url, reqOptions) // Realización de la solicitud HTTP utilizando fetch

        console.log(`Status code: ${result.status}`) // Registro del código de estado de la respuesta en la consola
        // Verificación del código de estado de la respuesta
        if (result.status !== 200) {
            // En caso de un código de estado no exitoso, se registra y se lanza un error
            console.log(`Response Body ${(await result.json()).message}`);
            throw new Error('Error get Users')
        }
        const responseBodyUsers: ResponseUsers = await result.json() // Lectura y parseo del cuerpo de la respuesta JSON en un objeto ResponseUsers
        return responseBodyUsers; // Retorno del cuerpo de la respuesta parseada como ResponseUsers
    }

    // Método para actualizar el rol de un usuario
    async updateRoleUser(id: string, data: RequestUpdateRoleUser, token: string): Promise<ResponseUpdateRoleUser> {
        let endpointUpdateRoleUser: string = `api/v1/users/${id}/role?role=${data.role}` // Definición del endpoint para la solicitud
        console.log(this.urlApi);

        // Configuración de los encabezados de la solicitud HTTP Headers con Autorización Token
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        // Opciones de la solicitud HTTP (método PATCH, encabezados y cuerpo JSON)
        const reqOptions: RequestInit = {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(data)
        }

        const url: string = this.urlApi + endpointUpdateRoleUser  // Construcción de la URL completa para actualizar el rol de usuario
        const result: Response = await fetch(url, reqOptions) // Realización de la solicitud HTTP utilizando fetch

        console.log(`Status code: ${result.status}`) // Registro del código de estado de la respuesta en la consola
        // Verificación del código de estado de la respuesta
        if (result.status !== 200) {
            // En caso de un código de estado no exitoso, se registra y se lanza un error
            console.log(`Response Body ${(await result.json()).message}`);
            throw new Error('Error update Role User')
        }

        const responseUpdateRoleUser: ResponseUpdateRoleUser = await result.json() // Lectura y parseo del cuerpo de la respuesta JSON en un objeto ResponseUpdateRoleUser
        return responseUpdateRoleUser; // Retorno del cuerpo de la respuesta parseada como ResponseUpdateRoleUser
    }
}