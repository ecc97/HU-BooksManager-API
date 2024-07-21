export interface RequestCreateBook {
    title: string,
    author: string,
    description: string,
    summary: string,
    publicationDate: string
}

export interface ResponseCreateBook {
    message: string,
    data: Record<string, string>
}

export interface Book {
    id: string,
    title: string,
    author: string,
    description: string,
    summary: string,
    publicationDate: string
}

export interface ResponseBook {
    message: string,
    data: Record<string, string>
}

export interface ResponseBooks {
    message: string,
    data: Record<string, string>[]
}

export interface RequestUpdateBook {
    title?: string
    author?: string,
    description?: string,
    summary?: string,
    publicationDate: string
}

export interface ResponseUpdateBook{
    message: string,
    data: Record<string, string>
}

export interface ResponseDeleteBook {
    message: string
}