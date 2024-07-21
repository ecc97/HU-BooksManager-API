var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class UsersController {
    constructor(urlApi = 'http://190.147.64.47:5155/') {
        this.urlApi = urlApi;
    } // Inicializa la URL base de la API 
    // Método para crear un nuevo usuario
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let endpointCreateUser = 'api/v1/users'; // Definición del endpoint para la solicitud
            console.log(this.urlApi);
            // Encabezados de la solicitud HTTP Headers
            const headers = {
                'Content-Type': 'application/json'
            };
            // Opciones de la solicitud HTTP (método POST, encabezados y cuerpo JSON)
            const reqOptions = {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(user)
            };
            const url = this.urlApi + endpointCreateUser; // Construcción de la URL completa para la creación de usuario
            const result = yield fetch(url, reqOptions); // Realización de la solicitud HTTP utilizando fetch
            console.log(`Status code: ${result.status}`); // Registro del código de estado de la respuesta en la consola
            // Verificación del código de estado de la respuesta
            if (result.status !== 201) {
                // En caso de un código de estado no exitoso, se registra y se lanza un error
                console.log(`Response Body ${(yield result.json()).message}`);
                throw new Error('Error create User');
            }
            const responseBodyCreateUser = yield result.json(); // Lectura y parseo del cuerpo de la respuesta JSON en un objeto ResponseCreateUser
            return responseBodyCreateUser; // Retorno del cuerpo de la respuesta parseada como ResponseCreateUser
        });
    }
    // Método para obtener todos los usuarios
    getUsers(token) {
        return __awaiter(this, void 0, void 0, function* () {
            let endpointUsers = 'api/v1/users'; // Definición del endpoint para la solicitud
            console.log(this.urlApi);
            // Configuración de los encabezados de la solicitud HTTP Headers con Autorización Token
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };
            // Opciones de la solicitud HTTP (método GET, encabezados)
            const reqOptions = {
                method: 'GET',
                headers: headers
            };
            const url = this.urlApi + endpointUsers; // Construcción de la URL completa para obtener usuarios
            const result = yield fetch(url, reqOptions); // Realización de la solicitud HTTP utilizando fetch
            console.log(`Status code: ${result.status}`); // Registro del código de estado de la respuesta en la consola
            // Verificación del código de estado de la respuesta
            if (result.status !== 200) {
                // En caso de un código de estado no exitoso, se registra y se lanza un error
                console.log(`Response Body ${(yield result.json()).message}`);
                throw new Error('Error get Users');
            }
            const responseBodyUsers = yield result.json(); // Lectura y parseo del cuerpo de la respuesta JSON en un objeto ResponseUsers
            return responseBodyUsers; // Retorno del cuerpo de la respuesta parseada como ResponseUsers
        });
    }
    // Método para actualizar el rol de un usuario
    updateRoleUser(id, data, token) {
        return __awaiter(this, void 0, void 0, function* () {
            let endpointUpdateRoleUser = `api/v1/users/${id}/role?role=${data.role}`; // Definición del endpoint para la solicitud
            console.log(this.urlApi);
            // Configuración de los encabezados de la solicitud HTTP Headers con Autorización Token
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };
            // Opciones de la solicitud HTTP (método PATCH, encabezados y cuerpo JSON)
            const reqOptions = {
                method: 'PATCH',
                headers: headers,
                body: JSON.stringify(data)
            };
            const url = this.urlApi + endpointUpdateRoleUser; // Construcción de la URL completa para actualizar el rol de usuario
            const result = yield fetch(url, reqOptions); // Realización de la solicitud HTTP utilizando fetch
            console.log(`Status code: ${result.status}`); // Registro del código de estado de la respuesta en la consola
            // Verificación del código de estado de la respuesta
            if (result.status !== 200) {
                // En caso de un código de estado no exitoso, se registra y se lanza un error
                console.log(`Response Body ${(yield result.json()).message}`);
                throw new Error('Error update Role User');
            }
            const responseUpdateRoleUser = yield result.json(); // Lectura y parseo del cuerpo de la respuesta JSON en un objeto ResponseUpdateRoleUser
            return responseUpdateRoleUser; // Retorno del cuerpo de la respuesta parseada como ResponseUpdateRoleUser
        });
    }
}
