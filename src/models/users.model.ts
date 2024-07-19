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

export interface ResponseUsers {
    message: string,
    data: Record<string, string>
}

export interface RequestUpdateRoleUser{
    role: string
}

export interface ResponseUpdateRoleUser {
    message: string,
    data: Record<string, string>
}