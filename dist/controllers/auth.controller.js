var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class AuthController {
    constructor(urlApi = 'http://190.147.64.47:5155/') {
        this.urlApi = urlApi;
    } // Inicializa la URL base de la API 
    postLogin(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let endpointLogin = 'api/v1/auth/login'; // Definición del endpoint para la solicitud de inicio de sesión
            // Encabezados de la solicitud HTTP (Headers)
            const headers = {
                'Content-Type': 'application/json'
            };
            // Opciones de la solicitud HTTP (método POST, encabezados y cuerpo JSON)
            const reqOptions = {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            };
            const url = this.urlApi + endpointLogin; // Construcción de la URL completa para la solicitud de inicio de sesión
            const result = yield fetch(url, reqOptions); // Realización de la solicitud HTTP utilizando fetch
            console.log(`Status code: ${result.status}`); // Registro del código de estado de la respuesta en la consola
            // Verificación del código de estado de la respuesta
            if (result.status !== 201) {
                // En caso de un código de estado no exitoso, se registra y se lanza un error
                console.log(`Response Body ${(yield result.json()).message}`);
                throw new Error('No Authenticated');
            }
            const responseBodyLogin = yield result.json(); // Lectura y parseo del cuerpo de la respuesta JSON en el objeto interface ResponseLogin
            return responseBodyLogin; // Retorno del cuerpo de la respuesta parseada como ResponseLogin
        });
    }
}
