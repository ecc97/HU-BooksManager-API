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
// DOM cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtención de elementos del formulario y campos de entrada
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const authController = new AuthController(); // Instancia del controlador de autenticación
    // Evento de envío del formulario (inicio de sesión)
    loginForm.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        // Construcción del objeto de datos para iniciar sesión
        const dataToLogin = {
            email: emailInput.value,
            password: passwordInput.value
        };
        try {
            const resultLogin = yield authController.postLogin(dataToLogin); // Llamada al método para enviar los datos de inicio de sesión al servidor
            const token = resultLogin.data.token; // Extracción del token de la respuesta
            localStorage.setItem('token', token); // Almacenamiento del token en el localStorage
            alert('Bienvenido');
            window.location.href = 'views/pages/books.html'; // redirección a la página de libros
        }
        catch (error) {
            console.error(`Login error: ${error}`); // Manejo de errores en caso de falla en el inicio de sesión
        }
    }));
});
