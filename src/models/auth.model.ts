export interface RequestLogin {
    email: string;
    password: string;
}

export interface ResponseLogin { 
    message: string,
    data: Record<string, string>
}