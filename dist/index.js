var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AuthController } from "./controllers/auth.controller.js";
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const authController = new AuthController();
    loginForm.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const dataToLogin = {
            email: emailInput.value,
            password: passwordInput.value
        };
        try {
            const resultLogin = yield authController.postLogin(dataToLogin);
            const token = resultLogin.data.token;
            localStorage.setItem('token', token);
            alert('Bienvenido');
            window.location.href = 'views/pages/books.html';
        }
        catch (error) {
            console.error(`Login error: ${error}`);
        }
    }));
});
