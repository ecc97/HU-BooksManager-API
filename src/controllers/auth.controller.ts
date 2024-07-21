import { RequestLogin, ResponseLogin } from "../models/auth.model";

export class AuthController {
    constructor(private urlApi: string = 'http://190.147.64.47:5155/') { } // Inicializa la URL base de la API 
    
    async postLogin(data: RequestLogin): Promise<ResponseLogin> {
        let endpointLogin: string = 'api/v1/auth/login' // Definición del endpoint para la solicitud de inicio de sesión

        // Encabezados de la solicitud HTTP (Headers)
        const headers: Record<string, string> = {
            'Content-Type': 'application/json'
        }

         // Opciones de la solicitud HTTP (método POST, encabezados y cuerpo JSON)
        const reqOptions: RequestInit = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        }

        const url: string = this.urlApi + endpointLogin // Construcción de la URL completa para la solicitud de inicio de sesión
        const result: Response = await fetch(url, reqOptions) // Realización de la solicitud HTTP utilizando fetch

        console.log(`Status code: ${result.status}`) // Registro del código de estado de la respuesta en la consola
        // Verificación del código de estado de la respuesta
        if (result.status !== 201) {
            // En caso de un código de estado no exitoso, se registra y se lanza un error
            console.log(`Response Body ${(await result.json()).message}`);
            throw new Error('No Authenticated')
        }

        const responseBodyLogin: ResponseLogin = await result.json() // Lectura y parseo del cuerpo de la respuesta JSON en el objeto interface ResponseLogin
        return responseBodyLogin // Retorno del cuerpo de la respuesta parseada como ResponseLogin
    }
}