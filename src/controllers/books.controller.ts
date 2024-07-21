import { RequestCreateBook, ResponseCreateBook, ResponseBooks, RequestUpdateBook, ResponseUpdateBook, ResponseDeleteBook, Book, ResponseBook } from "../models/books.model.js";

export class BooksController {
    // Constructor de la clase BooksController que inicializa la URL base de la API
    constructor(private urlApi: string = 'http://190.147.64.47:5155/') { 

    }

    // Método para crear un nuevo libro
    async createBook(dataBook: RequestCreateBook, token: string): Promise<ResponseCreateBook> {
        let endpointBooks: string = 'api/v1/books' // Definición del endpoint para la solicitud
        console.log(this.urlApi)

        // Configuración de los encabezados de la solicitud HTTP (Headers) con Autorización Token 
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        // Opciones de la solicitud HTTP (método POST, encabezados y cuerpo JSON)
        const reqOptions: RequestInit = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(dataBook)
        }

        const url: string = this.urlApi + endpointBooks // Construcción de la URL completa para la creación de libro
        const result: Response = await fetch(url, reqOptions) // Realización de la solicitud HTTP utilizando fetch

        console.log(`Status code: ${result.status}`) // Registro del código de estado de la respuesta en la consola
        // Verificación del código de estado de la respuesta
        if (result.status!== 201) {
            // En caso de un código de estado no exitoso, se registra y se lanza un error
            console.log(`Response Body ${(await result.json()).message}`);
            throw new Error('Error create Book')
        }

        const responseBodyCreateBook: ResponseCreateBook = await result.json() // Lectura y parseo del cuerpo de la respuesta JSON en el objeto ResponseCreateBook
        return responseBodyCreateBook; // Retorno del cuerpo de la respuesta parseada como ResponseCreateBook
    }
    
    // Método para obtener todos los libros
    async getBooks(token: string): Promise<ResponseBooks> {
        let endpointBooks: string = 'api/v1/books' // Definición del endpoint para la solicitud
        console.log(this.urlApi)

        // Configuración de los encabezados de la solicitud HTTP (Headers) con Autorización Token 
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        // Opciones de la solicitud HTTP (método GET, encabezados)
        const reqOptions: RequestInit = {
            method: 'GET',
            headers: headers
        }

        const url: string = this.urlApi + endpointBooks // Construcción de la URL completa para obtener todos los libros
        const result: Response = await fetch(url, reqOptions) // Realización de la solicitud HTTP utilizando fetch

        console.log(`Status code: ${result.status}`)  // Registro del código de estado de la respuesta en la consola
        // Verificación del código de estado de la respuesta
        if (result.status!== 200) {
            // En caso de un código de estado no exitoso, se registra y se lanza un error
            console.log(`Response Body ${(await result.json()).message}`); 
            throw new Error('Error get Books')
        }

        const responseBodyBooks: ResponseBooks = await result.json() // Lectura y parseo del cuerpo de la respuesta JSON en un objeto ResponseBooks
        return responseBodyBooks; // Retorno del cuerpo de la respuesta parseada como ResponseBooks
    }

    // Método para obtener un libro por su ID
    async getBooksId(id: string, token: string): Promise<ResponseBook> {
        let endpointBooksId: string = `api/v1/books/${id}` // Definición del endpoint para la solicitud
        console.log(this.urlApi)

        // Configuración de los encabezados de la solicitud HTTP (Headers) con Autorización Token 
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        // Opciones de la solicitud HTTP (método GET, encabezados)
        const reqOptions: RequestInit = {
            method: 'GET',
            headers: headers
        }

        const url: string = this.urlApi + endpointBooksId // Construcción de la URL completa para obtener un libro por su ID
        const result: Response = await fetch(url, reqOptions) // Realización de la solicitud HTTP utilizando fetch

        console.log(`Status code: ${result.status}`) // Registro del código de estado de la respuesta en la consola
        // Verificación del código de estado de la respuesta
        if (result.status!== 200) {
            // En caso de un código de estado no exitoso, se registra y se lanza un error
            console.log(`Response Body ${(await result.json()).message}`);
            throw new Error('Error get book by ID')
        }

        const responseBodyBooks: ResponseBook = await result.json() // Lectura y parseo del cuerpo de la respuesta JSON en un objeto ResponseBook
        return responseBodyBooks; // Retorno del cuerpo de la respuesta parseada como ResponseBook
    }

    // Método para actualizar un libro por su ID
    async updateBookById(id: string, data: RequestUpdateBook, token: string): Promise<ResponseUpdateBook> {
        let endpointBookById: string = `api/v1/books/${id}` // Definición del endpoint para la solicitud
        console.log(this.urlApi)
    
        // Configuración de los encabezados de la solicitud HTTP (Headers) con Autorización Token 
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
        
        const url: string = this.urlApi + endpointBookById  // Construcción de la URL completa para actualizar un libro por su ID
        const result: Response = await fetch(url, reqOptions) // Realización de la solicitud HTTP utilizando fetch
        
        console.log(`Status code: ${result.status}`) // Registro del código de estado de la respuesta en la consola
        // Verificación del código de estado de la respuesta
        if (result.status!== 200) {
            // En caso de un código de estado no exitoso, se registra y se lanza un error
            console.log(`Response Body ${(await result.json()).message}`)
            throw new Error('Error updating book by id')
        }
        
        const responseBodyUpdateBook: ResponseUpdateBook = await result.json() // Lectura y parseo del cuerpo de la respuesta JSON en un objeto ResponseUpdateBook
        return responseBodyUpdateBook // Retorno del cuerpo de la respuesta parseada como ResponseUpdateBook
    }
    
    // Método para eliminar un libro por su ID
    async deleteBookById(id: string, token: string): Promise<ResponseDeleteBook> {
        let endpointDeleteBook: string = `api/v1/books/${id}` // Definición del endpoint para la solicitud
        console.log(this.urlApi)
        
        // Configuración de los encabezados de la solicitud HTTP (Headers) con Autorización Token 
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    
        // Opciones de la solicitud HTTP (método DELETE, encabezados)
        const reqOptions: RequestInit = {
            method: 'DELETE',
            headers: headers
        }
    
        const url: string = this.urlApi + endpointDeleteBook // Construcción de la URL completa para eliminar un libro por su ID
        const result: Response = await fetch(url, reqOptions) // Realización de la solicitud HTTP utilizando fetch
    
        console.log(`Status code: ${result.status}`) // Registro del código de estado de la respuesta en la consola
        // Verificación del código de estado de la respuesta
        if (result.status !== 200) {
            // En caso de un código de estado no exitoso, se registra y se lanza un error
            console.log(`Response Body ${(await result.json()).message}`)
            throw new Error('Error deleting book')
        }
    
        const responseBodyDelete: ResponseDeleteBook = await result.json() // Lectura y parseo del cuerpo de la respuesta JSON en un objeto ResponseDeleteBook
        return responseBodyDelete // Retorno del cuerpo de la respuesta parseada como ResponseDeleteBook
    }
}