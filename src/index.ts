import { RequestLogin, ResponseLogin } from "./models/auth.model.js"
import { AuthController } from "./controllers/auth.controller.js"

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm') as HTMLFormElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;

    const authController: AuthController = new AuthController();

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const dataToLogin: RequestLogin= {
            email: emailInput.value,
            password: passwordInput.value
        };

        try {
            const resultLogin: ResponseLogin = await authController.postLogin(dataToLogin);
            const token: string = resultLogin.data.token;
            localStorage.setItem('token', token);
            alert('Bienvenido')
            window.location.href = 'views/pages/books.html';
        } catch (error) {
            console.error(`Login error: ${error}`);
        }
    });
});

