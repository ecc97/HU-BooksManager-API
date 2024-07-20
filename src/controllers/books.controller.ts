import { RequestCreateBook, ResponseCreateBook, ResponseBooks } from "../models/books.model";

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
}