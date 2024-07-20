import { RequestCreateBook, ResponseCreateBook, ResponseBooks, RequestUpdateBook, ResponseUpdateBook, ResponseDeleteBook } from "../models/books.model";

export class BooksController {
    constructor(private urlApi: string = 'http://190.147.64.47:5155/') { 

    }

    async createBook(dataBook: RequestCreateBook, token: string): Promise<ResponseCreateBook> {
        let endpointBooks: string = 'api/v1/books'
        console.log(this.urlApi)

        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        const reqOptions: RequestInit = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(dataBook)
        }

        const url: string = this.urlApi + endpointBooks
        const result: Response = await fetch(url, reqOptions)

        console.log(`Status code: ${result.status}`)
        if (result.status!== 201) {
            console.log(`Response Body ${(await result.json()).message}`);
            throw new Error('Error create Book')
        }

        const responseBodyCreateBook: ResponseCreateBook = await result.json()
        return responseBodyCreateBook;
    }

    async getBooks(token: string): Promise<ResponseBooks> {
        let endpointBooks: string = 'api/v1/books'
        console.log(this.urlApi)

        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        const reqOptions: RequestInit = {
            method: 'GET',
            headers: headers
        }

        const url: string = this.urlApi + endpointBooks
        const result: Response = await fetch(url, reqOptions)

        console.log(`Status code: ${result.status}`)
        if (result.status!== 200) {
            console.log(`Response Body ${(await result.json()).message}`);
            throw new Error('Error get Books')
        }

        const responseBodyBooks: ResponseBooks = await result.json()
        return responseBodyBooks;
    }

    async getBooksId(id: string, token: string): Promise<ResponseBooks> {
        let endpointBooksId: string = `api/v1/books/${id}`
        console.log(this.urlApi)

        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        const reqOptions: RequestInit = {
            method: 'GET',
            headers: headers
        }

        const url: string = this.urlApi + endpointBooksId
        const result: Response = await fetch(url, reqOptions)

        console.log(`Status code: ${result.status}`)
        if (result.status!== 200) {
            console.log(`Response Body ${(await result.json()).message}`);
            throw new Error('Error get book by ID')
        }

        const responseBodyBooks: ResponseBooks = await result.json()
        return responseBodyBooks;
    }

    async updateBookById(id: string, data: RequestUpdateBook, token: string) {
        let endpointBookById: string = `api/v1/books/${id}`
        console.log(this.urlApi)
    
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    
        const reqOptions: RequestInit = {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(data)
        }
    
        const url: string = this.urlApi + endpointBookById
        const result: Response = await fetch(url, reqOptions)
    
        console.log(`Status code: ${result.status}`)
        if (result.status!== 200) {
            console.log(`Response Body ${(await result.json()).message}`)
            throw new Error('Error updating book by id')
        }
    
        const responseBodyUpdateBook: ResponseUpdateBook = await result.json()
        return responseBodyUpdateBook
      }

      async deleteBookById(id: string, token: string): Promise<ResponseDeleteBook> {
        let endpointDeleteBook: string = `api/v1/books/${id}`
        console.log(this.urlApi)
    
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    
        const reqOptions: RequestInit = {
            method: 'DELETE',
            headers: headers
        }
    
        const url: string = this.urlApi + endpointDeleteBook
        const result: Response = await fetch(url, reqOptions)
    
        console.log(`Status code: ${result.status}`)
        if (result.status !== 200) {
            console.log(`Response Body ${(await result.json()).message}`)
            throw new Error('Error deleting book')
        }
    
        const responseBodyDelete: ResponseDeleteBook = await result.json()
        return responseBodyDelete
    }
}