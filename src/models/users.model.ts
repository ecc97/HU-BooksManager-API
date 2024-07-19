export interface RequestCreateUser { 
    name: string,
    lastName: string,
    email: string,
    password: string
}

export interface ResponseCreateUser { 
    message: string,
    data: Record<string, string>
}