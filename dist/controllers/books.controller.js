var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class BooksController {
    // Constructor de la clase BooksController que inicializa la URL base de la API
    constructor(urlApi = 'http://190.147.64.47:5155/') {
        this.urlApi = urlApi;
    }
    // Método para crear un nuevo libro
    createBook(dataBook, token) {
        return __awaiter(this, void 0, void 0, function* () {
            let endpointBooks = 'api/v1/books'; // Definición del endpoint para la solicitud
            console.log(this.urlApi);
            // Configuración de los encabezados de la solicitud HTTP (Headers) con Autorización Token 
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };
            // Opciones de la solicitud HTTP (método POST, encabezados y cuerpo JSON)
            const reqOptions = {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(dataBook)
            };
            const url = this.urlApi + endpointBooks; // Construcción de la URL completa para la creación de libro
            const result = yield fetch(url, reqOptions); // Realización de la solicitud HTTP utilizando fetch
            console.log(`Status code: ${result.status}`); // Registro del código de estado de la respuesta en la consola
            // Verificación del código de estado de la respuesta
            if (result.status !== 201) {
                // En caso de un código de estado no exitoso, se registra y se lanza un error
                console.log(`Response Body ${(yield result.json()).message}`);
                throw new Error('Error create Book');
            }
            const responseBodyCreateBook = yield result.json(); // Lectura y parseo del cuerpo de la respuesta JSON en el objeto ResponseCreateBook
            return responseBodyCreateBook; // Retorno del cuerpo de la respuesta parseada como ResponseCreateBook
        });
    }
    // Método para obtener todos los libros
    getBooks(token) {
        return __awaiter(this, void 0, void 0, function* () {
            let endpointBooks = 'api/v1/books'; // Definición del endpoint para la solicitud
            console.log(this.urlApi);
            // Configuración de los encabezados de la solicitud HTTP (Headers) con Autorización Token 
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };
            // Opciones de la solicitud HTTP (método GET, encabezados)
            const reqOptions = {
                method: 'GET',
                headers: headers
            };
            const url = this.urlApi + endpointBooks; // Construcción de la URL completa para obtener todos los libros
            const result = yield fetch(url, reqOptions); // Realización de la solicitud HTTP utilizando fetch
            console.log(`Status code: ${result.status}`); // Registro del código de estado de la respuesta en la consola
            // Verificación del código de estado de la respuesta
            if (result.status !== 200) {
                // En caso de un código de estado no exitoso, se registra y se lanza un error
                console.log(`Response Body ${(yield result.json()).message}`);
                throw new Error('Error get Books');
            }
            const responseBodyBooks = yield result.json(); // Lectura y parseo del cuerpo de la respuesta JSON en un objeto ResponseBooks
            return responseBodyBooks; // Retorno del cuerpo de la respuesta parseada como ResponseBooks
        });
    }
    // Método para obtener un libro por su ID
    getBooksId(id, token) {
        return __awaiter(this, void 0, void 0, function* () {
            let endpointBooksId = `api/v1/books/${id}`; // Definición del endpoint para la solicitud
            console.log(this.urlApi);
            // Configuración de los encabezados de la solicitud HTTP (Headers) con Autorización Token 
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };
            // Opciones de la solicitud HTTP (método GET, encabezados)
            const reqOptions = {
                method: 'GET',
                headers: headers
            };
            const url = this.urlApi + endpointBooksId; // Construcción de la URL completa para obtener un libro por su ID
            const result = yield fetch(url, reqOptions); // Realización de la solicitud HTTP utilizando fetch
            console.log(`Status code: ${result.status}`); // Registro del código de estado de la respuesta en la consola
            // Verificación del código de estado de la respuesta
            if (result.status !== 200) {
                // En caso de un código de estado no exitoso, se registra y se lanza un error
                console.log(`Response Body ${(yield result.json()).message}`);
                throw new Error('Error get book by ID');
            }
            const responseBodyBooks = yield result.json(); // Lectura y parseo del cuerpo de la respuesta JSON en un objeto ResponseBook
            return responseBodyBooks; // Retorno del cuerpo de la respuesta parseada como ResponseBook
        });
    }
    // Método para actualizar un libro por su ID
    updateBookById(id, data, token) {
        return __awaiter(this, void 0, void 0, function* () {
            let endpointBookById = `api/v1/books/${id}`; // Definición del endpoint para la solicitud
            console.log(this.urlApi);
            // Configuración de los encabezados de la solicitud HTTP (Headers) con Autorización Token 
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
            const url = this.urlApi + endpointBookById; // Construcción de la URL completa para actualizar un libro por su ID
            const result = yield fetch(url, reqOptions); // Realización de la solicitud HTTP utilizando fetch
            console.log(`Status code: ${result.status}`); // Registro del código de estado de la respuesta en la consola
            // Verificación del código de estado de la respuesta
            if (result.status !== 200) {
                // En caso de un código de estado no exitoso, se registra y se lanza un error
                console.log(`Response Body ${(yield result.json()).message}`);
                throw new Error('Error updating book by id');
            }
            const responseBodyUpdateBook = yield result.json(); // Lectura y parseo del cuerpo de la respuesta JSON en un objeto ResponseUpdateBook
            return responseBodyUpdateBook; // Retorno del cuerpo de la respuesta parseada como ResponseUpdateBook
        });
    }
    // Método para eliminar un libro por su ID
    deleteBookById(id, token) {
        return __awaiter(this, void 0, void 0, function* () {
            let endpointDeleteBook = `api/v1/books/${id}`; // Definición del endpoint para la solicitud
            console.log(this.urlApi);
            // Configuración de los encabezados de la solicitud HTTP (Headers) con Autorización Token 
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };
            // Opciones de la solicitud HTTP (método DELETE, encabezados)
            const reqOptions = {
                method: 'DELETE',
                headers: headers
            };
            const url = this.urlApi + endpointDeleteBook; // Construcción de la URL completa para eliminar un libro por su ID
            const result = yield fetch(url, reqOptions); // Realización de la solicitud HTTP utilizando fetch
            console.log(`Status code: ${result.status}`); // Registro del código de estado de la respuesta en la consola
            // Verificación del código de estado de la respuesta
            if (result.status !== 200) {
                // En caso de un código de estado no exitoso, se registra y se lanza un error
                console.log(`Response Body ${(yield result.json()).message}`);
                throw new Error('Error deleting book');
            }
            const responseBodyDelete = yield result.json(); // Lectura y parseo del cuerpo de la respuesta JSON en un objeto ResponseDeleteBook
            return responseBodyDelete; // Retorno del cuerpo de la respuesta parseada como ResponseDeleteBook
        });
    }
}
